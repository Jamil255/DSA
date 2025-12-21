const getPovit = (nums) => {
  let start = 0
  let end = nums.length - 1
  console.log('in the function ')
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

const binarySearch = (nums, key, start, end) => {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (key == nums[mid]) return mid
    if (key > nums[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return -1
}

const searchInRotatedArray = (nums, key) => {
  // console.log("frist order console")
  let get = getPovit(nums)
  if (key >= nums[get] && key <= nums[nums.length - 1]) {
    return binarySearch(nums, key, get, nums.length - 1)
  } else {
    return binarySearch(nums, key, 0, get - 1)
  }
}

// console.log(searchInRotatedArray([4, 5, 6, 7, 8, 1, 2, 3], 5))

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
// console.log(waterMostContainer([1,2,3,4,5]))

const isPalldrome = (str) => {
  let start = 0
  let end = str.length - 1
  while (start < end) {
    console.log(str[start], str[end])
    if (str[start] !== str[end]) {
      return 'no'
    }
    start++
    end--
  }
  return 'yes'
}

// console.log(isPalldrome('mom'))
