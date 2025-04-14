// convert the swap array

const swapArray = (array) => {
  for (let i = 0; i < array.length; i += 2) {
    if (i + 1 < array.length) {
      let start = array[i]
      array[i] = array[i + 1]
      array[i + 1] = start
    }
  }
  return array
}

// console.log(swapArray([1,2,3,4,5,6]));

const findUnique = (array) => {
  for (let i = 0; i < array.length; i++) {
    let count = 0
    if (array[i] == array[i + 1]) {
      //   console.log(array[i])
      count++
    }
    // console.log(count)
  }
}

// findUnique([1, 2, 2, 1, 3])

const uniqueOccurs = (array) => {
  let b = {}
  for (let a of array) {
    b[a] = b[a] + 1 || 1
  }

  let uniqueFreq = new Set(Object.values(b))
  return uniqueFreq.size == Object.values(b).length
}
console.log(uniqueOccurs([1, 2, 3, 2, 1]))
