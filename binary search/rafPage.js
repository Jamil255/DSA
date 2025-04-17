const findDuplicate = (array) => {
  let temp = []
  let frequency = {}
  for (let key of array) {
    frequency[key] = frequency[key] + 1 || 1
  }

  for (let key in frequency) {
    if (frequency[key] > 1) {
      temp.push(Number(key))
    }
  }
  return temp
}
// console.log(findDuplicate([1,2,3,4,2,3,1,9]));

// find occuarnace

// [1,2,2,3,3,3]
// [6,7,8,2,]

const findOccurnace = (array) => {
  let h = {}
  for (let key of array) {
    h[key] = h[key] + 1 || 1
  }
  let unique = new Set(Object.values(h))
  return unique.size == Object.values(h).length
}
// console.log(findOccurnace([1,2,3,1,1,2]));

const tripletOfSum = (array, target) => {
  let tempArray = []
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      for (let k = 0; k < array.length; k++) {
        if (array[i] + array[j] + array[k] == target) {
          tempArray.push([array[i], array[k], array[k]])
        }
      }
    }
  }
  return new Set(tempArray)
}
// console.log(tripletOfSum([1, 2, 3, 4, 5], 12))

// [1,0,1,0]=>[0,0,1,1]

const arraySort = (array) => {
  let left = 0
  let right = array.length - 1
  while (left < right) {
    while (array[left] == 0) {
      left++
    }
    while (array[right] == 1) {
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
// console.log(arraySort([1,0,1,0,0,1]));

// [1,0,2,1,0,1,0,2,0]=>[0,0,0,1,1,1,2,2]

const dutchNationalFlagAlgo = (array) => {
  let low = 0
  let mid = 0
  let high = array.length - 1
  while (mid <= high) {
    if (array[mid] == 1) {
      mid++
    } else if (array[mid] == 0) {
      ;[array[low], array[mid]] = [array[mid], array[low]]
      low++
      mid++
    } else {
      ;[array[mid], array[high]] = [array[high], array[mid]]
      high--
    }
  }
  return array
}
// console.log(dutchNationalFlagAlgo([1,2,0,1,2,0,1,0]));

const linearSearch = (array, key) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == key) {
      console.log(`key is find and at index :${i} and key is: ${array[i]}`)
    }
  }
  return null
}
// console.log(linearSearch([1,2,3,4,5,6],2));

const binarySearch = (array, key) => {
  let start = 0
  let end = array.length - 1
  let mid = Math.floor((start + end) / 2)
  while (start <= end) {
    if (array[mid] == key) {
      return mid
    }
    if (key > array[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
    mid = Math.floor((start + end) / 2)
  }
  return -1
}
console.log(binarySearch([2, 3, 4, 5, 6, 90], 90))
