const errMssg = 'Dates should be in the sequence of first date and then second date and of the format- DD MM YYYY, DD MM YYYY';
const expectedNumberOfSpacesinRawString = 6;
const maxNumberOfDays = 31;
const maxNumberOfMonths = 12;
const maxNumberOfYear = 2010;
const minNumberOfYear = 1900;

const getDateFromString = dateStr => {
  const dateArr = dateStr.trim().split(' ');
  if (dateArr.length !== 3) {
    throw new TypeError(errMssg);
  }

  const date = Number(dateArr[0]);
  if (isNaN(date) || date > maxNumberOfDays || date <= 0) {
    throw new TypeError(`Number for days incorrect - should be between 0 - ${maxNumberOfDays}`);
  }

  const month = Number(dateArr[1]);
  if (isNaN(month) || month > maxNumberOfMonths || month <= 0) {
    throw new TypeError(`Number for month incorrect - should be between 1 - ${maxNumberOfMonths}`);
  }

  const year = Number(dateArr[2]);
  if (isNaN(year) || year > maxNumberOfYear || year < minNumberOfYear) {
    throw new TypeError(`Number for year incorrect - should be between ${minNumberOfYear} - ${maxNumberOfYear}`);
  }

  return { date, month, year };
};

const getDatesObject = data => {
  const dateArr = data.trim().split(',');
  const spacesInTheString = data.trim().split(' ').length;

  if (dateArr.length !== 2 || spacesInTheString !== expectedNumberOfSpacesinRawString) {
    throw new TypeError(errMssg);
  }

  const date1 = getDateFromString(dateArr[0]);
  const date2 = getDateFromString(dateArr[1]);

  if (date2.year < date1.year) {
    throw new TypeError(`date 2 is smaller than date 1. ${errMssg}`);
  }

  return { date1, date2 };
};

module.exports = getDatesObject;
