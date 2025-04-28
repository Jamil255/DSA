// const reverseArr = (array, start) => {
//   let left = start + 1
//   let right = array.length - 1
//   while (left < right) {
//     ;[array[left], array[right]] = [array[right], array[left]]
//     left++
//     right--
//   }
//   return array
// }
// // console.log(reverseArr([1,2,3,4,5,6,7],4))

// const traverseArray = (array) => {
//   let start = 0
//   let end = array.length - 1

//   while (start <= end) {
//     ;[array[start], array[end]] = [array[end], array[start]]
//     start++
//     end--
//   }
//   return array
// }

// // console.log(traverseArray([1, 2, 3, 4]))

// const mergeSortArray = (arr1, arr2) => {
//   let i = 0
//   let j = 0
//   let k = 0
//   let tempArr = []
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       tempArr[k++] = arr1[i++]
//     } else {
//       tempArr[k++] = arr2[j++]
//     }
//   }

//   while (i < arr1.length) {
//     tempArr[k++] = arr1[i++]
//   }
//   while (j < arr2.length) {
//     tempArr[k++] = arr2[j++]
//   }

//   return tempArr
// }

// // console.log(mergeSortArray([1,5,6,7],[2,3,4]))

// const merge = (arr1, m, arr2, n) => {
//   let i = m - 1
//   let j = n - 1
//   let k = m + n - 1
//   while (i >= 0 && j >= 0) {
//     if (arr1[i] > arr2[j]) {
//       arr1[k] = arr1[i]
//       i--
//     } else {
//       arr1[k] = arr2[j]
//       j--
//     }
//     k--
//   }

//   while (j >= 0) {
//     arr1[k] = arr2[j]
//     j--
//     k--
//   }
//   return arr1
// }
// // console.log(merge([1,2,2,0,0,0],3,[3,4,5],3))

// const reverseArray = (array) => {
//   let start = 0
//   let end = array.length - 1
//   while (start <= end) {
//     ;[array[start], array[end]] = [array[end], array[start]]
//     start++
//     end--
//   }
//   return array
// }

// // console.log(reverseArray([1, 2, 3, 4, 5]))

// const traverseArr = (array, start) => {
//   let left = start + 1
//   let right = array.length - 1
//   while (left < right) {
//     ;[array[left], array[right]] = [array[right], array[left]]
//     left++
//     right--
//   }
//   return array
// }
// // console.log(traverseArr([1, 2, 3, 4, 5, 6], 1))
// // merger two arrays

// const merges = (arr1, arr2) => {
//   let tempArr = []
//   let i = 0
//   let j = 0
//   let k = 0
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       tempArr[k++] = arr1[i++]
//     } else {
//       tempArr[k++] = arr2[j++]
//     }
//   }
//   while (i < arr1.length) {
//     tempArr[k++] = arr1[i++]
//   }
//   while (j < arr2.length) {
//     tempArr[k++] = arr2[j++]
//   }
//   return tempArr
// }
// // console.log(merges([1,2,6,7],[3,4,5]))

const mergeSortArray = (arr1, m, arr2, n) => {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1
  while (i >= 0 && j >= 0) {
    if (arr1[i] > arr2[j]) {
      arr1[k--] = arr1[i--]
    } else {
      arr1[k--] = arr2[j--]
    }
  }
  while (j >= 0) {
    arr1[k--] = arr2[j--]
  }
  return arr1
}
// console.log(mergeSortArray([1,2,3],3,[2,5,6],3))

const zeroMove = (array) => {
  let nonZero = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      ;[array[i], array[nonZero]] = [array[nonZero], array[i]]
      nonZero++
    }
  }
  return array
}
// console.log(zeroMove([0,0,0,1,2,3]))

const rotatedArray = (array, k) => {
  let tempArr = []
  for (let i = 0; i < array.length; i++) {
    tempArr[(i + k) % array.length] = array[i]
  }
  return tempArr
}
// console.log(rotatedArray([1,2,3,4,5,6],2))
const avoidFloat = (num) => {
  return Math.floor(num / 10)
}
const avoid = (num) => {
  return Math.floor(num % 10)
}

const reverseArr = (array) => {
  let start = 0
  let end = array.length - 1
  while (start <= end) {
    ;[array[start], array[end]] = [array[end], array[start]]
    start++
    end--
  }
  return array
}
const sumOfTwoArray = (arr1, m, arr2, n) => {
  let i = m - 1
  let j = n - 1
  let carry = 0
  let tempArr = []
  while (i >= 0 && j >= 0) {
    let sum = arr1[i] + arr2[j] + carry
    carry = avoidFloat(sum)
    sum = avoid(sum)
    tempArr.push(sum)
    j--
    i--
  }

  while (i >= 0) {
    let sum = arr1[i] + carry
    carry = avoidFloat(sum)
    sum = avoid(sum)
    tempArr.push(sum)
    i--
  }
  while (j >= 0) {
    let sum = arr2[j] + carry
    carry = avoidFloat(sum)
    sum = avoid(sum)
    tempArr.push(sum)
  }
  while (carry !== 0) {
    let sum = carry
    carry = avoidFloat(sum)
    sum = avoid(sum)
    tempArr.push(sum)
  }
  return reverseArr(tempArr)
}
console.log(sumOfTwoArray([1, 2, 3, 4], 4, [6], 1))
