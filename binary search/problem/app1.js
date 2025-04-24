const aggressiveCow = (array, cow) => {
  let start = 0
  let ans = -1
  let end = Math.max(...array)
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (isPossible(array, cow, mid)) {
      ans = mid
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return ans
}

const isPossible = (array, cow, mid) => {
  let cowCount = 1
  let lastPosition = array[0]
  for (const key of array) {
    if (key - lastPosition >= mid) {
      cowCount++
      lastPosition = key
    }

    if (cowCount == cow) {
      return true
    }
  }
  return false
}

console.log(aggressiveCow([1, 2, 3, 4, 6], 2))
