const arraySort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) minIndex = j
    }
    ;[array[i], array[minIndex]] = [array[minIndex], array[i]]
  }
  return array
}
// console.log(arraySort([3, 4, 5, 2, 1, 6, 7]))

const twoSum = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == target) {
        return [i, j]
      }
    }
  }
  return []
}
console.log(twoSum([3, 2, 3], 6))
