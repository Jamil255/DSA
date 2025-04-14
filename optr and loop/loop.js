let n = prompt('Enter   a number')
const fibnoacciSeries = (n) => {
  let line = ''
  let a = 0
  let b = 1
  ;(line += a + ' '), b + ' '
  for (let i = 1; i <= n; i++) {
    let next = a + b
    line += next + ' '
    a = b

    b = next
  }
  console.log(line)
}

// fibnoacciSeries(7)

// let a = 0
// let b = 1
// line += a + '  ' + b + '  '
// var line = ''
// for (let i = 1; i <= 10; i++) {
//   let next = 0
//   next = a + b
//   line += next + ' '
//   a = b
//   b = next
// }
// console.log(line)

// for (let i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     console.log('is number is not prime number')
//     break
//   } else {
//     console.log('is number is prime number')
//   }
// }

// let isprime = 1
// for (let i = 2; i < n; i++) {
//   if (n % i == 0) {
//     isprime = 0
//     break
//   }
// }

// if (isprime == 0) {
//   console.log('not prime number')
// } else {
//   console.log('prime number')
// }

// for (let i = 0; i <= n; i++) {
//   console.log('-------start-----')
//   console.log('hello world')
//   console.log('hello js')
//   console.log('hello nodejs')
//   console.log('-------end-----')

//   continue
//   console.log('hello react Native')
// }

// for (let i = 0; i <= n; i--) {
//     console.log(i)
//     i++
// }

// for (let i = 0; i <= 15; i += 2) {
//   console.log(i)
//   if (i & 1) {
//     console.log('hello react Native')
//     continue
//   }
//   i++
// }

// for (let i = 0; i < 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     console.log(i, j)
//   }
// }

// for (let i = 0; i < 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     if (i + j == 10) {
//       break
//     }
//     console.log(j)
//   }
// }
