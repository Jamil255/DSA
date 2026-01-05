const pro152 = (nums) => {
  let currentMax = nums[0]
  let currentMin = nums[0]
  let maxGlobal = nums[0]
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i]

    if (num < 0) {
      let temp = currentMax
      currentMax = currentMin
      currentMin = temp
    }

    currentMax = Math.max(num, currentMax * num)
    currentMin = Math.min(num, currentMin * num)
    maxGlobal = Math.max(currentMax, maxGlobal)
  }
  return maxGlobal
}

// console.log(pro152([1,2,3,4]))

const searchInRotatedArray = (array) => {
  let start = 0
  let end = array.length - 1
  let mid = Math.floor((start + end) / 2)
  console.log('starting loop---------')
  while (start < end) {
    if (array[mid] > array[end]) {
      start = mid + 1
    } else if (array[mid] < array[end]) {
      end = mid
    }
    mid = Math.floor((start + end) / 2)
  }
  console.log('ending loop================')
  return array[end]
}
// console.log(searchInRotatedArray([4, 5, 6, 7, 1, 2, 3]))


