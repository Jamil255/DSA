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

console.log(
  wavePrint([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)
