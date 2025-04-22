const isPossible = (array, cow, mid) => {
  let cowCount = 1
  let lastPosition = array[0]

  for (let i = 0; i < array.length; i++) {
    if (array[i] - lastPosition >= mid) {
      cowCount++
      if (cowCount == cow) {
        return true
      }
      lastPosition = array[i]
    }
  }
  return false
}

const aggressiveCow = (array, cow) => {
  array.sort()

  let start = 0
  let end = array[array.length - 1]
  let ans = -1
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
// console.log(aggressiveCow([1, 2, 6, 4, 3], 2))
