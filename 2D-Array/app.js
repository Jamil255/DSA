
const wavePrint = (array) => {
  let ans = []
  for (let i = 0; i < array.length; i++) {
    if (i & 1) {
      for (let j = array.length - 1; j >= 0; j--) {
        ans.push(array[j][i])
      }
    } else {
      for (let k = 0; k < array.length; k++) {
        ans.push(array[k][i])
      }
    }
  }
  return ans
}

// console.log(
//   wavePrint([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// )

const search2DArray = (matrix, target) => {
  let row = matrix.length
  let col = matrix[0].length
  let start = 0
  let end = row * col - 1
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    let element = matrix[Math.floor(mid / col)][Math.floor(mid % col)]
    if (element == target) return true
    if (element < target) start = mid + 1
    else end = mid - 1
    }
    return false
}

console.log(search2DArray([[1,3,5,7],[10,11,16,20],[23,30,34,60]],600))
