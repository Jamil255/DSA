// const sumOfDigit = (n) => {
//   let product = 1
//   let sum = 0
//   while (n !== 0) {
//       let digit = n % 10
//     product = product * digit
//     sum = sum + digit
//     n = Math.floor(n / 10)
//   }
//   let answer = product - sum
//   return answer
// }
// console.log(sumOfDigit(432))

const productOfDigit = (n) => {
  let product = 1
  let sum = 0
  while (n !== 0) {
    let digit = n % 10
    product = product * digit
    sum = sum + digit
    n = Math.floor(n / 10)
  }
  let answer = product - sum
  return answer
}
// console.log(productOfDigit(456));

// program to convert   binary to decimal
const BinaryToDec = (n) => {
  return parseInt(n, 2)
}
console.log(BinaryToDec('111'))

// program to convert decimal to binary
const DecimalToBinary = (n) => {
    return n.toString(2)
}
console.log(DecimalToBinary(7))
