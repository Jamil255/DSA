const spiralOrder = (matrix) => {
  let ans = []
  let row = matrix.length
  let col = matrix[0].length
  let count = 0
  let total = row * col
  let startingRow = 0
  let endingRow = row - 1
  let startCol = 0
  let endingCol = col - 1
  while (count < total) {
    // printing first Row
    for (let index = startCol; count < total && index <= endingCol; index++) {
      ans.push(matrix[startingRow][index])
      count++
    }
    startingRow++

    //printing last col
    for (
      let index = startingRow;
      count < total && index <= endingRow;
      index++
    ) {
      ans.push(matrix[index][endingCol])
      count++
    }
    endingCol--

    //   printing last row
    for (let index = endingCol; count < total && index >= startCol; index--) {
      ans.push(matrix[endingRow][index])
      count++
    }
    endingRow--

    //printing first col

    for (
      let index = endingRow;
      count < total && index >= startingRow;
      index--
    ) {
      ans.push(matrix[index][startCol])
      count++
    }
    startCol++
  }
  return ans
}
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
)
