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
// console.log(arraySorted([1, 0, 0, 1, 0]))

const arraySort = (array) => {
    let low = 0
    let mid = 0
    let high = array.length - 1
    while (mid <= high) {
        if (array[mid] == 0) {
            [array[low], array[mid]] = [array[mid], array[low]]
            low++
            mid++
        } else if (array[mid] == 1) {
            mid++
        } else {
            [array[mid], array[high]] = [array[high], array[mid]]
            high--
        }
    }
    return array
}
console.log(arraySort([2,0,1,0,1,2,2]));
