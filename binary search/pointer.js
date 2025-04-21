const isPossible = (array, k, mid) => {
  let painterCount = 1
  let painterSum = 0
  for (let i = 0; i < array.length; i++) {
    if (painterSum + array[i] <= mid) {
      painterSum += array[i]
    } else {
      painterCount++
      if (painterCount > k || array[i] > mid) return false
      painterSum = 0
      painterSum += array[i]
    }
  }
  return true
}

const painterAllocation = (array, k) => {
  let start = 0
  let sum = 0
  let ans = -1

  array.forEach((element) => (sum += element))
  let end = sum
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (isPossible(array, k, mid)) {
      ans = mid
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return ans
}
console.log(painterAllocation([5, 5, 5, 5], 2))
