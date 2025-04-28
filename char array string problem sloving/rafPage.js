const reverseStrings = (str) => {
  let splitStr = str.split('')
  let start = 0
  let end = splitStr.length - 1
  while (start < end) {
    ;[splitStr[start], splitStr[end]] = [splitStr[end], splitStr[start]]
    start++
    end--
  }
  return splitStr.join('')
}
// console.log(reverseString('jamil afzal'))
const isPallidrome = (str) => {
  let cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let start = 0
  let end = cleanStr.length - 1
  while (start <= end) {
    if (cleanStr[start] !== cleanStr[end]) return 0
    start++
    end--
  }
  return 1
}

// console.log(isPallidrome('noon'))

const revereWord = (s) => {
  let str = s.trim().split(/\s+/)
  let start = 0
  let end = str.length - 1
  while (start <= end) {
    ;[str[start], str[end]] = [str[end], str[start]]
    start++
    end--
  }
  return str.join(' ')
}
// console.log(revereWord('hello  world'))

const reverse = (s, start, end) => {
  while (start < end) {
    ;[s[start], s[end]] = [s[end], s[start]]
    start++
    end--
  }
}

const reverseStr = (s) => {
  // step 1: reverse the entire array
  reverse(s, 0, s.length - 1)

  // step 2: reverse the each world in the array
  let start = 0
  for (let end = 0; end <= s.length; end++) {
    if (s[end] === ' ' || end === s.length) {
      reverse(s, start, end - 1)
      start = end + 1
    }
  }
  return s
}
console.log(
  reverseStr([
    't',
    'h',
    'e',
    ' ',
    's',
    'k',
    'y',
    ' ',
    'i',
    's',
    ' ',
    'b',
    'l',
    'u',
    'e',
  ])
)
