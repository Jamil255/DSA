// const sortArray = (array) => {
//   let isSwap = false
//   for (let i = 1; i < array.length; i++) {
//     for (let j = 0; j < array.length - i; j++) {
//       if (array[j] > array[j + 1]) {
//         ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
//         isSwap = true
//         }
//         if (isSwap==false)break
//       }

//     }
//     return array
// }
// console.log(sortArray([3,2,1,6,5,4]))

const sortArray = (array) => {
  let isSwap = false
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
        isSwap = true
      }
      if (isSwap == false) break
    }
  }
  return array
}
// console.log(sortArray([4,3,2,1,9,8,7,6,5]))

const reverseArray = (array) => {
  let start = 0
  let end = array.length - 1
  while (start <= end) {
    ;[array[start], array[end]] = [array[end], array[start]]
    start++
    end--
  }
  return array
}
console.log(reverseArray([1,2,3,4,5]))
