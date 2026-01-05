const reverseStr = (str) => {
  let splitStr = str.split('')
  let start = 0
  let end = splitStr?.length - 1

  while (start < end) {
    ;[splitStr[start], splitStr[end]] = [splitStr[end], splitStr[start]]
    start++
    end--
  }
  return splitStr.join('')
}

// console.log(reverseStr('hello'))

const reversArray = (array) => {
  let start = 0
  let end = array.length - 1
  while (start < end) {
    ;[array[start], array[end]] = [array[end], array[start]]
    start++
    end--
  }
  return array
}

// console.log(reversArray([1,2,3,4,5]));

const findFrequency = (str) => {
  let h = {}
  for (const key of str) {
    h[key] = h[key] + 1 || 1
  }
  return h
}

// console.log(findFrequency("jaffarAman"));

const isPallidrome = (str) => {
  const splitsStr = str.replace(/[^a-zA-Z0-9]/g, '')
  let start = 0
  let end = splitsStr.length - 1
  while (start < end) {
    if (str[start] !== str[end]) return 'No'
    start++
    end--
  }
  return 'Yes'
}
console.log(isPallidrome('yes'))
