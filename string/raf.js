const reverseStr = (str) => {
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

// console.log(reverseStr('360XpertSolution'))

const findFreq = (str) => {
  let h = {}
  for (const a of str) {
    h[a] = h[a] + 1 || 1
  }
  let maxKey = ''
  let maxVal = -Infinity
  for (const key in h) {
    if (h[key] > maxVal) {
      maxVal = h[key]
      maxKey = key
    }
  }
  return [maxKey, maxVal]
}
// console.log(findFreq('hello'))

const isPallidrome = (str) => {
  let cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  console.log(cleanStr)
  let start = 0
  let end = cleanStr.length - 1
  while (start <= end) {
    if (cleanStr[start] !== cleanStr[end]) return 'No'
    start++
    end--
  }
  return 'yes'
}
// console.log(isPallidrome('A man, a plan, a canal: Panama'));

const reverseWords = (string) => {
  let str = string.trim().split(/\s+/)
  let start = 0
  let end = str.length - 1
  while (start <= end) {
    ;[str[start], str[end]] = [str[end], str[start]]
    start++
    end--
  }
  return str.join(' ')
}
// console.log(reverseWords('hello world'));

const reverse = (s, start, end) => {
  while (start < end) {
    ;[s[start], s[end]] = [s[end], s[start]]
    start++
    end--
  }
  return s
}

const reversStr = (str) => {
  //step 1 reverse the entire array
  reverse(str, 0, str.length - 1)

  // step 2 reverse the each word in array
  let start = 0
  for (let end = 0; end < str.length; end++) {
    if (str[end] === ' ' || end === str.length) {
      reverse(str, start, end - 1)
      start = end + 1
    }
  }
  return str
}

// console.log(
//   reversStr([
//     't',
//     'h',
//     'e',
//     ' ',
//     's',
//     'k',
//     'y',
//     ' ',
//     'i',
//     's',
//     ' ',
//     'b',
//     'l',
//     'u',
//     'e',
//   ])
// )

const hello = (str) => {
  let words = str.split(' ')
  console.log(words)
  const a = words.map((word) => word.split('').reverse().join(''))
  console.log(a)
  return a.join(' ')
}

// console.log(hello('Mr Ding'))

const str1047 = (s) => {
  let stack = []
  for (const char of s) {
    stack[stack.length - 1] === char ? stack.pop() : stack.push(char)
  }
  return stack.join('')
}
// console.log(str1047('ca'));

const subStr = (s, p) => {
  while (s.length !== 0 && s.indexOf(p) !== -1) {
    s = s.replace(p, ' ')
  }
  return s
}
// console.log(subStr('abcbd', 'abc'))

const swapArray = (array) => {
  for (let i = 0; i < array.length - 1; i += 2) {
    ;[array[i], array[i + 1]] = [array[i + 1], array[i]]
  }
  return array
}

// console.log(swapArray([1, 2, 3, 4]))

const isPrime = (num) => {
  if (num <= 1) return false
  if (num % i == 0) return false
  return true
}
//console.log(isPrime(11));//

const productOfDigit = (n) => {
  let product = 1
  let sum = 0
  while (n !== 0) {
    let digit = n % 10
    console.log(digit)
    product = product * digit
    sum = sum + digit
    n = Math.floor(n / 10)
  }
  let answer = product - sum
  return answer
}
console.log(productOfDigit(456))
