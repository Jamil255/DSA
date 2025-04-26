const reverseArr = (array, start) => {
  let left = start + 1
  let right = array.length - 1
  while (left < right) {
    ;[array[left], array[right]] = [array[right], array[left]]
    left++
    right--
  }
  return array
}
// console.log(reverseArr([1,2,3,4,5,6,7],4))

const traverseArray = (array) => {
  let start = 0
  let end = array.length - 1

  while (start <= end) {
    ;[array[start], array[end]] = [array[end], array[start]]
    start++
    end--
  }
  return array
}

// console.log(traverseArray([1, 2, 3, 4]))

const mergeSortArray = (arr1, arr2) => {
  let i = 0
  let j = 0
  let k = 0
  let tempArr = []
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      tempArr[k++] = arr1[i++]
    } else {
      tempArr[k++] = arr2[j++]
    }
  }

  while (i < arr1.length) {
    tempArr[k++] = arr1[i++]
  }
  while (j < arr2.length) {
    tempArr[k++] = arr2[j++]
  }

  return tempArr
}

// console.log(mergeSortArray([1,5,6,7],[2,3,4]))

const merge = (arr1, m, arr2, n) => {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1
  while (i >= 0 && j >= 0) {
    if (arr1[i] > arr2[j]) {
      arr1[k] = arr1[i]
      i--
    } else {
      arr1[k] = arr2[j]
      j--
    }
    k--
  }

  while (j >= 0) {
    arr1[k] = arr2[j]
    j--
    k--
  }
  return arr1
}
// console.log(merge([1,2,2,0,0,0],3,[3,4,5],3))
