const sumOf3 = (nums) => {
  let n = nums.length
  let s = new Set()
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] + nums[j] + nums[k] == 0) {
          let a = [nums[i], nums[j], nums[k]]
          a.sort((a, b) => a - b)
          s.add(JSON.stringify(a))
        }
      }
    }
  }
  return Array.from(s).map((items) => JSON.parse(items))
}
// console.log(sumOf3([0, 0, 0]))  bruteForce solution

const optimizedApproach = (nums) => {
  let n = nums.length
  let s = new Set()
  for (let i = 0; i < n; i++) {
    let target = -nums[i]
    let newSet = new Set()
    for (let j = i + 1; j < n; j++) {
      let third = target - nums[j]
      if (newSet.has(third)) {
        let a = [nums[i], nums[j], third]
        a.sort((a, b) => a - b)
        s.add(JSON.stringify(a))
      }
      newSet.add(nums[j])
    }
  }
  return Array.from(s).map((items) => JSON.parse(items))
}
// console.log(optimizedApproach([0,0,0]))

const mostOptimizedSolution = (nums) => {
  let n = nums.length
  nums.sort((a, b) => a - b)
  let answer = []
  for (let i = 0; i < n; i++) {
    let j = i + 1
    let k = n - 1

    if (i > 0 && nums[i] == nums[i - 1]) continue
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      if (sum < 0) {
        j++
      } else if (sum > 0) {
        k--
      } else {
        answer.push([nums[i], nums[j], nums[k]])
        j++
        k--
        while (j < k && nums[j] == nums[j - 1]) j++
      }
    }
  }
  return answer
}

// console.log(mostOptimizedSolution([0,0,0]))

const FIndMaxRotatedArray = (nums) => {
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
  return nums[start]
}
// console.log(searchInRotatedArray([7,8,9,2,3,4]))

const addTwoNumber = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] == target) return [i, j]
    }
  }
  return []
}
// console.log(addTwoNumber([2, 7, 11, 15],9))

const buyAndSellStcok = (nums) => {
  let mini = nums[0]
  let profit = 0
  for (let i = 1; i < nums.length; i++) {
    let diff = nums[i] - mini
    profit = Math.max(diff, profit)
    mini = Math.min(nums[i], mini)
  }
  return profit
}

// console.log(buyAndSellStcok([7, 1, 5, 3, 6, 4]))

const containDuplicate = (nums) => {
  nums.sort((a, b) => a - b)
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) return true
  }
  return false
}

// console.log(containDuplicate([1,9,3,4,1]))

const productItSelf = (nums) => {
  let n = nums.length
  let left = new Array(n).fill(1)
  let right = new Array(n).fill(1)
  let answer = new Array(n)

  for (let i = 1; i < n; i++) {
    left[i] = nums[i - 1] * left[i - 1]
  }

  for (let i = n - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1]
  }
  for (let i = 0; i < n; i++) {
    answer[i] = left[i] * right[i]
  }
  return answer
}

// console.log(productItSelf([1, 2, 3, 4]))

const findTheSubArray = (nums) => {
  let currSum = nums[0]
  let maxSum = 0
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
// console.log(findTheSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

const findTheMaxSub = (nums) => {
  let currMax = nums[0]
  let currMin = nums[0]
  let maxGlobal = nums[0]

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i]
    if (num < 0) {
      let temp = currMax
      currMax = currMin
      currMin = temp
    }
    currMax = Math.max(num, currMax * num)
    currMin = Math.min(num, currMin * num)
    maxGlobal = Math.max(currMin, currMax)
  }
  return maxGlobal
}

// console.log(findTheMaxSub([-2, 0, -1]))

const leftOccurance = (nums, key) => {
  let start = 0
  let end = nums.length - 1
  let ans = 0
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (nums[mid] == key) {
      ans = mid
      end = mid - 1
    }
    if (key > nums[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return ans
}
const rightOccurance = (nums, key) => {
  let start = 0
  let end = nums.length - 1
  let ans = 0
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (nums[mid] == key) {
      ans = mid
      start = mid + 1
    }
    if (key > nums[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return ans
}
const leftAndRightOccurance = (nums, key) => {
  const left = leftOccurance(nums, key)
  const right = rightOccurance(nums, key)
  //   console.log(left, right)
  return [left, right]
}

// console.log(leftAndRightOccurance([1, 2, 3, 3, 3, 3, 3, 4, 5], 3))

const getPovit = (nums) => {
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
  return nums[end]
}

const binarySearch = (nums, target, start, end) => {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (nums[mid] == target) {
      return mid
    }
    if (target >= nums[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
}
const searchInRotatedArray = (nums, target) => {
  let povit = getPovit(nums)
  console.log(povit)
  if (target >= nums[povit] && target <= nums.length - 1) {
    return binarySearch(nums, target, povit, nums.length - 1)
  } else {
    return binarySearch(nums, target, 0, povit)
  }
}

// console.log(searchInRotatedArray([4, 5, 6, 7, 0, 1, 2], 3))

const waterMostContainer = (nums) => {
  let maxArea = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let width = j - i
      let height = Math.min(nums[i], nums[j])
      let area = width * height
      maxArea = Math.max(area, maxArea)
    }
  }
  return maxArea
}

// console.log(waterMostContainer([1, 1]))

const twoPointerApproach = (nums) => {
  let start = 0
  let end = nums.length - 1
  let maxVal = 0
  while (start < end) {
    let width = end - start
    let height = Math.min(nums[start], nums[end])
    let area = width * height
    maxVal = Math.max(area, maxVal)
    if (nums[start] < nums[end]) {
      start++
    } else {
      end--
    }
  }
  return maxVal
}

// console.log(twoPointerApproach([1, 1]))
