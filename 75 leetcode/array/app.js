const addTwoNbr = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[i - 1] + target) {
        return [i, j]
      }
    }
  }
  return []
}

// console.log(addTwoNbr([1,2,3,4],5))

const buyAndSellStock = (nums) => {
  let mini = nums[0]
  let profit = 0

  for (let i = 0; i < nums.length; i++) {
    let diff = nums[i] - mini
    profit = Math.max(diff, profit)
    mini = Math.min(mini, nums[i])
  }
  return profit
}
// console.log(buyAndSellStock([1,2,3,4,5]))

const containDuplicate = (nums) => {
  nums.sort((a, b) => a - b)

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) return true
  }
  return false
}
// console.log(containDuplicate([1,2,3,4]))

const productItself = (nums) => {
  let n = nums.length
  let leftSide = new Array(n).fill(1)
  let rightSide = new Array(n).fill(1)
  let answer = new Array(n)

  for (let i = 1; i < n; i++) {
    leftSide[i] = nums[i - 1] * leftSide[i - 1]
  }
  for (let i = n - 2; i >= 0; i--) {
    rightSide[i] = nums[i + 1] * rightSide[i + 1]
  }
  for (let i = 0; i < nums.length; i++) {
    answer[i] = leftSide[i] * rightSide[i]
  }
  return answer
}
// console.log(productItself([1, 2, 3, 4]))

const productTwoNbr = (nums) => {
  let n = nums.length
  let start = new Array(n).fill(1)
  let end = new Array(n).fill(1)
  let answer = new Array(n)

  for (let i = 1; i < nums.length; i++) {
    start[i] = nums[i - 1] * start[i - 1]
  }
  for (let i = n - 2; i >= 0; i--) {
    end[i] = nums[i + 1] * end[i + 1]
  }
  for (let i = 0; i < n; i++) {
    answer[i] = start[i] * end[i]
  }
  return answer
}
// console.log(productTwoNbr([1,2,3,4]))

const subArray = (nums) => {
  let maxSum = nums[0]
  let currSum = 0
  for (let i = 1; i < nums.length; i++) {
    currSum = currSum + nums[i]
    if (currSum > maxSum) {
      maxSum = currSum
    }
    if (currSum < 0) {
      currSum = 0
    }
  }
  return maxSum
}

// console.log(subArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

const problemSubArray = (nums) => {
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

// console.log(problemSubArray([1,2,3,-7,3]))

const binarySearch = (nums, key) => {
  let start = 0
  let end = nums.length - 1
  let mid = Math.floor((start + end) / 2)
  while (start <= end) {
    if (nums[mid] == key) {
      return mid
    }
    if (key > nums[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
    mid = Math.floor((start + end) / 2)
  }
  return -1
}
// console.log(binarySearch([1,2,3,4,5,6],6))
