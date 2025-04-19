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
// console.log(getPivot([3, 5, 6, 7, 8, 1, 2]))
