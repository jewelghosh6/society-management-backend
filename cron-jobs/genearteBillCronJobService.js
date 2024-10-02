const cron = require('node-cron');
const { convertUTCToReadableDateYear } = require('../utils/dateTimeFormatter');

function generateBills() {
    // Your logic to generate bills goes here
    console.log('Generating bills for all users...');
    // Example: Fetch users from database and generate bills
}

// Schedule the task to run at 10 AM on the 1st day of every month
// let job = cron.schedule('0 10 1 * *', () => {
//     console.log('Running the scheduled task...');
//     generateBills();
// });


// Keep the Node.js process running
console.log('Cron job scheduled. Node.js process running...');


// Function to be executed every 30 seconds
function runTask(date) {
    console.log('Running task... in every 10 Sec', convertUTCToReadableDateYear(date));
    // Your logic goes here
}

// Schedule the task to run every 10 seconds
// cron.schedule('*/10 * * * * *', (date) => {
//     runTask(date);
// });


/*

Explanation:
The cron.schedule('0 10 1 * *', callback) function schedules the callback to run at 10 AM on the 1st day of every month.

-- 0 - minute
-- 10 - hour
-- 1 - day of the month
-- 10 - hour
-- * - month (any month)
-- * - day of the week (any day of the week)
The generateBills function contains the logic to generate bills for all users. You need to implement the actual billing logic inside this function.
*/
