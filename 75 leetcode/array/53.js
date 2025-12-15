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

console.log(subArray([1]))
