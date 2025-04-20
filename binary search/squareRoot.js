const squareRoot = (num) => {
  let start = 0
  let end = num
  let ans = -1

  while (start <= end) {
    let mid = Math.floor((start + end) / 1)
    let square = mid * mid
    if (square == num) {
      return mid
    } else if (square < num) {
      ans = mid
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return ans
}

// console.log(squareRoot(4))

const getPivot = (array) => {
  let start = 0
  let end = array.length - 1
  while (start < end) {
    let mid = Math.floor((start + end) / 2)
    if (array[mid] >= array[0]) {
      start = mid + 1
    } else {
      end = mid
    }
  }
  return start
}

const binarySearch = (array, start, end, key) => {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (array[mid] == key) {
      return mid
    }
    if (key > array[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return -1
}

const searchInRotatedArr = (array, key) => {
  let pivot = getPivot(array)
  if (key >= array[pivot] && key <= array[array.length - 1]) {
    return binarySearch(array, pivot, array.length - 1, key)
  } else {
    return binarySearch(array, 0, pivot - 1, key)
  }
}
console.log(searchInRotatedArr([7,8,9,0,1,2,3,4],0));
