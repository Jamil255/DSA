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
