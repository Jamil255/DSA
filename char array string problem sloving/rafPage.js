const reverseString = (str) => {
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
        [str[start], str[end]] = [str[end], str[start]]
        start++
        end--
    }
    return str.join(' ')
}
console.log(revereWord('hello  world'))
