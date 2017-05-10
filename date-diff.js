
const isLeap = year => ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0)));

const getNumberOfDaysInTheYear = year => (isLeap(year) ? 366 : 365);

const getNumberOfDaysPassedInTheYear = (date, month, year) => {
  const arrOfAggregatedDaysByMonth = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  const february = 2;

  let numberOfDaysTillNow = arrOfAggregatedDaysByMonth[month - 1] + date;
  if (month >= february && isLeap(year)) {
    numberOfDaysTillNow++;
  }
  return numberOfDaysTillNow;
};

const dateDiff = (date1, month1, year1, date2, month2, year2) => {
  let daysInBetweenTheYears = 0;

  if ((year2 - year1) > 0) {
    for (let i = year1 + 1; i < year2; i++) {
      daysInBetweenTheYears += getNumberOfDaysInTheYear(i);
    }
    const daysLeftInEarlierYear = getNumberOfDaysInTheYear(year1) - getNumberOfDaysPassedInTheYear(date1, month1, year1);
    const daysLapsedInLaterYear = getNumberOfDaysPassedInTheYear(date2, month2, year2);
    return daysLeftInEarlierYear + daysInBetweenTheYears + daysLapsedInLaterYear;
  }

  return getNumberOfDaysPassedInTheYear(date2, month2, year2) - getNumberOfDaysPassedInTheYear(date1, month1, year1);
};

module.exports = dateDiff;
