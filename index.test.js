const { calculateResult, getMultiplicationTable, isNumberEven, findLargestNumber, findTriangleType, findDaysInMonth, sum } = require('./index.js');

describe('Operators tests', () => {
  describe('when sum', () => {
    it('should return sum of numbers', () => {
      expect(sum(7, 8)).toBe(15);
      expect(sum(5, 13)).toBe(18);
      expect(sum(78, 56)).toBe(134);
      expect(sum(-16, 24)).toBe(8);
      expect(sum(56, 2)).toBe(58);
      expect(sum(12, 0)).toBe(12);
      expect(sum(1, -1)).toBe(0);
    });
  });

  describe('when isNumberEven', () => {
    it('should return if number is even', () => {
      expect(isNumberEven(7)).toBe(false);
      expect(isNumberEven(19)).toBe(false);
      expect(isNumberEven(2)).toBe(true);
      expect(isNumberEven(10)).toBe(true);
      expect(isNumberEven(34.13)).toBe(false);
      expect(isNumberEven(46)).toBe(true);
      expect(isNumberEven(14542)).toBe(true);
    });
  });

  describe('when findLargestNumber', () => {
    it('should return largest number', () => {
      expect(findLargestNumber(2, 19)).toBe('19 is the largest number');
      expect(findLargestNumber(645, 4838)).toBe('4838 is the largest number');
      expect(findLargestNumber(23727, 332)).toBe('23727 is the largest number');
      expect(findLargestNumber(10, 5)).toBe('10 is the largest number');
      expect(findLargestNumber(33,33)).toBe('33 is equal to 33');
      expect(findLargestNumber(46, 53)).toBe('53 is the largest number');
      expect(findLargestNumber(67, 85)).toBe('85 is the largest number');
    });
  });

  describe('when findTriangleType', () => {
    it('should return triangle type', () => {
      expect(findTriangleType(100, 90, 99)).toBe('Scalene triangle');
      expect(findTriangleType(50, 50, 50)).toBe('Equilateral triangle');
      expect(findTriangleType(45, 45, 30)).toBe('Isosceles triangle');
      expect(findTriangleType(44, 34, 69)).toBe('Scalene triangle');
      expect(findTriangleType(25, 25, 25)).toBe('Equilateral triangle');
      expect(findTriangleType(87, 87, 126)).toBe('Isosceles triangle');
      expect(findTriangleType(65, 65, 65)).toBe('Equilateral triangle');
    });
  });

  describe('when findDaysInMonth', () => {
    it('should return number days in month', () => {
      expect(findDaysInMonth(2, 2016)).toBe('The Month has 29 days');
      expect(findDaysInMonth(2, 2017)).toBe('The Month has 28 days');
      expect(findDaysInMonth(6, 2020)).toBe('The Month has 30 days');
      expect(findDaysInMonth(1, 2021)).toBe('The Month has 31 days');
      expect(findDaysInMonth(25, 1999)).toBe('Invalid Month of value 25');
      expect(findDaysInMonth(4, 2000)).toBe('The Month has 30 days');
      expect(findDaysInMonth(9, 2022)).toBe('The Month has 30 days');
    });
  });

  describe('when operation', () => {
    it('should return if return of two numbers and operation', () => {
      expect(calculateResult(7, 8, 'add')).toBe(15);
      expect(calculateResult(5, 13, 'subtract')).toBe(-8);
      expect(calculateResult(78, 56, 'multiply')).toBe(4368);
      expect(calculateResult(24, 8, 'divide')).toBe(3);
      expect(calculateResult(15, 4, 'modulus')).toBe(3);
      expect(calculateResult(15, 4, 'someunknownoperation')).toBe('someunknownoperation is an invalid operation');
    });
  });

  describe('when getMultiplicationTable', () => {
    it('should return if return of two numbers and operation', () => {
      expect(getMultiplicationTable()).toBe('==== 2 ==== \n' +
        '2 * 1 = 2 \n' +
        '2 * 2 = 4 \n' +
        '2 * 3 = 6 \n' +
        '2 * 4 = 8 \n' +
        '2 * 5 = 10 \n' +
        '2 * 6 = 12 \n' +
        '2 * 7 = 14 \n' +
        '2 * 8 = 16 \n' +
        '2 * 9 = 18 \n' +
        '2 * 10 = 20 \n' +
        '==== 3 ==== \n' +
        '3 * 1 = 3 \n' +
        '3 * 2 = 6 \n' +
        '3 * 3 = 9 \n' +
        '3 * 4 = 12 \n' +
        '3 * 5 = 15 \n' +
        '3 * 6 = 18 \n' +
        '3 * 7 = 21 \n' +
        '3 * 8 = 24 \n' +
        '3 * 9 = 27 \n' +
        '3 * 10 = 30 \n' +
        '==== 4 ==== \n' +
        '4 * 1 = 4 \n' +
        '4 * 2 = 8 \n' +
        '4 * 3 = 12 \n' +
        '4 * 4 = 16 \n' +
        '4 * 5 = 20 \n' +
        '4 * 6 = 24 \n' +
        '4 * 7 = 28 \n' +
        '4 * 8 = 32 \n' +
        '4 * 9 = 36 \n' +
        '4 * 10 = 40 \n' +
        '==== 5 ==== \n' +
        '5 * 1 = 5 \n' +
        '5 * 2 = 10 \n' +
        '5 * 3 = 15 \n' +
        '5 * 4 = 20 \n' +
        '5 * 5 = 25 \n' +
        '5 * 6 = 30 \n' +
        '5 * 7 = 35 \n' +
        '5 * 8 = 40 \n' +
        '5 * 9 = 45 \n' +
        '5 * 10 = 50 \n' +
        '==== 6 ==== \n' +
        '6 * 1 = 6 \n' +
        '6 * 2 = 12 \n' +
        '6 * 3 = 18 \n' +
        '6 * 4 = 24 \n' +
        '6 * 5 = 30 \n' +
        '6 * 6 = 36 \n' +
        '6 * 7 = 42 \n' +
        '6 * 8 = 48 \n' +
        '6 * 9 = 54 \n' +
        '6 * 10 = 60 \n' +
        '==== 7 ==== \n' +
        '7 * 1 = 7 \n' +
        '7 * 2 = 14 \n' +
        '7 * 3 = 21 \n' +
        '7 * 4 = 28 \n' +
        '7 * 5 = 35 \n' +
        '7 * 6 = 42 \n' +
        '7 * 7 = 49 \n' +
        '7 * 8 = 56 \n' +
        '7 * 9 = 63 \n' +
        '7 * 10 = 70 \n' +
        '==== 8 ==== \n' +
        '8 * 1 = 8 \n' +
        '8 * 2 = 16 \n' +
        '8 * 3 = 24 \n' +
        '8 * 4 = 32 \n' +
        '8 * 5 = 40 \n' +
        '8 * 6 = 48 \n' +
        '8 * 7 = 56 \n' +
        '8 * 8 = 64 \n' +
        '8 * 9 = 72 \n' +
        '8 * 10 = 80 \n' +
        '==== 9 ==== \n' +
        '9 * 1 = 9 \n' +
        '9 * 2 = 18 \n' +
        '9 * 3 = 27 \n' +
        '9 * 4 = 36 \n' +
        '9 * 5 = 45 \n' +
        '9 * 6 = 54 \n' +
        '9 * 7 = 63 \n' +
        '9 * 8 = 72 \n' +
        '9 * 9 = 81 \n' +
        '9 * 10 = 90 \n');
    });
  });
});
