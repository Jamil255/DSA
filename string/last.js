const reverseStr = (str) => {
  let splitStr = str.split('')
  let start = 0
  let end = splitStr.length - 1
  while (start < end) {
    ;[splitStr[start], splitStr[end]] = [splitStr[end], splitStr[start]]
    start++
    end--
  }
  console.log(splitStr.join(''))
}
// console.log(reverseStr('360XpertSolution'))
const reverseWords = (str) => {
  let splitStr = str.trim().split(/\s+/)
  let start = 0
  let end = splitStr.length - 1
  while (start < end) {
    ;[splitStr[start], splitStr[end]] = [splitStr[end], splitStr[start]]
    start++
    end--
  }
  return splitStr.join(' ')
}
// console.log(reverseWords("hello worlds"));

const isPallidrome = (str) => {
  const splitStr = str
    .trim()
    .replace(/[^a-zA-Z0-9]/g, '')
    .toLowerCase()
  console.log(splitStr)
  let start = 0
  let end = splitStr.length - 1
  while (start <= end) {
    if (splitStr[start] !== splitStr[end]) return 'No'
    start++
    end--
  }
  return 'Yes'
}
// console.log(isPallidrome('mad am'))

const productOfDigit = (n) => {
  let product = 1
  let sum = 0
  while (n !== 0) {
    let digit = n % 10
    product = product * digit
    sum = sum + digit
    n = Math.floor(n / 10)
  }
  let answer = product - sum
  return answer
}
console.log(productOfDigit(456));
