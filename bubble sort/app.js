const bubbleSort = (array) => {
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
console.log(bubbleSort([3, 2, 1, 6, 5, 4]))

const selectionSort = (array) => {

  for (let i = 0; i < array.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) minIndex = j
    }
    ;[array[i], array[minIndex]] = [array[minIndex], array[i]]
  }
  return array
}
console.log(selectionSort([3, 2, 1, 6, 5, 4]))
