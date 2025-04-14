const pirOfSum = (array, num) => {
  let temp = []
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == num) {
        temp.push([array[i],array[j]])
      }
    }
  }

  return temp.sort()
}
// console.log(pirOfSum([1, 2, 3, 4,5], 5))
