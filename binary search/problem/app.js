// // // problem no 1

// // // helper function
// // const isPossible = (array, std, mid) => {
// //   let stdCount = 1
// //   let pageSum = 0
// //   for (let i = 0; i < array.length; i++) {
// //     if (pageSum + array[i] <= mid) {
// //       pageSum += array[i]
// //     } else {
// //       stdCount++
// //       if (stdCount > std || array[i] > mid) return false
// //       pageSum = 0
// //       pageSum += array[i]
// //     }
// //   }
// //   return true
// // }

// // const bookAllocation = (array, std) => {
// //   let start = 0
// //   let sum = 0
// //   let ans = -1
// //   array.forEach((element) => (sum += element))
// //   let end = sum
// //   while (start <= end) {
// //     let mid = Math.floor((start + end) / 2)
// //     if (isPossible(array, std, mid)) {
// //       ans = mid
// //       end = mid - 1
// //     } else {
// //       start = mid + 1
// //     }
// //   }
// //   return ans
// // }
// // // console.log(bookAllocation([10, 20, 30, 40], 2))

// // // question no 2

// // // painter partation

// // const isPossibles = (array, k, mid) => {
// //   let painterCount = 1
// //   let painterSum = 0
// //   for (let i = 0; i < array.length; i++) {
// //     if (painterSum + array[i] <= mid) {
// //       painterSum += array[i]
// //     } else {
// //       painterCount++
// //       if (painterCount > k || array[i] > mid) return false
// //       painterSum = 0
// //       painterSum += array[i]
// //     }
// //   }
// //   return true
// // }
// // const painterAllocation = (array, k) => {
// //   let start = 0
// //   let ans = -1
// //   let sum = 0
// //   array.forEach((ele) => (sum += ele))
// //   let end = sum
// //   while (start <= end) {
// //     let mid = Math.floor((start + end) / 2)
// //     if (isPossibles(array, k, mid)) {
// //       ans = mid
// //       end = mid - 1
// //     } else {
// //       start = mid + 1
// //     }
// //   }
// //   return ans
// // }
// // // console.log(painterAllocation([5,5,5,5],2));

// // // question #03

// // helper function
// const isPossibles = (array, k, mid) => {
//   let cowCount = 1
//   let lastPostion = array[0]
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] - lastPostion >= mid) {
//       cowCount++
//       if (cowCount == k) {
//         return true
//       }
//       lastPostion += array[i]
//     }
//   }
//   return false
// }

// const aggressiveCow = (array, cow) => {
//   array.sort()
//   let start = 0
//   let ans = -1
//   let end = array[array.length - 1]
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2)
//     if (isPossible(array, cow, mid)) {
//       ans = mid
//       start = mid + 1
//     } else {
//       end = mid - 1
//     }
//   }
//   return ans
// }

// // console.log(aggressiveCow([1,2,3,4,6],2));

// // binary search

// const binarySearch = (array, key, start, end) => {
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2)
//     if (array[mid] == key) return mid
//     if (key > array[mid]) {
//       start = mid + 1
//     } else {
//       end = mid - 1
//     }
//   }
//   return -1
// }

// const getPivot = (array) => {
//   let start = 0
//   let end = array.length - 1
//   while (start < end) {
//     let mid = Math.floor((start + end) / 2)
//     if (array[mid] >= array[0]) {
//       start = mid + 1
//     } else {
//       end = mid
//     }
//   }
//   return end
// }

// const searchInRotatedArray = (array, key) => {
//   let pivot = getPivot(array)
//   if (key >= array[pivot] && key <= array[array.length - 1]) {
//     return binarySearch(array, key, pivot, array.length - 1)
//   } else {
//     return binarySearch(array, key, 0, pivot - 1)
//   }
// }
// // console.log(searchInRotatedArray([7,8,9,0,1,2,3],3));

// const leftOccurrnace = (array, key) => {
//   let start = 0
//   let ans = -1
//   let end = array.length - 1
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2)
//     if (array[mid] == key) {
//       ans = mid
//       end = mid - 1
//     } else if (key > array[mid]) {
//       start = mid + 1
//     } else {
//       end = mid - 1
//     }
//   }
//   return ans
// }

// const rightOccurrnace = (array, key) => {
//   let start = 0
//   let ans = -1
//   let end = array.length - 1
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2)
//     if (array[mid] == key) {
//       ans = mid
//       start = mid + 1
//     } else if (key > array[mid]) {
//       start = mid + 1
//     } else {
//       end = mid - 1
//     }
//   }
//   return ans
// }

// const leftAndRightOccurr = (array, key) => {
//   let left = leftOccurrnace(array, key)
//   let right = rightOccurrnace(array, key)
//   let occuarnace = right - left + 1

//   return occuarnace
// }
// // console.log(leftAndRightOccurr([1, 2, 3, 4, 4, 4, 4, 5, 6, 7], 4))

// // [1,3,7,6,5,6]

// const pivetOfIndex = (array) => {
//   let leftsum = 0
//   let sum = 0
//   array.forEach((element) => (sum += element))

//   for (let i = 0; i < array.length; i++) {
//     let rightSum = sum - array[i] - leftsum
//     if (rightSum == leftsum) return array[i]
//     leftsum += array[i]
//   }
//   return -1
// }
// // console.log(pivetOfIndex([1, 3, 7, 12, 5, 6]))

// const peakElement = (array) => {
//   let start = 0
//   let end = array.length - 1
//   while (start < end) {
//     let mid = Math.floor((start + end) / 2)
//     if (array[mid] < array[mid + 1]) {
//       start = mid + 1
//     } else {
//       end = mid
//     }
//   }
//   return start
// }

// // console.log(peakElement([2,3,4,5,6,1,2]));

// // sort =>[0,1,0,1,0,1,0,1,1,0]=>[0,0,0,1,1,1,1,]
// const arraySorted = (array) => {
//   let left = 0
//   let right = array.length - 1
//   while (left < right) {
//     while (array[left] == 0) {
//       left++
//     }
//     while (array[right] == 1) {
//       right--
//     }
//     if (left < right) {
//       ;[array[left], array[right]] = [array[right], array[left]]
//       left++
//       right--
//     }
//   }
//   return array
// }
// // console.log(arraySorted([1,0,1,0,1,0,0,1,0,0]));
// // [0,1,0,1,2,2,1,0,0]=>[0,0,0,1,1,1,2,2,2]

// const dutchNationalFlagAlgo = (array) => {
//   let low = 0
//   let mid = 0
//   let high = array.length - 1
//   while (mid <= high) {
//     if (array[mid] == 0) {
//       ;[array[low], array[mid]] = [array[mid], array[low]]
//       low++
//       mid++
//     } else if (array[mid] == 1) {
//       mid++
//     } else {
//       ;[array[mid], array[high]] = [array[high], array[mid]]
//       high--
//     }
//   }
//   return array
// }
// // console.log(dutchNationalFlagAlgo([2,0,1,2,1,0,0,2,1]));

// const isPossible = (trees, h, mid) => {
//   let collected = 0
//   for (let tree of trees) {
//     if (tree > mid) {
//       collected += tree - mid
//     }
//   }
//   console.log(collected)
//   return collected >= h
// }

// const ekoEko = (tree, h) => {
//   let start = 0
//   let end = Math.max(...tree)
//   let ans = -1
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2)
//     console.log(mid, 'mid')
//     if (isPossible(tree, h, mid)) {
//       ans = mid
//       start = mid + 1
//     } else {
//       end = mid - 1
//     }
//   }
//   return ans
// }
// // console.log(ekoEko([20, 15, 10, 17], 7))

// const  aggressiveCow=
// const isHeld = (array, cow, mid) => {
//   let cowCount = 1
//   let lastPosition = array[0]
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] - lastPosition >= mid) {
//       cowCount++
//       if (cowCount == cow) return true
//       lastPosition = array[i]
//     }
//   }

//   return false
// }

// const aggressiveCow = (array, cow) => {
//   let start = 0
//   let end = Math.max(...array)
//   let ans = -1
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2)
//     if (isHeld(array, cow, mid)) {
//       ans = mid
//       start = mid + 1
//     } else {
//       end = mid - 1
//     }
//   }
//   return ans
// }

// console.log(aggressiveCow([1, 2, 6, 4, 3], 2))
const isPainter = (array, painter, mid) => {
  let painterCount = 1
  let painterSum = 0
  for (let i = 0; i < array.length; i++) {
    if (painterSum + array[i] <= mid) {
      painterSum += array[i]
    } else {
      painterCount++
      if (painterCount > painter || array[i] > mid) return false
      painterSum = array[i]
    }
  }
  return true
}

const painterAllocation = (array, painter) => {
  let start = 0
  let sum = 0
  let ans = -1
  array.forEach((element) => (sum += element))
  let end = sum
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (isPainter(array, painter, mid)) {
      ans = mid
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return ans
}

// console.log(painterAllocation([5,5,5,5],2))