// // const wave = (array) => {
// //   let ans = []
// //   for (let i = 0; i < array.length; i++) {
// //     if (i & 1) {
// //       for (let row = array.length - 1; row >= 0; row--) {
// //         ans.push(array[row][i])
// //       }
// //     } else {
// //       for (let k = 0; k < array.length; k++) {
// //         ans.push(array[k][i])
// //       }
// //     }
// //   }
// //   return ans
// // }

// // console.log(
// //   wave([
// //     [1, 2, 3, 5, 6],
// //     [7, 8, 9, 10, 11, 12],
// //   ])
// // )

// // const wave = (array) => {
// //     let ans = []
// //     let rows = array.length
// //     let cols = array[0].length

// //     for (let i = 0; i < cols; i++) {
// //       if (i & 1) {
// //         // bottom to top
// //           for (let row = rows - 1; row >= 0; row--) {
// //             console.log(array[row][i])
// //           ans.push(array[row][i])
// //         }
// //       } else {
// //         // top to bottom
// //         for (let row = 0; row < rows; row++) {
// //           ans.push(array[row][i])
// //         }
// //       }
// //     }
// //     return ans
// //   }

// //   console.log(
// //     wave([
// //       [1, 2, 3, 5, 6],
// //         [7, 8, 9, 10, 11],
// //     ])
// //   )

// const rotateAntiClockwise = (matrix) => {
//   const n = matrix.length

//   // Step 1: Transpose
//   for (let i = 0; i < n; i++) {
//     for (let row = i + 1; row < n; row++) {
//       ;[matrix[i][row], matrix[row][i]] = [matrix[row][i], matrix[i][row]]
//     }
//   }

//   // Step 2: Reverse all rows manually (swap row i with row n-1-i)
//   let top = 0
//   let bottom = n - 1
//   while (top < bottom) {
//     for (let col = 0; col < n; col++) {
//       ;[matrix[top][col], matrix[bottom][col]] = [
//         matrix[bottom][col],
//         matrix[top][col],
//       ]
//     }
//     top++
//     bottom--
//   }

//   return matrix
// }

// console.log(
//   rotateAntiClockwise([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// )

const spiralOrder = (matrix) => {
  let row = matrix.length
  let col = matrix[0].length
  let ans = []
  let count = 0
  let total = row * col

  startingRow = 0
  endingRow = row - 1
  startingCol = 0
  endingCol = col - 1
  while (count < total) {
    for (
      let index = startingCol;
      count < total && index <= endingCol;
      index++
    ) {
      ans.push(matrix[startingRow][index])
      count++
    }
    startingRow++

    for (
      let index = startingRow;
      count < total && index <= endingRow;
      index++
    ) {
      ans.push(matrix[index][endingCol])
      count++
    }
    endingCol--

    for (
      let index = endingCol;
      count < total && index >= startingCol;
      index--
    ) {
      ans.push(matrix[endingRow][index])
      count++
    }
    endingRow--
    for (
      let index = endingRow;
      count < total && index >= startingRow;
      index--
    ) {
      ans.push(matrix[index][startingCol])
      count++
    }
    startingCol++
  }
  return ans
}
// console.log(
//   spiralOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// )

const wavePrint = (array) => {
  let ans = []
  let rows = array.length
  let cols = array[0].length
  console.log(rows, cols)
  for (let col = 0; col < cols; col++) {
    if (col & 1) {
      //    bottom to top

      for (let row = rows - 1; row >= 0; row--) {
        ans.push(array[row][col])
      }
    } else {
      for (let row = 0; row < rows; row++) {
        ans.push(array[row][col])
      }
    }
  }
  return ans
}
// console.log(
//   wavePrint([
//     [1, 2, 3],
//     [4, 5, 6],
//   ])
// )

const rotateImg = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      ;[array[i][j], array[j][i]] = [array[j][i], array[i][j]]
    }
  }
  for (let k = 0; k < array.length; k++) {
    array[k].reverse()
    }
    return array
}

// console.log(rotateImg([[1,2,3],[4,5,6],[7,8,9]]))
