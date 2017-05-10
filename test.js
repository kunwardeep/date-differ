
const dateDiff = require('./date-diff');

const testSets = [
      { date1: '31 12 1970', date2: '01 01 1971', expectedDateDiff: 1 },
      { date1: '01 01 1970', date2: '01 01 1971', expectedDateDiff: 365 },
      { date1: '01 02 1970', date2: '01 01 1971', expectedDateDiff: 334 },
      { date1: '01 03 1970', date2: '01 01 1971', expectedDateDiff: 306 },
      { date1: '01 04 1970', date2: '01 01 1971', expectedDateDiff: 275 },
      { date1: '01 05 1970', date2: '01 01 1971', expectedDateDiff: 245 },
      { date1: '01 06 1970', date2: '01 01 1971', expectedDateDiff: 214 },
      { date1: '01 07 1970', date2: '01 01 1971', expectedDateDiff: 184 },
      { date1: '01 08 1970', date2: '01 01 1971', expectedDateDiff: 153 },
      { date1: '01 09 1970', date2: '01 01 1971', expectedDateDiff: 122 },
      { date1: '01 10 1970', date2: '01 01 1971', expectedDateDiff: 92 },
      { date1: '01 11 1970', date2: '01 01 1971', expectedDateDiff: 61 },
      { date1: '01 12 1970', date2: '01 01 1971', expectedDateDiff: 31 },
      { date1: '01 01 1970', date2: '01 01 1970', expectedDateDiff: 0 },
      { date1: '01 01 1970', date2: '02 01 1970', expectedDateDiff: 1 },
      { date1: '01 01 1970', date2: '02 02 1970', expectedDateDiff: 32 },
      { date1: '01 01 2001', date2: '01 01 2005', expectedDateDiff: 1461 },
      { date1: '01 01 1900', date2: '01 01 2010', expectedDateDiff: 40177 }
];

describe('Date Diff - ', function() {
  testSets.forEach(testSet => {
    it('Should calculate the diffrence between the dates', function() {
      const date1 = testSet.date1.split(' ');
      const date2 = testSet.date2.split(' ');
      expect(dateDiff(date1[0], date1[1], date1[2], date2[0], date2[1], date2[2]))
      .toBe(testSet.expectedDateDiff);
    });
  });
});
