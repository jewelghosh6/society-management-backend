const { where, Op } = require("sequelize");
const Conversations = require("../db/models/conversations");
const UserHasConversations = require("../db/models/userHasConversations");
const { generateRandomString } = require("../utils/randomStringGeneartor");
const { findUserByKeyword } = require("./userService");
const Messages = require("../db/models/messages");
const Users = require("../db/models/users");

const getUsersAndGroupListFromDB = async (searchQuery, userObj) => {
    try {
        //Searcg for users
        let foundUsers = await findUserByKeyword(searchQuery);
        //Exclude the same user from search result 
        let filteredUsers = foundUsers.filter((item) => item.id !== userObj.id);

        //Search for public groups
        let foundGroups = await findGroupsByKeyword(searchQuery);
        return [200, { users: filteredUsers, groups: foundGroups }];
    } catch (error) {
        console.log(error);
        return [400, error]
    }
}


const findGroupsByKeyword = async (keyword) => {
    try {
        let listOfGroups = await Conversations.findAll({
            where: {
                [Op.or]: {
                    conversation_name: {
                        [Op.iLike]: `%${keyword}%`
                    }
                }
            }
        });
        return listOfGroups.map(group => group.dataValues);
    } catch (error) {
        console.log(error);
    }
}

const createOneToOneConversation = async (idOfOtherUser, userObj) => {
    try {
        //First Check weather any one to one conversation exist already b/w these 2 users
        let userIds = [idOfOtherUser, userObj.id];

        let conversationExist = await check1to1ConversationExsistanceByUserIds(userIds)

        if (conversationExist) {
            return [200, "Conversation Already exists"]
        }

        //If There is no exsisting 1 to 1 convesation b/w these 2 users then create a new one
        let uniqueEventKey = generateRandomString(10);
        //Craete new conversation
        let createdConversation = await Conversations.create({
            conversation_type: 'direct',
            event_key: uniqueEventKey,
            is_public: false
        })
        //Now Insert users for this conversation in Junction table
        userIds.forEach(async (item, i) => {
            try {
                let userconv = await UserHasConversations.create({
                    conversation_id: createdConversation.id,
                    user_id: item
                })
                console.log(`userconv-${i}`, userconv);
            } catch (error) {
                console.log(error);
            }
        })
        return [201, createdConversation];
    } catch (error) {
        console.error(error);
        return [400, error]
    }
}

const getConversationIdByEventKeyViceVerca = async (event_key = null, conversation_id = null) => {

    try {
        let convObj = await Conversations.findOne({
            where: {
                [Op.or]: [
                    { event_key: event_key },
                    { id: conversation_id }
                ]
            }
        })
        return convObj;
    } catch (error) {
        console.log(error);
    }
}

const getMessagesByConversationId = async (conversation_id) => {
    try {
        let messages = await Messages.findAll({
            where: {
                conversation_id
            },
            include: [
                {
                    model: Users, // will create a left join
                    attributes: ["first_name", "last_name"],
                }]
        })
        return messages.map(item => { return { ...item.dataValues, senderName: `${item.dataValues.user.first_name} ${item.dataValues.user.last_name}` } })
    } catch (error) {
        console.error(error);
    }
}

const check1to1ConversationExsistanceByUserIds = async (idArr) => {
    try {
        let userConvsObjs = await UserHasConversations.findAll({
            where: {
                user_id: {
                    [Op.in]: idArr
                }
            },
            include: [{
                model: Conversations,
                where: {
                    conversation_type: 'direct'
                }
            }]
        })
        //If userConvsObjs array length is falsy then no conversation exist
        if (!userConvsObjs.length) {
            return false
        }

        //format the userConvsObjs
        let formattedUserConvsObjs = userConvsObjs.map(item => item.dataValues)

        let convForUser1 = []
        let convForUser2 = [];
        formattedUserConvsObjs.forEach(item => {
            if (item.user_id === idArr[0]) convForUser1.push(item.conversation_id)
            else if (item.user_id === idArr[1]) convForUser2.push(item.conversation_id)
        })

        let x = convForUser1.filter(item => {
            if (convForUser2.includes(item)) return true
        })
        console.log({ x });

        //Considered only 1 to 1 Conversations , Have to check If Conversations are not groups
        return Boolean(x.length)
    } catch (error) {
        console.error(error);
    }
}

// check1to1ConversationExsistanceByUserIds([1, 2])
const getConversationListByUserId = async (userId) => {
    try {
        let convObj = await UserHasConversations.findAll({
            where: {
                user_id: userId
            },
            include: [
                {
                    model: Conversations, // will create a left join
                    // attributes: ["role_name"],
                }
                // {
                //     model: Users, // will create a left join
                //     // attributes: ["role_name"],
                // },
            ],
        })


        let formattedConversationObjs = await Promise.all(convObj.map(async (item) => {
            let conversationParticipants;
            // let sender;
            // let recipient = [];
            try {
                conversationParticipants = await getConversationParticipantsByConversationId(item.dataValues.conversation_id, userId);


                // conversationParticipants.forEach(item => {
                //     if (item.user_id === userId) sender = item;
                //     else recipient.push(item);
                // })
            } catch (error) {
                console.error(error);
            }
            // console.log("......................", { conversationParticipants });
            // return {
            //     participants: { sender, recipient },
            //     ...item.dataValues,
            //     ...item.dataValues.conversation.dataValues,
            //     // ...item.dataValues.user.dataValues
            // };

            return conversationParticipants
        }));


        return [200, formattedConversationObjs]
    } catch (error) {
        console.error(error);
        return [400, error]
    }
}


const getConversationParticipantsByConversationId = async (conversation_id, sender_Id) => {
    let sender;
    let recipient = [];
    try {
        let userObjArr = await UserHasConversations.findAll({
            where: {
                conversation_id
            },
            include: [
                {
                    model: Users, // will create a left join
                },
                {
                    model: Conversations, // will create a left join
                },
            ],
        })
        // let formattedUserConversationObjsArr = userObjArr.map(item => {
        //     return {
        //         ...item.dataValues,
        //         ...item.dataValues.user.dataValues
        //     }
        // });

        console.log("user____>>>", userObjArr);

        userObjArr.forEach(item => {
            console.log({item},",,,,ppLL",item.dataValues.user_id,sender_Id);
            
            if (item.dataValues.user_id === sender_Id) sender = item.dataValues;
            else recipient.push(item.dataValues);
        })
        console.log("_________", {
            participants: { sender:sender, recipient },
            // ...userObjArr.dataValues,
        });
        // return formattedUserConversationObjsArr;
        return {
            participants: { sender, recipient },
            // ...item.dataValues,
            // ...userObjArr.conversation,
            // ...item.dataValues.user.dataValues
        };
    } catch (error) {
        console.log(error);
        return null;
    }
}

const getConversationDetailsByEventKey = async (event_key, sender_Id) => {
    try {
        let convObj = await getConversationIdByEventKeyViceVerca(event_key, null);

        let RespObj = await getConversationParticipantsByConversationId(convObj.id, sender_Id)

        console.log("RespObj", RespObj);

        return RespObj;
    } catch (error) {
        console.log(error);
    }
}

const saveMessages = async (data) => {
    try {
        let resp = await Messages.create(data);
        return resp.dataValues;
    } catch (error) {
        console.error(error);
    }
}

const addUserInGroupChat = async (conversation_id, user_id) => {
    try {
        let resp = await UserHasConversations.create({ conversation_id, user_id });
        return resp;
    } catch (error) {
        console.log(error);
    }
}

// getConversationDetailsByEventKey("3dfPK3WmLx");
// getConversationListByUserId(1);
// getConversationIdByEventKeyViceVerca(null, 18)
// getConversationParticipantsByConversationId(17);
// getConversationParticipantsByConversationId(18, 4)

module.exports = {
    getUsersAndGroupListFromDB,
    createOneToOneConversation,
    getConversationIdByEventKeyViceVerca,
    getConversationListByUserId,
    getConversationParticipantsByConversationId,
    getConversationDetailsByEventKey,
    getMessagesByConversationId,
    saveMessages,
    addUserInGroupChat
}