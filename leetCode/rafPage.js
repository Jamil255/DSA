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
  console.log(b)

  let uniqueFreq = new Set(Object.values(b))
  return uniqueFreq.size == Object.values(b).length
}
// console.log(uniqueOccurs([1, 2, 3, 2,2,1]))

const findDuplicate287 = (array) => {
  let ans = 0
  for (let i = 0; i < array.length; i++) {
    ans = ans ^ array[i]
  }
  for (let i = 1; i < array.length; i++) {
    ans = ans ^ i
  }
  return ans
}

// console.log(findDuplicate287([1,2,3,4,1]));

const findDuplicateArray = (array) => {
  let frequency = {}
  let repeated = []
  for (let key of array) {
    frequency[key] = frequency[key] + 1 || 1
  }

  for (let key in frequency) {
    if (frequency[key] > 1) {
      repeated.push(Number(key))
    }
  }
  return repeated
}

// console.log(findDuplicateArray([1,2,3,4,4,4,3,2]));

const unionInterSection = (array1, array2) => {
  let temp = []
  for (let i = 0; i < array1.length; i++) {
    let element = array1[i]

    for (let j = 0; j < array2.length; j++) {
      if (element == array2[j]) {
        temp.push(array2[j])
        array2[j] = -2
        break
      }
    }
  }
  return temp
}

// console.log(unionInterSection([1, 2, 3], [3, 4]))


