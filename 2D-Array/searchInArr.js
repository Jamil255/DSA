const searchInArray = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] == target) return 1
    }
  }
  return 0
}
console.log(
  searchInArray(
    [
      [1, 2, 3, 4],
      [5, 6, 7],
    ],
    1
  )
)
