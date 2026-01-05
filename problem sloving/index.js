const AddTwoNbr = (arr1, target) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[i] + arr1[j] == target) {
        return [i, j]
      }
    }
  }
  return []
}
// console.log(AddTwoNbr([1, 2, 3], 6))

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {}

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i]
    let neededNum = target - currentNum
    if (map.hasOwnProperty(neededNum)) {
      return [map[neededNum], i]
    }
    map[currentNum] = i
  }
}

console.log(twoSum([7, 2, 3, 4, 5], 9))
