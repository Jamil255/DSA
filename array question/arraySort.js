const arraySort = (array) => {
  let isSwap = false

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
        isSwap = true
      }
      if (isSwap == false) break
    }
  }
  return array
}
console.log(arraySort([6,5,4,3,2,1,9,8]))
