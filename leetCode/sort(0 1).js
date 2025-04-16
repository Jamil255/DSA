const arraySorted = (array) => {
  let left = 0
  let right = array.length - 1

  while (left < right) {
    while (array[left] == 0 && left < right) {
      left++
    }
    while (array[right] == 1 && left < right) {
      right--
    }

    if (array[left] == 1 && array[right] == 0 && left < right) {
      //   let start = array[left]
      //   array[left] = array[right]
      //   array[right] = start
      [array[left], array[right]] = [array[right], array[left]]
      left++
      right--
    }
  }
  return array
}
console.log(arraySorted([1, 0, 0, 1, 0]))
