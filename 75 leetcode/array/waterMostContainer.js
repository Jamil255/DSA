const waterMostContainer = (nums) => {
  let answer = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let width = j - i
      let heigth = Math.min(nums[i], nums[j])
      let area = width * heigth
      answer = Math.max(area, answer)
    }
  }
  return answer
}

// console.log(waterMostContainer([1, 8, 6, 2, 5, 4, 8, 3, 7]))
