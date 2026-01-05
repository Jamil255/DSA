const swapArray = (array) => {
  for (let i = 0; i < array.length; i += 2) {
    if (i + 1 < array.length) {
      let a = array[i + 1]
      array[i + 1] = array[i]
      array[i] = a
    }
  }
  return array
}
// console.log(swapArray([1, 2, 3, 4, 5, 6]))

const findUnique = (array) => {
  let ans = 0
  for (let i = 0; i < array.length; i++) {
    ans = ans ^ array[i]
  }
  return ans
}

// console.log(findUnique([1,2,3,4,1,2,3,4,60]));

const isEvenNumber = (num) => {
  if (num & 1) return false
  return true
}

// if number is even number return  true else return false 
// console.log(isEvenNumber(20))
