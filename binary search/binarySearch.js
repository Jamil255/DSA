const binarySearch = (array, key) => {
  array.sort()
  let start = 0
  let end = array.length - 1
  let mid = Math.floor((start + end) / 2)
  while (start <= end) {
    if (array[mid] == key) {
      return `key is ${key} on at index ${mid}`
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
console.log(binarySearch([2, 4, 5, 6, 7, 8, 9], 9))

// find the left and right occurrnace

const leftOccurrnace = (array, key) => {
  let start = 0
  let end = array.length - 1
  let mid = Math.floor((start + end) / 2)
  let ans = -1
  while (start <= end) {
    if (array[mid] == key) {
      ans = mid
      end = mid - 1
    } else if (key > array[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
    mid = Math.floor((start + end) / 2)
  }
  return ans
}

const rightOccurrnace = (array, key) => {
  let start = 0
  let end = array.length - 1
  let mid = Math.floor((start + end) / 2)
  let ans = -1
  while (start <= end) {
    if (array[mid] == key) {
      ans = mid
      start = mid + 1
    } else if (key > array[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
    mid = Math.floor((start + end) / 2)
  }
  return ans
}

const findLeftAndRightOccurrnace = (array, key) => {
  const left = leftOccurrnace(array, key)
  const right = rightOccurrnace(array, key)
  let frequency = right - left + 1
  console.log(frequency)
  // return [left,right]
}

console.log(findLeftAndRightOccurrnace([2,3,4,5,5,5,5,5,6,7,8],5));
