const search2DArray = (matrix, target) => {
  let row = matrix.length
  let col = matrix[0].length
  let start = 0
  let end = row * col - 1
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    let elem = matrix[Math.floor(mid / col)][Math.floor(mid % col)]
    if (elem == target) return true
    if (elem < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
    }
    return false
}
console.log(search2DArray([[1,3,5,7],[10,11,16,20],[23,30,34,60]],5))
