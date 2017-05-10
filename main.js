const dateDiff = require('./date-diff');
const getDatesObject = require('./date-sanitizer');
const fs = require('fs');

const rawData = fs.readFileSync('./data.txt').toString();

const datesObj = getDatesObject(rawData);
const difference = dateDiff(datesObj.date1.date, datesObj.date1.month, datesObj.date1.year,
                            datesObj.date2.date, datesObj.date2.month, datesObj.date2.year);

console.log(`${datesObj.date1.date} ${datesObj.date1.month} ${datesObj.date1.year}, ${datesObj.date2.date} ${datesObj.date2.month} ${datesObj.date2.year} ${difference}`);
