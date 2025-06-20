


const search2DMatrix = (array, target) => {
  let m = array.length
  let n = array[0].length
  let row = 0
  let col = n - 1
  while (row < m && col >= 0) {
    let element = array[row][col]
    if (element == target) return true
    if (element < target) row++
    else col--
  }
  return false
}

console.log(
  search2DMatrix([
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ],12)
)
