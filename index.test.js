const { calculateResult, formatLogger, subtract, multiply, divide, getModulus, sum, checkNumbers } = require('./index.js');

describe('Operators tests', () => {
  describe('when operation', () => {
    it('should return if return of two numbers according to passed callback', () => {
      expect(calculateResult(7, 8, checkNumbers, sum)).toBe(15);
      expect(calculateResult(5, 13, checkNumbers, subtract)).toBe(-8);
      expect(calculateResult(78, 56, checkNumbers, multiply)).toBe(4368);
      expect(calculateResult(24, 8, checkNumbers, divide)).toBe(3);
      expect(calculateResult(15, 4, checkNumbers, getModulus)).toBe(3);
      expect(calculateResult(15, 'fadf32', checkNumbers, multiply)).toBe('Error with numbers. Operation impossible');
      expect(calculateResult('dfaf', 'fadf32', checkNumbers, multiply)).toBe('Error with numbers. Operation impossible');
    });
  });

  describe('when formatLogger', () => {
    it('should return formatted message', () => {
      expect(formatLogger('Error')('Unknown parameter')).toBe('Error: Unknown parameter');
      expect(formatLogger('Info')('New user added')).toBe('Info: New user added');
      expect(formatLogger('Warning')('Unsupported format type')).toBe('Warning: Unsupported format type');
    });
  });
});
