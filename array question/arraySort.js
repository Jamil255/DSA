const arraySort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let isSwap = false // reset before every round
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
        isSwap = true
      }
    }
    if (!isSwap) break // stop early if already sorted
  }
  return array
}

console.log(arraySort([2, 8, 9, 4, 5, 6, 1]))
