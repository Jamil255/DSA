const getPivot = (array) => {
  let start = 0
  let end = array.length - 1
  let mid = Math.floor((start + end) / 2)
  while (start < end) {
    if (array[mid] >= array[0]) {
      start = mid + 1
    } else {
      end = mid
    }
    mid = Math.floor((start + end) / 2)
  }
  return start
}
// console.log(getPivot([7,8,9,0,1,2]))

const binarySearch = (array, key, start, end) => {
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

const searchInRotatedArray = (array, key) => {
    let pivot = getPivot(array)
    console.log(pivot)
  
  if (key >= array[pivot] && key <= array.length - 1) {
    return binarySearch(array, key, pivot, array.length - 1)
  } else {
    return binarySearch(array, key, 0, pivot - 1)
  }
}

// console.log(searchInRotatedArray([7, 9, 10, 11, 2, 3, 4], 12))
