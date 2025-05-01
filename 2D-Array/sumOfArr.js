const sumOfArray = (array) => {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let sum = 0
    for (let j = 0; j < array[i].length; j++) {
      sum += array[i][j]
    }
    result.push(sum)
  }
  return result
}
console.log(
  sumOfArray([
    [1, 2, 3],
    [4, 5, 6],
  ])
)
