const rowOfSum = (array) => {
  let tempArr = []
  for (let i = 0; i < array.length; i++) {
    let sum = 0
    for (let j = 0; j < array[i].length; j++) {
      sum += array[i][j]
    }

    tempArr.push(sum)
  }
  return  Math.max(...tempArr)
}

console.log(
  rowOfSum([
    [1, 2, 3],
    [4, 5, 6],
  ])
)
