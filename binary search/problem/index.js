// const isPossible = (trees, h, mid) => {
//   let collected = 0
//   for (let tree of trees) {
//     if (tree > mid) {
//       collected += tree - mid
//     }
//   }
//   return collected >= h
// }

// const woodCutter = (trees, h) => {
//   let start = 0
//   let end = Math.max(...trees)
//   let ans = -1
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2)
//     if (isPossible(trees, h, mid)) {
//       ans = mid
//       start = mid + 1
//     } else {
//       end = mid - 1
//     }
//   }
//   return ans
// }
// console.log(woodCutter([20, 15, 10, 17],7));

// const isPossible = (array, cow, mid) => {
//   let cowCount = 1
//   let lastPosition = array[0]
//   for (let key of array) {
//     if (array[key] - lastPosition >= mid) {
//       cowCount++
//       if (cowCount == cow) {
//         return true
//       }
//       lastPosition = array[key]
//     }
//   }
//   return false
// }

// const aggressiveCow = (array, cow) => {
//   //   array.sort()
//   let start = 0
//   let end = Math.max(...array)
//   let ans = -1
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
// console.log(aggressiveCow([1, 2, 6, 4, 3], 2))

const isPossible = (books, std, mid) => {
  let stdCount = 1
  let pageSum = 0
  for (let i = 0; i < books.length; i++) {
    if (pageSum + books[i] <= mid) {
      pageSum += books[i]
    } else {
      stdCount++
      if (stdCount > std || books[i] > mid) return false
      pageSum = 0
      pageSum = books[i]
    }
  }
  return true
}

const bookAllocation = (books, std) => {
  let start = 0
  let ans = -1
  let sum = 0
  books.forEach((element) => (sum += element))
  let end = sum
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (isPossible(books, std, mid)) {
      ans = mid
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return ans
}
console.log(bookAllocation([10, 20, 30, 40], 2))
