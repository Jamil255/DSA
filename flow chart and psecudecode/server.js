//  sum of avg
const sumOfAvg = (a, b, c) => {
  if (a == 0 && b == 0 && c == 0) return 0
  let avg = (a + b + c) / 3
  return Math.floor(avg)
}

// console.log(sumOfAvg (2,5,7))

const isEvenNumbr = (num) => {
  if (num % 2 === 0) return 'even'
  return 'odd'
}
// console.log(isEvenNumbr(10))

const isCheckNum = (num) => {
  // console.log(+num,num)
  if (num == +num) {
    console.log('positive')
  } else {
    console.log('negative')
  }
  return 'zero'
}

// console.log(isCheckNum(-9))

// for (let i = 0; i <= 10; i++) {
//   if (i == 2) {

//       console.log(i)
//       continue
//   }
// }

// let i = 0
// while (i <= 10) {
//     console.log(i)
//     i++
// }
// let i = 1
// do {
//   console.log(i)
//   i++
// } while (i < 10)

// for in
let cities = ['karachi', 'lahore', 'multan', 'hyd']

// for (let key of cities) {
//     console.log(key)
// }

// for of
// let obj = {
//   name: 'jamil afzal',
//   age: 22,
//   gender: 'male',
//   eyeColor: 'black',
//   heigth: 6.1,
// }

// for (let key in obj) {
//    console.log(key)

//     }

// cities.forEach(element => {
//    console.log(element)
// });

// let response=cities.map((value, index,array ) => {
//  return  value
// })
// console.log(response)

// let response = cities.filter((value, index) => {

// if(value=="karachi")

//     console.log("yes")
// })
// console.log(response)

// for (let i = 0; i <= 10; i++){
//     console.log(i)
// }
const printEvenNbr = (num) => {
  for (let i = 0; i < num.length; i++) {
    // console.log(num[i])
    if (num[i] % 2 == 0) {
      console.log(num[i])
    }
  }
  return
}
// console.log(printEvenNbr([1, 2, 3, 4, 5, 6]))

const factorial = (num) => {
  // base_case
  if (num == 0) return 1
  return num * factorial(num - 1)
}
// console.log(factorial(10))

// const isPrimeNbr = (num) => {
//   let index = 2
//   while (index < num) {
//     if (num % index == 0) {
//       console.log('prime number')
//     } else {
//       console.log('not prime number')
//     }
//     index+1
//   }
//   return
// }
// console.log(isPrimeNbr(11))

const isPrimeNbr = (num) => {
  if (num % 2 == 1 || num % 3 == 1) {
    return `${num}:primer Number`
  }
  return `${num}: not primer number`
}
// console.log(isPrimeNbr(31))

// conditional statement

// if (a > b) {
//   console.log('answer is A')
// } else {
//   console.log('answer is B')
// }

// let a = 0
// let b = 3
// if (a > 0) {
//   console.log('a is positive')
// } else if (b < 0) {
//   console.log('a is negative')
// } else {
//   console.log('number is zore ')
// }

// let sum = 0 //
// for (let i = 1; i < 10; i++) {
//   sum += i
// }
// console.log(sum)
// let sum = 0
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     sum = sum + i
//   }
// }
// console.log(sum)

// let i = 2
// while (i < 10) {
//     if (i % 2 == 1 && i % 3 == 1) {
//         console.log(i)
//     }
//     ++i
// }

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log('not prime', i)
//   } else {
//     console.log('prime number',i)
//   }
// }

let i = 1
while (i <= 3) {
  let j = 1
  while (j <= 3) {
    console.log('* * * *')
    j++
  }
  i++
}
