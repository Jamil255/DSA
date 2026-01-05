const reverseStr = (str) => {
  let start = 0
  let splitStr = str.split('')
  let end = splitStr.length - 1
  while (start < end) {
    ;[splitStr[start], splitStr[end]] = [splitStr[end], splitStr[start]]
    start++
    end--
  }
  return splitStr.join('')
}

// console.log(reverseStr('jaffar'))

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
// console.log(reverseArray([1,2,3,4]));

const findFreq = (str) => {
  let h = {}
  for (const key of str) {
    h[key] = h[key] + 1 || 1
  }
  return h
}
// console.log(findFreq("jaffar"));

const isPallidrome = (str) => {
  let start = 0
  let splitStr = str.split('')
  let end = splitStr.length - 1
  while (start < end) {
    if (splitStr[start] !== splitStr[end]) return 'No'
  }
  return 'Yes'
}
// console.log(isPallidrome('good'))

const isEvenNbr = (num) => {
  if (num & 1) return `this is odd ${num}`
  return `this is even ${num}`
}

// console.log(isEvenNbr(90));

const reverseWord = (str) => {
  let cleanStr = str.trim().split(/\s+/)
  let start = 0
  let end = cleanStr.length - 1
  while (start < end) {
    ;[cleanStr[start], cleanStr[end]] = [cleanStr[end], cleanStr[start]]
    start++
    end--
  }
  return cleanStr.join(' ')
}
// console.log(reverseWord('my name is jhon'))

const str1047 = (str) => {
  let stack = []
  for (const char of str) {
    stack[stack.length - 1] === char ? stack.pop() : stack.push(char)
  }
  return stack.join('')
}
// console.log(str1047('zxxyy'))

const isFact = (num) => {
  // base_case

  if (num == 0) return 1
  return num * isFact(num - 1)
}

// console.log(isFact(5));

const findDuplicate = (array) => {
  let h = {}
  let temp = []
  for (const key of array) {
    h[key] = h[key] + 1 || 1
  }

  for (const a in h) {
    if (h[a] > 1) {
      temp.push(Number(a))
    }
  }
  return temp
}
// console.log(findDuplicate([1,2,3,2,4,5,6,3,5,7,8]));

const findunique = (array) => {
  let h = {}
  let tempArr = []
  for (const key of array) {
    h[key] = h[key] + 1 || 1
  }

  for (const key in h) {
    if (h[key] <= 1) {
      tempArr.push(Number(key))
    }
  }
  return tempArr
}
// console.log(findunique([1,2,3,4,5,6,7,8,4,5]));

const findTheUniqueOccur = (num) => {
  let h = {}
  for (const key of num) {
    h[key] = h[key] + 1 || 1
  }

  const unique = new Set(Object.values(h))
  return unique.size == Object.values(h).length
}
// console.log(findTheUniqueOccur([1, 2, 2, 2, 3, 3]))
