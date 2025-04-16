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

const findUniques = (array) => {
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

// for (let i = 1; i < 5; i++) {
//   for (let j = 1; j < 2; j++) {
//     for (let k = 1; k < 5; k++) {
//       console.log('i', i, 'j', j, 'k', k)
//     }
//   }
// }

// find the duplicate in array

const findDuplicateArrays = (array) => {
  let temp = []
  let h = {}
  for (let key of array) {
    h[key] = h[key] + 1 || 1
  }

  for (let key in h) {
    if (h[key] > 1) {
      temp.push(Number(key))
    }
  }
  return temp
}
// console.log(findDuplicateArrays([1,2,3,4,3,4,2,34,44,34]));

// find the unique number in the array

const findUnique = (array) => {
  let ans = 0
  for (let i = 0; i < array.length; i++) {
    ans = ans ^ array[i]
  }
  return ans
}
// console.log(findUnique([1,2,2,1,4]));

// find the swapArray

const swapArrays = (array) => {
  for (let i = 0; i < array.length; i += 2) {
    if (i + 1 < array.length) {
      let start = array[i]
      array[i] = array[i + 1]
      array[i + 1] = start
    }
  }
  return array
}
// console.log(swapArrays([1, 2, 3, 4, 5]))

const findDup = (array) => {
  let ans = 0
  for (let i = 0; i < array.length; i++) {
    ans = ans ^ array[i]
  }
  for (let i = 1; i < array.length; i++) {
    ans = ans ^ i
  }
  return [ans]
}

// console.log(findDup([1,2,3,4,1]));

// arrray sort in [1,0,1,0,1]=>[0,0,1,1,1]

// const arraySorted = (array) => {
//   let left = 0
//   let right = array.length - 1
//   while (left < right) {
//     while (array[left] == 0 && left < right) {
//       left++
//     }
//     while (array[right] == 1 && left < right) {
//       right--
//     }
//     if (left < right) {
//     [array[left], array[right]] = [array[right], array[left]]
//       left++
//       right--
//     }
//   }
//   return array
// }
// console.log(arraySorted([1, 0, 0, 1, 1]))

const arraySorted = (array) => {
  let left = 0
  let right = array.length - 1
  while (left < right) {
    while (array[left] == 0 && left < right) {
      left++
    }
    while (array[right] == 1 && left < right) {
      right--
    }

    if (left < right) {
      ;[array[left], array[right]] = [array[right], array[left]]
      left++
      right--
    }
  }
  return array
}

// console.log(arraySorted([1,0,1,0,0,1,1]));

const arraySort = (array) => {
  let low = 0
  let mid = 0
  let high = array.length - 1

  while (mid <= high) {
    if (array[mid] === 0) {
      [array[low], array[mid]] = [array[mid], array[low]]
      low++
      mid++
    } else if (array[mid] === 1) {
      mid++
    } else if (array[mid] === 2) {
      ;[array[mid], array[high]] = [array[high], array[mid]]
      high--
    }
  }

  return array
}

console.log(arraySort([1, 0, 2, 0, 1, 0, 2]))
