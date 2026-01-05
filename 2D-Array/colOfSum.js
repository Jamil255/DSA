const colOfSum = (array) => {
  if (array.length == 0) return []
  let cols = array[0].length
  let result = new Array(cols).fill(0)
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      result[j] += array[i][j]
    }
  }
  return Math.max(...result)
}
console.log(colOfSum([[1,2,3],[4,5,6]]))
