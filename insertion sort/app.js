const insertionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let temp = array[i]
    let j = i - 1
    for (; j >= 0; j--) {
      if (array[j] > temp) {
        array[j + 1] = array[j]
      } else {
        break
      }
    }
    array[j + 1] = temp
  }
  return array
}

// console.log(insertionSort([2,4,6,1,9,8,7]))

const insertionSorts = (array) => {
  let i = 1
  while (i < array.length) {
    let temp = array[i]
    let j = i - 1

    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j] // shift right
      j--
    }

    array[j + 1] = temp // place temp in correct position
    i++
  }

  return array
}

// array sort
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