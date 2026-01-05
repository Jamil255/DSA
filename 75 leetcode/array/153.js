const searchInRotatedArray = (nums) => {
  let start = 0
  let end = nums.length - 1
  let mid = Math.floor((start + end) / 2)
  while (start < end) {
    if (nums[mid] > nums[end]) {
      start = mid + 1
      console.log(mid, 'first condition -----------------')
    } else {
      console.log(mid, 'else condition 1-----------------')
      end = mid
      console.log(mid, 'else condition 2-----------------')
    }
    // if (nums[mid] <= nums[end]) {
    //   end = mid
    // }
    mid = Math.floor((start + end) / 2)
  }
  return nums[start]
}

// console.log(searchInRotatedArray([3, 4, 5, 1, 2]))

const findTwoProduct = (nums) => {
  let n = nums.length
  let start = new Array(n).fill(1)
  let end = new Array(n).fill(1)
  let answer = new Array(n)
  for (let i = 1; i < n; i++) {
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
// console.log(findTwoProduct([1,2,3,4]))

const findTheDuplicate = (nums) => {
  nums.sort((a, b) => a - b)
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) return true
  }
  return false
}
// console.log(findTheDuplicate([2,12,3,4,5,2]))

const searchInRotatedArr = (nums) => {
  let left = 0
  let right = nums.length - 1
  let mid = Math.floor((left + right) / 2)
  while (left < right) {
    if (nums[mid] > nums[right]) {
      left = mid + 1
    } else {
      right = mid
    }
    mid = Math.floor((left + right) / 2)
  }
  return nums[left]
}

console.log(searchInRotatedArr([5, 6, 7, 8, 1, 2]))
