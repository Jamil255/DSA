https://drive.google.com/file/d/1d2eNEMdw5iuX7PflLfGykLgKF-SloUyr/view
const findDuplicate = (array) => {
  let temp = []
  let frequency = {}
  for (let key of array) {
    frequency[key] = frequency[key] + 1 || 1
  }

  for (let key in frequency) {
    if (frequency[key] > 1) {
      temp.push(Number(key))
    }
  }
  return temp
}
// console.log(findDuplicate([1,2,3,4,2,3,1,9]));

// find occuarnace

// [1,2,2,3,3,3]
// [6,7,8,2,]

const findOccurnace = (array) => {
  let h = {}
  for (let key of array) {
    h[key] = h[key] + 1 || 1
  }
  let unique = new Set(Object.values(h))
  return unique.size == Object.values(h).length
}
// console.log(findOccurnace([1,2,3,1,1,2]));

const tripletOfSum = (array, target) => {
  let tempArray = []
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      for (let k = 0; k < array.length; k++) {
        if (array[i] + array[j] + array[k] == target) {
          tempArray.push([array[i], array[k], array[k]])
        }
      }
    }
  }
  return new Set(tempArray)
}
// console.log(tripletOfSum([1, 2, 3, 4, 5], 12))

// [1,0,1,0]=>[0,0,1,1]

const arraySort = (array) => {
  let left = 0
  let right = array.length - 1
  while (left < right) {
    while (array[left] == 0) {
      left++
    }
    while (array[right] == 1) {
      right--
    }
    if (left < right) {
      ;[array[left], array[right]] = [array[right], array[left]]
      left++
      right--
    }
  }
  return array
}
// console.log(arraySort([1,0,1,0,0,1]));

// [1,0,2,1,0,1,0,2,0]=>[0,0,0,1,1,1,2,2]

const dutchNationalFlagAlgo = (array) => {
  let low = 0
  let mid = 0
  let high = array.length - 1
  while (mid <= high) {
    if (array[mid] == 1) {
      mid++
    } else if (array[mid] == 0) {
      ;[array[low], array[mid]] = [array[mid], array[low]]
      low++
      mid++
    } else {
      ;[array[mid], array[high]] = [array[high], array[mid]]
      high--
    }
  }
  return array
}
// console.log(dutchNationalFlagAlgo([1,2,0,1,2,0,1,0]));

const linearSearch = (array, key) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == key) {
      console.log(`key is find and at index :${i} and key is: ${array[i]}`)
    }
  }
  return null
}
// console.log(linearSearch([1,2,3,4,5,6],2));

const binarySearch = (array, key) => {
  let start = 0
  let end = array.length - 1
  let mid = Math.floor((start + end) / 2)
  while (start <= end) {
    if (array[mid] == key) {
      return mid
    }
    if (key > array[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
    mid = Math.floor((start + end) / 2)
  }
  return -1
}
// console.log(binarySearch([2, 3, 4, 5, 6, 90], 90))

const bnarySearch = (array, key) => {
  let start = 0
  let end = array.length - 1
  let mid = start + Math.floor((end - start) / 2)

  while (start <= end) {
    if (array[mid] == key) {
      return mid
    }
    if (key > array[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
    mid = start + Math.floor((end - start) / 2)
  }
  return -1
}
// console.log(bnarySearch([2,4,6,8,10],81));

const arraySorted = (array) => {
  let low = 0
  let mid = 0
  let high = array.length - 1
  while (mid <= high) {
    if (array[mid] == 1) {
      mid++
    } else if (array[mid] == 0) {
      ;[array[low], array[mid]] = [array[mid], array[low]]
      low++
      mid++
    } else {
      ;[array[mid], array[high]] = [array[high], array[mid]]
      high--
    }
  }
  return array
}
// console.log(arraySorted([0, 1, 2, 1, 0, 0, 2, 1]))
const leftOccurrnace = (array, key) => {
  let start = 0
  let end = array.length - 1
  let mid = Math.floor((start + end) / 2)
  let ans = -1
  while (start <= end) {
    if (array[mid] == key) {
      ans = mid
      end = mid - 1
    } else if (key > array[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
    mid = Math.floor((start + end) / 2)
  }
  return ans
}

const rightOccurrnace = (array, key) => {
  let start = 0
  let end = array.length - 1
  let mid = Math.floor((start + end) / 2)
  let ans = -1
  while (start <= end) {
    if (array[mid] == key) {
      ans = mid
      start = mid + 1
    } else if (key > array[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
    mid = Math.floor((start + end) / 2)
  }
  return ans
}

const findLeftAndRightOcc = (array, key) => {
  let first = leftOccurrnace(array, key)
  let second = rightOccurrnace(array, key)
  return [first, second]
}
// console.log(findLeftAndRightOcc([7,7,7,7,7,8,9,10],7))

const peakElementOfMountain = (array) => {
  let start = 0
  let end = array.length - 1
  let mid = Math.floor((start + end) / 2)
  while (start < end) {
    if (array[mid] < array[mid + 1]) {
      start = mid + 1
    } else {
      end = mid
    }
    mid = Math.floor((start + end) / 2)
  }
  return start
}
// console.log(peakElementOfMountain([0,1,0]));
// sort array 01
const arraySorts = (array) => {
  let left = 0
  let right = array.length - 1
  while (left < right) {
    while (array[left] == 0) {
      left++
    }
    while (array[right] == 1) {
      right--
    }

    if (left < right) {
      ;[array[left], arr[right]] = [array[right], array[left]]
      left++
      right--
    }
  }
  return array
}
// console.log(arraySort([1,0,1,0,1,1,0,0,1,0]));

// dutch national flag algorithm

const dutchNationalFlagAlgorithm = (arr) => {
  let low = 0
  let mid = 0
  let high = arr.length - 1
  while (mid <= high) {
    if (arr[mid] == 1) {
      mid++
    } else if (arr[mid] == 0) {
      ;[arr[low], arr[mid]] = [arr[mid], arr[low]]
      low++
      mid++
    } else {
      ;[arr[mid], arr[high]] = [arr[high], arr[mid]]
      high--
    }
  }
  return arr
}
// console.log(dutchNationalFlagAlgorithm([2,1,2,1,2,1,0,0,1,0,0]))

const pivetOfIndex = (array) => {
  let sum = 0
  let leftSum = 0
  array.forEach((element) => {
    sum += element
  })

  for (let i = 0; i < array.length; i++) {
    let rightSum = sum - array[i] - leftSum

    if (leftSum == rightSum) {
      return i
    }
    leftSum += array[i]
  }
  return -1
}
// console.log(pivetOfIndex([1, 7, 3, 6, 5, 6]))

const rewindPivot = (array) => {
  let sum = 0
  let leftSum = 0
  array.forEach((ele) => (sum += ele))
  for (let i = 0; i < array.length; i++) {
    let rightSum = sum - array[i] - leftSum
    if (leftSum == rightSum) return i
    leftSum += array[i]
  }
  return -1
}
// console.log(rewindPivot([1, 7, 3, 6, 6, 5]))

const rotatedArr = (array) => {
  let start = 0
  let end = array.length - 1
  let mid = Math.floor((start + end) / 2)
  while (start < end) {
    if (array[mid] >= array[0]) {
      start = mid + 1
    } else {
      end = mid
    }
    mid = Math.floor((start + end) / 2)
  }
  return start
}
// console.log(rotatedArr([7,9,1,2,3,4]))

const firstOccurrnace = (array, key) => {
  let start = 0
  let end = array.length - 1
  let mid = Math.floor((start + end) / 2)
  let ans = -1
  while (start <= end) {
    if (array[mid] == key) {
      ans = mid
      end = mid - 1
    } else if (key > array[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
    mid = Math.floor((start + end) / 2)
  }
  return ans
}
// console.log(firstOccurrnace([2,3,4,5,6,6,7],6));

const lastOccurrnace = (array, key) => {
  let ans = -1
  let start = 0
  let end = array.length - 1
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (array[mid] == key) {
      ans = mid
      start = mid + 1
    } else if (key > array[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return ans
}
// console.log(lastOccurrnace([1,2,3,4,4,4,4,4,5],4));

const numberOfOccurrnace = (array, key) => {
  let first = firstOccurrnace(array, key)
  let second = lastOccurrnace(array, key)
  let occuarnace = second - first + 1
  return occuarnace
}
// console.log(numberOfOccurrnace([1,2,2,2,3,4,5],2));

const peakElement = (array) => {
  let start = 0
  let end = array.length - 1
  let mid = Math.floor((start + end) / 2)
  while (start < end) {
    if (array[mid] < array[mid + 1]) {
      start = mid + 1
    } else {
      end = mid
    }
    mid = Math.floor((start + end) / 2)
  }
  return start
}
// console.log(peakElement([0,2,1,0]))

// find the duplicate in array

const duplicateInArr = (array) => {
  let temp = []
  let h = {}
  for (const key of array) {
    h[key] = h[key] + 1 || 1
  }

  for (const key in h) {
    if (h[key] > 1) {
      temp.push(Number(key))
    }
  }
  return temp
}
// console.log(duplicateInArr([3,3,4,4,5,5,2,7]));

const findPivot = (array) => {
  let start = 0
  let end = array.length - 1

  while (start < end) {
    let mid = Math.floor((start + end) / 2)
    if (array[mid] >= array[0]) {
      start = mid + 1
    } else {
      end = mid
    }
  }
  return end
}

const search = (array, start, end, key) => {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (array[mid] == key) {
      return mid
    } else if (key > array[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return -1
}

const searchInRotatedArr = (array, key) => {
  let pivot = findPivot(array)
  if (key >= array[pivot] && key <= array[array.length - 1]) {
    return search(array, pivot, array.length - 1, key)
  } else {
    return search(array, 0, pivot - 1, key)
  }
}
// console.log(searchInRotatedArr([5,1,3], 1

const squareRoot = (num) => {
  return num * num
}
// console.log(squareRoot(10));

const binarySearchSqrt = (num) => {
  let start = 0
  let end = num
  let ans = -1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    let square = mid * mid

    if (square == num) {
      return mid
    }

    if (square < num) {
      ans = mid
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return ans
}

// console.log(binarySearchSqrt(100))
//   console.log(binarySearchSqrt(10))

const getIndexOfPivot = (array) => {
  let sum = 0
  let leftSum = 0
  array.forEach((ele) => (sum += ele))
  for (let i = 0; i < array.length; i++) {
    let rightSum = sum - array[i] - leftSum
    if (leftSum == rightSum) return i
    leftSum += array[i]
  }

  return -1
}
// console.log(getIndexOfPivot([1, 7, 3, 6, 5, 6]))

const getPivot = (array) => {
  let sum = 0
  let leftSum = 0
  array.forEach((ele) => (sum += ele))
  for (let i = 0; i < array.length; i++) {
    let rightSum = sum - array[i] - leftSum
    if (leftSum == rightSum) return i
    leftSum += array[i]
  }
  return -1
}
// console.log(getPivot([1, 3, 7, 9, 5, 6]))
const isPossible = (array, std, mid) => {
  let stdCount = 1
  let pageSum = 0
  for (let i = 0; i < array.length; i++) {
    if (pageSum + array[i] <= mid) {
      pageSum += array[i]
    } else {
      stdCount++
      if (stdCount > std || array[i] > mid) return false
      pageSum = 0
      pageSum += array[i]
    }
  }
  return true
}

const bookAllocation = (array, std) => {
  let start = 0
  let sum = 0
  let ans = -1
  array.forEach((ele) => (sum += ele))
  let end = sum
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (isPossible(array, std, mid)) {
      ans = mid
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return ans
}

// console.log(bookAllocation([10,20,30,40],2));
