const dateDiff = require('./date-diff');

const testSet = [
      // Within Each month and next year
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
      // Dates are same
      { date1: '01 01 1970', date2: '01 01 1970', expectedDateDiff: 0 },
      // Dates are one day apart
      { date1: '31 12 1970', date2: '01 01 1971', expectedDateDiff: 1 },
      // Dates are a few years apart
      { date1: '01 01 2001', date2: '01 01 2005', expectedDateDiff: 1461 },
      // Dates are the boundary conditions
      { date1: '01 01 1900', date2: '31 12 2010', expectedDateDiff: 40541 },
      // Dates are between non leap and leap year
      { date1: '01 01 1900', date2: '01 01 2000', expectedDateDiff: 36524 }
];

describe('dateDiff - ', function() {
  testSet.forEach(testCase => {
    it('Should calculate the diffrence between the dates', function() {
      const date1 = testCase.date1.split(' ');
      const date2 = testCase.date2.split(' ');
      expect(dateDiff(Number(date1[0]), Number(date1[1]), Number(date1[2]),
                      Number(date2[0]), Number(date2[1]), Number(date2[2])))
      .toBe(testCase.expectedDateDiff);
    });
  });
});
