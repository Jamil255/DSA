const firstOccuarnace = (array, key) => {
  let ans = -1
  let start = 0
  let end = array.length - 1
  let mid = Math.floor((start + end) / 2)
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
// console.log(firstOccuarnace([2,3,4,5,5,5,6,7,8,9],5));

const lastOccuarnace = (array, key) => {
  let ans = -1
  let start = 0
  let end = array.length - 1
  let mid = Math.floor((start + end) / 2)
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
// console.log(lastOccuarnace([2, 3, 5, 7, 9, 11, 13, 17], 17))

const findLastAndFristOccuarnace = (array, key) => {
  const first = firstOccuarnace(array, key)
  const last = lastOccuarnace(array, key)
  return `first occuarnace at index is ${first} and last occurrnace of at index is ${last}`
}
console.log(findLastAndFristOccuarnace([], 0))
