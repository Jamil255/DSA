const reverseArray = (array) => {
  let start = 0
  let end = array.length - 1
  while (start < end) {
    ;[array[start], array[end]] = [array[end], array[start]]
    start++
    end--
  }
  return array
}
// console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]))
const transverArr = (array, start) => {
  let left = start + 1
  let right = array.length - 1
  while (left < right) {
    ;[array[left], array[right]] = [array[right], array[left]]
    left++
    right--
  }
  return array
}
// console.log(transverArr([1,2,3,4,5],1));

const arrayRotated = (array) => {
  let count = 0
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) count++
  }
  if (array[array.length - 1] > array[0]) count++
  return count <= 1
}
// console.log(arrayRotated([4, 5, 6, 7, 1, 2, 3]))

const arraySorted = (array) => {
  for (let i = 1; i < array.length; i++) {
    let isSwap = false
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
        isSwap = true
      }
    }
    if (!isSwap) break
  }
  return array
}
// console.log(arraySorted([1,2,1,1,0,0,1,2]))

const nonZeroMove = (array) => {
  let nonZero = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      ;[array[i], array[nonZero]] = [array[nonZero], array[i]]
      nonZero++
    }
  }
  return array
}
// console.log(nonZeroMove([1, 0, 0, 0, 3, 4, 6, 0, 0]))

const findUnique = (array) => {
  let ans = 0
  for (let i = 0; i < array.length; i++) {
    ans = ans ^ array[i]
  }
  return ans
}
// console.log(findUnique([2, 1, 2, 1, 4]))

const findDuplicate = (array) => {
  let h = {}
  let temp = []
  for (const a of array) {
    h[a] = h[a] + 1 || 1
  }
  for (const key in h) {
    if (h[key] > 1) {
      temp.push(Number(key))
    }
  }
  return temp
}
// console.log(findDuplicate([3,4,5,3,6,7,85,4,5]));

const findUniques = (array) => {
  let h = {}
  let temp = []
  for (const a of array) {
    h[a] = h[a] + 1 || 1
  }

  for (const key in h) {
    if (h[key] <= 1) {
      temp.push(Number(key))
    }
  }
  return temp
}
// console.log(findUnique([1,2,3,4,3,4,2,5,1]));

const arraySort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let isSwap = false
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
        isSwap = true
      }
    }
    if (!isSwap) break
  }
  return array
}
console.log(arraySort([1, 4, 3, 2, 1, 5, 6, 8, 7]))
