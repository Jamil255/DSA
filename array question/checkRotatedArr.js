const rotatedArray = (array) => {
  let count = 0
    for (let i = 1; i < array.length; i++) {

    if (array[i - 1] > array[i]) {
      count++
    }
  }
  if (array[array.length - 1] > array[0]) count++
  return count <= 1
}

console.log(rotatedArray([3, 4, 5, 6, 1, 2]))
