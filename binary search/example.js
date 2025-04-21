// const isPossible = (array, std, mid) => {
//   let stdCount = 1
//   let pageSum = 0
//   for (let i = 0; i < array.length; i++) {
//     if (pageSum + array[i] <= mid) {
//       pageSum += array[i]
//     } else {
//       stdCount++
//       if (stdCount > std || array[i] > mid) return false
//       pageSum = 0
//       pageSum += array[i]
//     }
//   }
//   return true
// }

// const bookAllocation = (array, std) => {
//   let sum = 0
//   let start = 0
//   let ans = -1
//   array.forEach((element) => (sum += element))
//   let end = sum
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2)
//     if (isPossible(array, std, mid)) {
//       ans = mid
//       end = mid - 1
//     } else {
//       start = mid + 1
//     }
//   }
//   return ans
// }

// console.log(bookAllocation([10, 20, 30, 40], 2))

const bookAllocations = (array, std) => {
  let start = 0
  let sum = 0
  let ans = -1
  array.forEach((element) => (sum += element))
  let end = sum
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (isPossible(array, std, mid)) {
      ans = mid
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return ans
}

const isPossible = (array, std, mid) => {
  let stdCount = 1
  let leftSum = 0

  for (let i = 0; i < array.length; i++) {
    if (leftSum + array[i] <= mid) {
      leftSum += array[i]
    } else {
      stdCount++
      if (stdCount > std || array[i] > mid) return false
      leftSum = 0
      leftSum += array[i]
    }
  }
  return true
}

// console.log(bookAllocations([10, 20, 30, 40], 2))

const squareRoot = (num) => {
  let start = 0
  let ans = -1
  let end = num
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    let square = mid * mid
    if (square == num) return mid
    if (mid < num) {
      ans = mid
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return ans
}
// console.log(squareRoot(4))
