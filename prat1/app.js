const findDuplicate = (nums) => {
  let h = {}
  for (let a of nums) {
    h[a] = h[a] + 1 || 1
  }
  for (let key in h) {
    if (h[key] > 1) return true
  }
  return false
}
// console.log(findDuplicate([1,2,3,4,5,3]))

const method2 = (nums) => {
  nums.sort((a, b) => a - b)
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) return true
  }
  return false
}
// console.log(method2([1,2,3,1]))

// const method3 = (nums) => {
//   let h = {}
//   for (let key in nums) {
//       if (h[key]) return false

//     h[key] = true
//   }

//   return true
// }

// console.log(method3([1, 2, 3, 4]))

const arrayReverse = (nums) => {
  let start = 0
  let end = nums.length - 1
  while (start < end) {
    ;[nums[start], nums[end]] = [nums[end], nums[start]]
    start++
    end--
  }
  return nums
}
// console.log(arrayReverse([1,2,3,4,5]))

const reverseStr = (str) => {
  let start = 0
  let splitStr = str.trim().split(/\s+/)
  let end = splitStr.length - 1

  while (start <= end) {
    ;[splitStr[start], splitStr[end]] = [splitStr[end], splitStr[start]]
    start++
    end--
  }
  return splitStr.join(' ')
}
// console.log(reverseStr('hello world'))

// const findUnique = (nums) => {
//   let h = {}
//   let temp = []
//   for (let a of nums) {
//     h[a] = h[a] + 1 || 1
//   }
//   for (let key in h) {
//     if (h[key] <= 1) {
//       temp.push(Number(key))
//     }
//   }
//   return temp
// }

// console.log(findUnique([1,2,3,4,5,6,4,3,2,1]))

const selfProduct = (nums) => {
  let n = nums.length
  let leftSide = new Array(n).fill(1)
  let rightSide = new Array(n).fill(1)
  let answer = new Array(n)
  for (let i = 1; i < n; i++) {
    console.log(leftSide, 'outsider ')
    leftSide[i] = nums[i - 1] * leftSide[i - 1]
    console.log('inside the loop', leftSide)
  }
  console.log('out side the right side ')
  for (let i = n - 2; i >= 0; i--) {
    rightSide[i] = nums[i + 1] * rightSide[i + 1]
    console.log('in  side the right side ', rightSide)
  }

  for (let i = 0; i < n; i++) {
    answer[i] = leftSide[i] * rightSide[i]
  }
  return answer
}

console.log(selfProduct([-1,1,0,-3,3]))
