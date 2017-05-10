
const isLeap = year => ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0)));

const getNumberOfDaysInTheYear = year => {
  if (isLeap(year)) {
    return 366;
  }
  return 365;
};

const getNumberOfDaysPassedInTheYear = (d, m, y) => {
  const days = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  let numberOfDaysTillNow = days[m - 1] + d;
  if (m > 1 && isLeap(y)) {
    numberOfDaysTillNow++;
  }
  return numberOfDaysTillNow;
};

const dateDiff = (date1, month1, year1, date2, month2, year2) => {
  const d1 = Number(date1);
  const m1 = Number(month1);
  const y1 = Number(year1);
  const d2 = Number(date2);
  const m2 = Number(month2);
  const y2 = Number(year2);

  let daysInBetweenTheYears = 0;

  if ((y2 - y1) > 0) {
    for (let i = y1 + 1; i < y2; i++) {
      daysInBetweenTheYears += getNumberOfDaysInTheYear(i);
    }
    const daysLeftInEarlierYear = getNumberOfDaysInTheYear(y1) - getNumberOfDaysPassedInTheYear(d1, m1, y1);
    const daysLapsedInLaterYear = getNumberOfDaysPassedInTheYear(d2, m2, y2);
    return daysLeftInEarlierYear + daysInBetweenTheYears + daysLapsedInLaterYear;
  }

  return getNumberOfDaysPassedInTheYear(d2, m2, y2) - getNumberOfDaysPassedInTheYear(d1, m1, y1);
};

module.exports = dateDiff;
