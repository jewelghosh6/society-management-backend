const socketIo = require('socket.io');
const jwt = require('jsonwebtoken')


const redisClient = require('./utils/redis-db');
const { saveMessages } = require('./services/conversationServices');
// const { server } = require('./server');

const authenticate = (socket, next) => {
    const token = socket.handshake.query.token;
    // console.log(token, "token........");
    if (token) {
        jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (err, payload) => {
            if (err) {
                return next(new Error('Authentication error'));
            }
            socket.userId = payload.id;
            // console.log("payload", payload);
            next();
        });
    } else {
        next(new Error('Authentication error'));
    }
};

const configureSocket = (server) => {


    const io = socketIo(server,
        {
            cors: {
                origin: "*", // Replace with your React app's origin
                // methods: ["GET", "POST"],
                // allowedHeaders: ["my-custom-header"],
                // credentials: true
            }
        }
    );


    io.use(authenticate)

    io.on('connection', async (socket) => {
        console.log('New client connected:>>>>>>', socket.id, socket.userId);

        let data11 = await redisClient.set(`user:${socket.userId}`, socket.id);
        // console.log({ data11 });


        // Handle 1-to-1 message

        socket.on('direct_message', async (data) => {
            const { recipientId, message, chatEventKey, conversationId } = data;
            // console.log(".........::::::", recipientId, message);
            try {
                let respFromSaveMsg = await saveMessages({ user_id: socket.userId, conversation_id: conversationId, message_text: message });
                console.log({ respFromSaveMsg });
                console.log({ recipientId });

                let socketIds = await redisClient.get(`user:${recipientId}`)
                console.log("socketIds---------", socketIds);

                io.to(socketIds).emit('direct_message', {
                    senderId: socket.userId,
                    message_text: message,
                    chatEventKey,
                    created_at: new Date()
                });
            } catch (error) {
                console.log("errttt:", error);
            }

            // if (socketIds) {
            //     // socketIds.forEach((socketId) => {
            //     io.to(socketIds).emit('direct_message', {
            //         senderId: socket.userId,
            //         message: message,
            //     });
            //     // });
            // }
            // });
        });

        // socket.on('direct_message', (messageObj) => {
        //     console.log(messageObj);

        //     socket.emit('direct_message', { ...messageObj, sent_at: new Date() })
        //     socket.broadcast.emit('direct_message', { from: socket.id, ...messageObj, sent_at: new Date() });

        //     // const toSocketId = users[to];
        //     // if (toSocketId) {
        //     //     io.to(toSocketId).emit('private_message', { from: socket.id, message });
        //     // }
        // });

        // // Handle 1-to-many message
        // socket.on('broadcast_message', (message) => {
        //     socket.broadcast.emit('broadcast_message', { from: socket.id, message });
        // });

        // Handle disconnect
        socket.on('disconnect', () => {
            // for (const username in users) {
            //     if (users[username] === socket.id) {
            //         delete users[username];
            //         break;
            //     }
            // }
            console.log('Client disconnected:', socket.id);
        });
    });

    return io;
}

module.exports = {
    configureSocket
}