// const wave = (array) => {
//   let ans = []
//   for (let i = 0; i < array.length; i++) {
//     if (i & 1) {
//       for (let j = array.length - 1; j >= 0; j--) {
//         ans.push(array[j][i])
//       }
//     } else {
//       for (let k = 0; k < array.length; k++) {
//         ans.push(array[k][i])
//       }
//     }
//   }
//   return ans
// }

// console.log(
//   wave([
//     [1, 2, 3, 5, 6],
//     [7, 8, 9, 10, 11, 12],
//   ])
// )

const wave = (array) => {
    let ans = []
    let rows = array.length
    let cols = array[0].length
  
    for (let i = 0; i < cols; i++) {
      if (i & 1) {
        // bottom to top
          for (let j = rows - 1; j >= 0; j--) {
            console.log(array[j][i])
          ans.push(array[j][i])
        }
      } else {
        // top to bottom
        for (let j = 0; j < rows; j++) {
          ans.push(array[j][i])
        }
      }
    }
    return ans
  }
  
  console.log(
    wave([
      [1, 2, 3, 5, 6],
        [7, 8, 9, 10, 11],
    ])
  )
  