const sum3 = (nums) => {
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

// console.log(sum3([-1,0,1,2,-1,-4]))


const optimizedApproach = (nums) => {
    
}
