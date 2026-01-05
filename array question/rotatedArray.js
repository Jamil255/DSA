const rotatedArray = (array, k) => {
  let tempArr = []
  for (let i = 0; i < array.length; i++) {
    tempArr[(i + k) % array.length] = array[i]
  }
    array = [...tempArr]
    return array
}
console.log(rotatedArray([1, 2, 3, 4, 5, 6, 7], 3))
