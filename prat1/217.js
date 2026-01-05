const findDuplicate = (nums) => {
  let h = {}
  for (let a of nums) {
    h[a] = h[a] + 1 || 1
  }
  console.log(h)
  for (let key in h) {
    if (h[key] > 1) {
      return true
    }
  }
  return false
}
// 
console.log(findDuplicate([0]))

const method2 = (nums) => {
  nums.sort((a, b) => a - b)
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) return true
  }
  return false
}
// console.log(method2([1, 2, 3, 4, 1, 2, 3]))

const buyAndSellStock = (nums) => {
  let mini = nums[0]
  let profit = 0
  for (let i = 1; i < nums.length; i++) {
    let diff = nums[i] - mini
    console.log('diff', diff)
    profit = Math.max(diff, profit)
    console.log('profit', profit)
    console.log('diff1', diff)
    console.log('min', mini)
    mini = Math.min(mini, nums[i])
    console.log('min1', mini)
  }
  return profit
}
// console.log(buyAndSellStock([7, 1, 5, 3, 6, 4]))
