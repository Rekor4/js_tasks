/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// function should return two numbers
const sum = (a, b) => {
  return a + b;
};

/**
 * @param {number} num
 * @return {boolean}
 */
// function should return if number is even
const isNumberEven = (num) => {
  if (num % 2 === 0) {
    num = true
  }else {
    num = false
  }
  return num
};

/**
 * @param {number} num1
 * @param {number} num2
 * @return {string}
 */
// Write logic to compare two numbers and return which number is greater or they are equal
const findLargestNumber = (num1, num2) => {
  let largestNum
  let res1 = ' is the largest number'
  let res2 = ' is equal to '

  if (num1 > num2) {
      largestNum = num1
      return largestNum + res1
  } else if (num2 > num1) {
      largestNum = num2
      return largestNum + res1
  } else {
      largestNum = num1
      return largestNum + res2 + largestNum
  }
};


/**
 * @param {number} side1
 * @param {number} side2
 * @param {number} side3
 * @return {string}
 */
// function should return type of triangle
const findTriangleType = (side1, side2, side3) => {
  let scal = 'Scalene triangle'
  let isol = 'Isosceles triangle'
  let eql = 'Equilateral triangle'

  if (side1 === side2 && side2 === side3) {
      return eql
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      return  isol
  } else {
      return scal
  }
};

/**
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
//function should return amount of days in month
const findDaysInMonth = (month, year) => {

  if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    return 'The Month has ' + 31 + ' days'
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 'The Month has ' + 30 + ' days'
} else if (month === 2 && year % 4 === 0) {
    return 'The Month has ' + 29 + ' days'
} else if (month === 2 && year % 4 !== 0) {
    return 'The Month has ' + 28 + ' days'
} else {
    return 'Invalid Month of value ' + `${month}`
}
};

/**
 * @param {number} num1
 * @param {number} num2
 * @param {string} operation
 * @return {number | string}
 */
const calculateResult = (num1, num2, operation) => {
  if (operation === 'add') {
    return (num1 + num2)
} else if (operation === 'subtract') {
    return (num1 - num2)
} else if (operation === 'multiply') {
    return (num1 * num2)
} else if (operation === 'divide') {
    return (num1 / num2)
} else if (operation === 'modulus') {
    return (num1 % num2)
} else {
    return `${operation}` + ' is an invalid operation'
}
};

/**
 * @return {string}
 */
// Create multiply table multiplying all digits from 2 t0 9 on 1 - 10 and write result in string
const getMultiplicationTable = () => {
  let count
  let num
  let save = ''
  for (count = 2; count < 10; count++) {
      save = save + '==== ' + `${count}` + ' ====' + ' \n'
      for (num = 1; num < 11; num++) {
          save = save + count + ' * ' + num + ' = ' + count * num +' \n'
      }
  }
  return save
};

module.exports = {
  isNumberEven,
  findLargestNumber,
  findTriangleType,
  findDaysInMonth,
  sum,
  calculateResult,
  getMultiplicationTable,
};
