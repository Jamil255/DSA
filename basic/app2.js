// var number = [1, 2, 3, [4, 5, [6, 7], 8], 9, 10, 11, 12]
// console.log(number[3][1])
// var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// number.unshift(1111)
// // console.log(number)
// var number = [1, 2, 3, 4, 5, 6, 'alo', 'alomm', 'al']
// var copyNumber = number.slice(6)
// // console.log(copyNumber)

// // var num = +prompt('Enter a number')
// // var isFlag = false
// // for (let i = 1; i <= 10; i++) {
// //   if (num == i) {
// //     isFlag = true
// //     break
// //   } else {
// //     console.log(i)
// //   }
// // }

// // break,continue

// // for (let i = 1; i <= 10; i++) {
// //   if (i == 10) {
// //    continue
// //   }
// //   console.log(i)
// // }

// // flag =>true ,false

// var cities = ['karachi', 'multan', 'japan', 'london']
// var checkCity = prompt('Enter city name')
// var isFounfCity = false
// for (let i = 0; i < cities.length; i++) {
//   if (cities[i] == checkCity) {
//     isFounfCity = true
//     alert('City is found')
//     break
//   }
// }
// if (isFounfCity == false) {
//   alert('City is not found')
// }

// for (let i = 1; i <= 6; i++){
//     console.log(`i`,i);
//     for (let j = 1; j <= 10; j++){
//         console.log("j",j);
//     }

// }

const cities = ['karachi', 'multan', 'lahore', 'islambad', 'peshawar']

let checkCity = 'lahore'
let isFoundCity = false
for (let i = 0; i < cities.length; i++) {
  if (cities[i] == checkCity) {
    isFoundCity = true
    console.log('City is found', cities[i],'index at',i)
    break
  }
}

if (isFoundCity == false) {
  console.log('City is not found')
}


// ckmljkjmkji he 
// niem              h uey89'90    MHN