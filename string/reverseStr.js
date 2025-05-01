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
console.log(reverseString('jamil'))
