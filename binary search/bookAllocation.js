
const isPossible = (array, std, mid) => {
    let stdCount = 1
    let pageSum = 0
    for (let i = 0; i < array.length; i++) {
      if (pageSum + array[i] <= mid) {
        pageSum += array[i]
      } else {
        stdCount++
        if (stdCount > std || array[i] > mid) return false
        pageSum = 0
        pageSum += array[i]
      }
    }
    return true
  }

const bookAllocation = (array, std) => {
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

// console.log(bookAllocation([10,20,30,40],2));



