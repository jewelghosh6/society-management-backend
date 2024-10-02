function convertUTCToReadableDateYear(utcTimestamp) {
    // Assuming the timestamp is in milliseconds
    // const utcTimestamp = 1625140800000; // Example timestamp

    // Create a Date object from the UTC timestamp
    const date = new Date(utcTimestamp);

    // Format the date to a human-readable string
    const humanReadableDate = date.toLocaleString('en-US', {
        timeZone: 'UTC',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    });

    // console.log(humanReadableDate); // Output: "July 1, 2021, 1:00:00 PM"
    return humanReadableDate;
}

module.exports = { convertUTCToReadableDateYear };