function convertTimeStamp(timestamp) {
    let date = new Date(timestamp);
    // console.log(d.getUTCHours()); // Hours
    // console.log(d.getUTCMinutes());
    // console.log(d.getUTCSeconds());

    return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
}

module.exports = {
    convertTimeStamp
}