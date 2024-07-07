const { getUsersAndGroupListFromDB, createOneToOneConversation, getConversationIdByEventKeyViceVerca, getConversationListByUserId, getConversationDetailsByEventKey, getMessagesByConversationId } = require("../services/conversationServices");


const getUsersAndGroupList = async (req, res) => {
    let searchQuery = req.query["search-key"]
    // console.log("searchQuery", searchQuery, { payload: req.user });
    try {
        let resp = await getUsersAndGroupListFromDB(searchQuery, req.user)
        res.status(resp[0]).send({
            success: resp[0] == 200,
            message: resp[0] == 200 ? "Users Found" : resp[1],
            ...(resp[0] == 200 ? { data: resp[1] } : {})
        })
        return;
    } catch (error) {
        console.error("Error: ", error);
    }
}

const createConversation = async (req, res) => {
    let conversation_type = req.body.conversation_type;
    let idOfOtherUser = req.body.user_id;
    try {

        let resp = await createOneToOneConversation(idOfOtherUser, req.user);
        res.status(resp[0]).send({
            success: resp[0] === 201 || 200,
            message: resp[0] == 201 ? "new Conversation created" : resp[1],
            ...(resp[0] == 201 ? { data: resp[1] } : {})
        })
        return;
    } catch (error) {
        console.error(error);
    }
}

const fetchMessages = async (req, res) => {
    let eventKey = req.query['event-key'];
    console.log("eventKey", eventKey);
    try {
        let convId = await getConversationIdByEventKeyViceVerca(eventKey, '');

        // await getMessagesByConversationId(convId)



    } catch (error) {
        console.error(error);
    }

}

const fetchConversationListByUserId = async (req, res) => {
    try {
        let resp = await getConversationListByUserId(req.user.id);
        // console.log(">>>>>>>", { resp });
        res.status(200).send({
            success: true,
            data: resp[1]
        })
    } catch (error) {
        console.log(error);
    }
}

const fetchConversationByEventKey = async (req, res) => {
    let event_key = req.query["chatEventKey"];
    console.log("event_key+++", event_key);
    try {
        let resp = await getConversationDetailsByEventKey(event_key, req.user.id);
        res.send({
            success: true,
            data: resp
        })
        return;
    } catch (error) {
        console.error(error);
    }
}

const getMessages = async (req, res) => {
    let conversation_id = req.query['conversation_id']
    try {
        let resp = await getMessagesByConversationId(conversation_id)
        res.send({ success: true, data: resp });
        return;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getUsersAndGroupList,
    createConversation,
    fetchMessages,
    fetchConversationListByUserId,
    fetchConversationByEventKey, getMessages
}