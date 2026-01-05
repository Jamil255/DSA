const swapArray = (array) => {
  for (let i = 0; i < array.length; i += 2) {
    if (i + 1 < array.length) {
      let start = array[i]

      array[i] = array[i + 1]
      array[i + 1] = start
    }
  }
  return array
}
console.log(swapArray([1, 2, 3, 4]))
