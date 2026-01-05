const maxSub = (nums) => {
  let maxGlobal = nums[0]
  let currentMax = nums[0]
  let currentMin = nums[0]
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (num < 0) {
      let temp = currentMax
      currentMax = currentMin
      currentMin = temp
    }

    currentMax = Math.max(num, currentMax * num)
    currentMin = Math.min(num, currentMin * num)
    maxGlobal = Math.max(currentMax, currentMin)
  }
  return maxGlobal
}

// console.log(maxSub([2,3,-2,4]))

const searchInRotatedArray = (nums) => {
  let start = 0
  let end = nums.length - 1
  while (start < end) {
    let mid = Math.floor((start + end) / 2)
    if (nums[mid] > nums[end]) {
      start = mid + 1
    } else {
      end = mid
    }
  }
  return nums[start]
}
// console.log(searchInRotatedArray([4, 5, 6, 7, 1, 2, 3]))
