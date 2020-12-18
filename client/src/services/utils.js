
// Method converts psql timestamp and returns formatted month/date/year format e.g. 01/20/2020
function convertTimeStamp(timestamp) {
    let date = new Date(timestamp);
    return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
}

module.exports = {
    convertTimeStamp
}