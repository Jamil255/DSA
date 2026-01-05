const subArray = (nums) => {
  let maxSum = nums[0]
  let currSum = 0
  for (let i = 0; i < nums.length; i++) {
    currSum = nums[i] + currSum
    if (currSum > maxSum) {
      maxSum = currSum
    }
    if (currSum < 0) {
      currSum = 0
    }
  }
  return maxSum
}

// console.log(subArray([1]))

const searchInRotated = (nums) => {
  let start = 0
  let end = nums.length - 1
  let mid = Math.floor((start + end) / 2)
  while (start < end) {
    if (nums[mid] > nums[end]) {
      start = mid + 1
    } else {
      end = mid
    }
    mid = Math.floor((start + end) / 2)
  }
  return nums[end]
}

console.log(searchInRotated([5, 6, 7, 8, 1, 2, 3, 4]))
