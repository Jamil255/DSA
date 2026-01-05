// // const num = 2
// // const char = 'ahmed'
// // switch (num) {
// //   case 0:
// //     console.log('number is zero')
// //     break
// //   case 1:
// //     console.log('number is one')

// //     break

// //   case 2:
// //     console.log('number is two')
// //     break
// //   case 3:
// //     console.log('number is three')
// //     break
// //   case 4:
// //     switch (char) {
// //       case 'jamil':
// //         console.log(`value of ${char}`)
// //         break
// //       case 'ahmed':
// //         console.log(`value of ${char}`)
// //     }
// //     break
// //   default:
// //     console.log('unkwoun number')
// // }
// // let i = 1
// // while (i) {
// //   const num = 1
// //   switch (num) {
// //     case 0:
// //       console.log(`value of ${num}`)
// //       break
// //     case 1:
// //       console.log(`value of ${num}`)
// //       i = 2

// //       break
// //     default:
// //       console.log('Invalid value of num')
// //   }

// // }

// const city = 'karachi'
// switch (city) {
//   case 'karachi':
//     console.log('city of light')
//     break
//   case 'japan':
//     console.log('discipline of the country')
//     continue
//   default:
//     console.log('unknown city')
// }

// const num1 = +prompt('enter a num1')
// const num2 = +prompt('enter a num2')
// const op = prompt('enter a op')
// switch (op) {
//   case '+':
//     console.log(num1 + num2)
//     break
//   case '-':
//     console.log(num1 - num2)
//     break
//   case '*':
//     console.log(num1 * num2)
//     break
//   case '%':
//     console.log(num1 % num2)
//   case '/':
//     console.log(num1 / num2)
//     break
//   default:
//     console.log('please enter a valid op')
// }

function calculateNotes(amount) {
  let remainingAmount = amount
  let notes = { 100: 0, 50: 0, 20: 0, 10: 0, 1: 0 }
  let denominations = [100, 50, 20, 10, 1]

  for (let i = 0; i < denominations.length; i++) {
    let noteValue = denominations[i]
    switch (true) {
      case remainingAmount >= noteValue:
        notes[noteValue] = Math.floor(remainingAmount / noteValue)
        remainingAmount %= noteValue
        break
    }
  }

  console.log('Notes Distribution:')
  for (let key in notes) {
    console.log(`${key} Rupee Notes: ${notes[key]}`)
  }
}

// calculateNotes(1380)

// const a = prompt()
const b = 2
// let ans = 1
// for (let i = 1; i <= b; i++) {
//   ans = ans * a
// }
// console.log(ans)

const isSquare = (a, b) => {
  let ans = 1
  for (let i = 1; i <= b; i++) {
    ans = ans * a
  }
  return ans
}
// console.log(isSquare(a,b))

const isEvenNumber = (a) => {
  if (a & 1) return 'odd number'
  return 'even number'
}

// console.log(isEvenNumber(19))

const factorial = (n) => {
  let fact = 1
  for (let i = 1; i <= n; i++) {
    fact *= i
  }
  return fact
}

const nCR = (n, r) => {
  let num = factorial(n)
  let denum = factorial(r) * factorial(n - r)
  return num / denum
}
// console.log(nCR(8, 2))

const counting = (n) => {
  if (n === 0) {
    return 0
  }

  for (let i = 1; i <= n; i++) {
    console.log(i)
  }
}
// counting(10)

const isPrimeNumber = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return 'not a prime number'
    }
  }
  return 'prime number'
}
// console.log(isPrimeNumber(5))

const isNumber = (n) => {
  if (n & 1) return 'odd number'
  return 'even number'
}
// console.log(isNumber(13))

// const isNotPrimeNumber = (n) => {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) return 'not a prime number'
//   }
//   return 'prime number'
// }

// console.log(isNotPrimeNumber(18))
// var a=+true
// console.log(typeof a)
// console.log(+false)

// let city = 'multanss'

// switch (city) {
//   case 'karachi':
//     console.log('light of city')
//     break

//   case 'multan':
//     console.log('dark of the city')
//     break

//   default:
//     console.log('unkwoun city')
// }

let num1 = +prompt('enter a number 1')
let optr = prompt('enter a optr')
let num2 = +prompt('enter a number 2')

switch (optr) {
  case '+': {
    let c = num1 + num2
    console.log(c)
    break
  }
  case '-': {
    let c = num1 - num2
    console.log(c)
    break
  }

  case '*': {
    let c = num1 * num2
    console.log(c)
    break
  }
  case '/': {
    let c = num1 / num2
    console.log(c)
    break
  }
  default: {
    alert('please enter a valid optr')
  }
}
