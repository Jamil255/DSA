const findUnique = (array) => {
  let ans = 0
  for (let i = 0; i < array.length; i++) {
    ans = ans ^ array[i]
  }
  return ans
}


// console.log(findUnique([1, 2, 3, 4, 4, 3, 2, 1, 90,90,91]))


