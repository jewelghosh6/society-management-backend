const { Client } = require('pg');
const { getUserIdByUserEmail } = require('../services/userService');
// const { Client } = pg;
const client = new Client({
    user: 'postgres',
    password: '1111',
    host: 'localhost',
    port: 5432,
    database: 'SMSDB',
  })
async function executeQuery(){
    try {
        
        await client.connect()
        console.log("hewe 3");

        const res1 = await client.query(`SELECT * FROM "users"`)


        const res = await client.query(`SELECT "id" FROM "users" AS "users" WHERE "users"."email_id" = 'jewel@gmail.com'`)
        console.log(res1) // Hello world!
        await client.end()
    } catch (error) {
        console.log(error);
    }
}
console.log("here");

// executeQuery();

getUserIdByUserEmail('jewel@gmail.com');