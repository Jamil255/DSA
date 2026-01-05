const findUnique = (array) => {
  if (array.length < 1) return array
  let ans = 0
  for (let i = 0; i < array.length; i++) {
    ans = ans ^ array[i]
  }
  return ans
}

// console.log(findUnique([2, 1, 2, 1, 4]))

const leetCode1207 = (array) => {
  let h = {}
  for (let a of array) {
    h[a] = h[a] + 1 || 1
    }
    // console.log(h);

  // find the unique frequency
  let s = new Set(Object.values(h))
//   console.log(s.size,Object.values(h).length)
  // Object.values(h).length  =>return a array length
  return s.size === Object.values(h).length
}

console.log(leetCode1207([1, 2, 2, 1]))
console.log("-------------------")
