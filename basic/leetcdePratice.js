const findUnique = (array) => {
  let ans = 0
  for (let i = 0; i < array.length; i++) {
    //   console.log(ans ^ array[i])
    ans = ans ^ array[i]
  }

  return ans
}
// console.log(findUnique([1, 2, 3, 4, 4, 3, 2, 1, 90]))

// console.log(3^3)

const findsUnique = (array) => {
  let ans = 0
  for (let i = 0; i < array.length; i++) {
    ans = ans ^ array[i]
  }
  return ans
}

// console.log(findsUnique([1, 2, 3, 4, 4, 3, 2, 1, 90]))

const duplicateInArray = (array) => {
  let ans = 0
  for (let i = 0; i < array.length; i++) {
    ans = ans ^ array[i]
  }

  for (let i = 1; i < array.length; i++) {
    ans = ans ^ i
  }
  return ans
}

console.log(duplicateInArray([1, 2, 3, 4, 5,4,6,7]))
