// const leetcodePrblm = (n) => {
//   let product = 1
//   let sum = 0
//   while (n !== 0) {
//     let digit = n % 10
//     product = product * digit
//     sum = sum + digit
//     n = Math.floor(n / 10)
//   }
//   let answer = product - sum
//   return answer
// }

// console.log(leetcodePrblm(123))

// const bitCompliment = (n) => {
//   let count = 0
//   while (n !== 0) {
//     if (n & 1) {
//       count++
//     }
//     n = n >> 1
//   }
//   return count
// }

// console.log(bitCompliment(11001))

// const reverseInt = (n) => n.toString().split('').reverse().join('')

// console.log(reverseInt(123456))

// var a = prompt("Enter a value");
// var b, sum = 0;
// var z = a;
// while(a > 0)
// {
//   b = a % 10;
//   sum = sum * 10 + b;
//   a = parseInt(a / 10);
// }
// alert(sum);

// const BinaryToDec = (n) => {
//   let i = 0
//   let ans = 0
//   while (n !== 0) {
//     let digit = n % 10
//     if (digit == 1) {
//       ans = ans + pow(2, i)
//     }
//     n = n / 10
//     i++
//   }
//   console.log(ans)
// }

// BinaryToDec(110)

const sumOfDigit = (n) => {
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

console.log(sumOfDigit(123))
