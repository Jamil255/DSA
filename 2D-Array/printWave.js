const wave = (array) => {
  let ans = []
  for (let col = 0; col < array.length; col++) {
    console.log(array[col])
    if (col & 1) {
      // bottom to top
      for (let row = array.length - 1; row >= 0; row--) {
        ans.push(array[row][col])
      }
    } else {
      //   top to bottom
      for (let row = 0; row < array.length; row++) {
        ans.push(array[row][col])
      }
    }
  }
  return ans
}

console.log(
  wave(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    3,
    3
  )
)
