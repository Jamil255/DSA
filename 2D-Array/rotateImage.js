const rotateImg = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      ;[array[i][j], array[j][i]] = [array[j][i], array[i][j]]
    }
    }
    console.log(array)
  for (let col = 0; col < array.length; col++) {
    array[col].reverse()
  }

  return array
}
console.log(
  rotateImg([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)
