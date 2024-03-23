require("dotenv").config();
const { createClient } = require("redis");

const client = createClient({
  password: process.env.REDIS_DB_PASSWORD,
  socket: {
    host: process.env.REDIS_DB_HOST,
    port: process.env.REDIS_DB_PORT,
  },
});

client
  .connect()
  .then(() => console.log("redis db connected"))
  .catch(() => console.log("error connecting redis db"));

client.on("error", (err) => { //You MUST listen to error events. If a client doesn’t have at least one error listener
  console.log(err.message);   //registered and an error occurs, that error will be thrown and the Node.js process will exit.
});

client.on("end", () => {
  console.log("Client disconnected from redis");
});

module.exports = client;
