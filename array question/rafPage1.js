const arraySort = (array) => {
  let isSwap = false
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
        isSwap = true
      }
    }
    if (isSwap == false) break
  }
  return array
}
// console.log(arraySort([2, 9, 4, 1, 5, 6, 3, 1]))

const bubbleSort = (array) => {
  let isSwap = false
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
        isSwap = true
      }
    }
    if (isSwap == false) break
  }
  return array
}
// console.log(arrraySort([2,1,8,10,4,5]))

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }
    ;[array[i], array[minIndex]] = [array[minIndex], array[i]]
  }
  return array
}

// console.log(selectionSort([2, 1, 10, 9, 8, 7, 5, 4, 90]))

const reverseArr = (array) => {
  let start = 0
  let end = array.length - 1
  while (start <= end) {
    ;[array[start], array[end]] = [array[end], array[start]]
    start++
    end--
  }
  return array
}

// console.log(reverseArr([1,2,3,4,5]))

const reverseArray = (array, left) => {
  let start = left + 1
  let end = array.length - 1
  while (start <= end) {
    ;[array[start], array[end]] = [array[end], array[start]]
    start++
    end--
  }
  return array
}
// console.log(reverseArray([1,2,3,4,5,6],2))

const mergeArray = (arr1, arr2) => {
  let tempArr = []
  let i = 0
  let j = 0
  let k = 0
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

// console.log(mergeArray([1,2,3],[2,4,5,6,7]))

const a = (arr1, arr2) => {
  let tempArr = []
  let k = 0
  i = 0
  j = 0
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
// console.log(a([1, 2, 3, 4], [2, 3, 6, 8, 9]))

const mergeArrayLeetcode = (arr1, m, arr2, n) => {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1
  while (i >= 0 && j >= 0) {
    if (arr1[i] > arr2[j]) {
      arr1[k--] = arr1[i--]
    } else {
      arr1[k--] = arr2[j--]
    }
  }
  while (j >= 0) {
    arr1[k--] = arr2[j--]
  }
  return arr1
}
// console.log(mergeArrayLeetcode([1,2,3],3,[3,4,6,7,8],5))

const rotatedArray = (array, k) => {
  let tempArr = []
  for (let i = 0; i < array.length; i++) {
    tempArr[(i + k) % array.length] = array[i]
  }
  return tempArr
}
// console.log(rotatedArray([1,2,3,4],2))

const isCheckRotatedArr = (array) => {
  let count = 0
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) count++
  }
  if (array[array.length - 1] > array[0]) count++
  return count >= 1
}
// console.log(isCheckRotatedArr([3,4,5,1,2]))

const sumOfTwoArray = (arr1, m, arr2, n) => {
  let i = m - 1
  let j = n - 1
  let carry = 0
  let ans = []
  while (i >= 0 && j >= 0) {
    let sum = arr1[i] + arr2[j] + carry
    carry = Math.floor(sum / 10)
    sum = Math.floor(sum % 10)
    ans.push(sum)
    i--
    j--
  }

  // first case

  while (i >= 0) {
    let sum = arr1[i] + carry
    carry = Math.floor(sum / 10)
    sum = Math.floor(sum % 10)
    ans.push(sum)
    i--
  }

  // second case
  while (j >= 0) {
    let sum = arr2[j] + carry
    carry = Math.floor(sum / 10)
    sum = Math.floor(sum % 10)
    ans.push(sum)
    j--
  }
  while (carry !== 0) {
    let sum = carry
    carry = Math.floor(sum / 10)
    sum = Math.floor(sum % 10)
    ans.push(sum)
  }
  return ans.reverse()
}
// console.log(sumOfTwoArray([1,2,3,4],4,[6],1))
