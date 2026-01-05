const { userName } = require('./app4')

const sumOfAllArray = (arr) => {
  if (arr.length <= 1 || arr.length <= 0) {
    return arr[0] || 'empty array'
  }

  let sumOfArray = 0

  for (let i = 0; i < arr.length; i++) {
    sumOfArray += arr[i]
  }

  return sumOfArray
}

// console.log(sumOfAllArray([12,12]))

const sumofDigit = (num) => {
  let sum = 0
  let product = 1

  while (num !== 0) {
    let digit = num % 10
    sum = sum + digit
    product = product * digit
    num = Math.floor(num / 10)
  }

  let ans = product - sum
  return ans
}

// console.log(sumofDigit(235))

const linearSearch = (array, key) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == key) {
      return true
    }
  }
  return false
}

// console.log(linearSearch([1, 2, 3, 4,90], 90))

const sumOfAllDigit = (number) => {
  let product = 1
  let sum = 0
  while (number !== 0) {
    let digit = number % 10
    product = product * digit
    sum = sum + digit
    number = Math.floor(number / 10)
  }
  return product - sum
}
userName('hjvnvnb')
// console.log(sumOfAllDigit(235))
