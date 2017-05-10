const getDatesObject = require('./date-sanitizer');

describe('GetDatesObject - ', function() {
  describe('Valid Date Format - ', function() {
    const dateStr = '01 01 1900, 31 12 2010';
    const expectedDateObj = {
      date1: { date: 1, month: 1, year: 1900 },
      date2: { date: 31, month: 12, year: 2010 }
    };

    it('Should match the expected date object', function() {
      expect(getDatesObject(dateStr))
              .toEqual(expectedDateObj);
    });
  });

  describe('Invalid Date Format - ', function() {
    const errMssg = 'Dates should be in the sequence of first date and then second date and of the format- DD MM YYYY, DD MM YYYY';

    const testSet = [
      { dateStr: '01 01 1970, 01 01 1969', expectedError: `date 2 is smaller than date 1. ${errMssg}` },
      { dateStr: '01011970, 01011969', expectedError: errMssg },
      { dateStr: 'asdad, asd%%&&', expectedError: errMssg },
      { dateStr: '01 01 1970,01 02 1970', expectedError: errMssg },
      { dateStr: '01 01 1970, 01 01 1970,', expectedError: errMssg },
      { dateStr: '01 01 1970', expectedError: errMssg },
      // Incorrect days
      { dateStr: 'aa 01 1970, 01 01 1970', expectedError: 'Number for days incorrect - should be between 0 - 31' },
      { dateStr: '0 01 1970, 01 01 1970', expectedError: 'Number for days incorrect - should be between 0 - 31' },
      { dateStr: '32 01 1970, 01 01 1970', expectedError: 'Number for days incorrect - should be between 0 - 31' },
      // Incorrect Month
      { dateStr: '01 aa 1970, 01 01 1970', expectedError: 'Number for month incorrect - should be between 1 - 12' },
      { dateStr: '01 0 1970, 01 01 1970', expectedError: 'Number for month incorrect - should be between 1 - 12' },
      { dateStr: '01 13 1970, 01 01 1970', expectedError: 'Number for month incorrect - should be between 1 - 12' },
      // Incorrect Year
      { dateStr: '01 01 1899, 01 01 1970', expectedError: 'Number for year incorrect - should be between 1900 - 2010' },
      { dateStr: '01 01 1899, 01 01 1970', expectedError: 'Number for year incorrect - should be between 1900 - 2010' },
      { dateStr: '01 01 aaaa, 01 01 3000', expectedError: 'Number for year incorrect - should be between 1900 - 2010' }
    ];

    testSet.forEach(testCase => {
      it(`Should throw an error for - ${testCase.dateStr}`, function() {
        expect(() => getDatesObject(testCase.dateStr)).toThrowError(TypeError, testCase.expectedError);
      });
    });
  });
});
