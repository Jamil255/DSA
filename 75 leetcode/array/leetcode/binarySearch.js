const leftOccurance = (nums, key) => {
  let start = 0
  let end = nums.length - 1
  let ans = 0
  let mid = Math.floor((start + end) / 2)
  while (start <= end) {
    if (nums[mid] == key) {
      ans = mid
      end = mid - 1
    } else if (key > nums[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
    mid = Math.floor((start + end) / 2)
  }
  return ans
}

const rightOccurance = (nums, key) => {
  let start = 0
  let end = nums.length - 1
  let ans = 0
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (key == nums[mid]) {
      ans = mid
      start = mid + 1
    } else if (key > nums[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return ans
}

const searchInLeftAndRightOccurances = (nums, key) => {
  const left = leftOccurance(nums, key)
  const right = rightOccurance(nums, key)
  return [left, right]
}
// console.log(searchInLeftAndRightOccurances([1,2,2,2,2,3,4,5],2))

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
  return start
}

// console.log(searchInRotatedArray([5,6,7,8,9,1,2,3,4]))

const waterMostContainer = (nums) => {
  let area = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const width = j - i
      const heigth = Math.min(nums[i], nums[j])
      const a = width * heigth
      area = Math.max(a, area)
    }
  }
  return area
}

// console.log(waterMostContainer([1,2,3,4,5]))

const binarySearch = (nums, start, end, key) => {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (nums[mid] == key) {
      return mid
    }
    if (key > nums[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return -1
}

const searchInRotatedArrays = (nums, key) => {
  let pivot = searchInRotatedArray(nums)
  if (key >= nums[pivot] && key <= nums[nums.length - 1]) {
    return binarySearch(nums, pivot, nums.length - 1, key)
  } else {
    return binarySearch(nums, 0, pivot - 1, key)
  }
}

// console.log(searchInRotatedArrays([4, 5, 6, 7, 8, 9, 1, 2, 3], 2))

const threeSum = (nums) => {
  let n = nums.length
  nums.sort((a, b) => a - b)
  let ans = []
  for (let i = 0; i < nums.length; i++) {
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
        ans.push([nums[i], nums[j], nums[k]])
        j++
        k--
        while (j < k && nums[j] == nums[j - 1]) j++
      }
    }
  }
  return ans
}

console.log(threeSum([0, 0, 0]))

const bruteApproach = (nums) => {
  let s = new Set()
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
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

console.log(bruteApproach([0, 0, 0]))

const optimizedApproach = (nums) => {
  let s = new Set()
  for (let i = 0; i < nums.length; i++) {
    let target = -nums[i]
    let newSet = new Set()
    for (let j = i + 1; j < nums.length; j++) {
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
console.log(optimizedApproach([0, 0, 0]))
