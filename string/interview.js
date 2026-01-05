const reverseString = (str) => {
  const splitsStr = str.split('')
  let start = 0
  let end = splitsStr.length - 1
  while (start < end) {
    ;[splitsStr[start], splitsStr[end]] = [[splitsStr[end]], splitsStr[start]]
    start++
    end--
  }
  return splitsStr.join('')
}

// console.log(reverseString("jamil"));

const findFreq = (str) => {
  let h = {}
  for (const key of str) {
    h[key] = h[key] + 1 || 1
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
// console.log(findFreq("hello"));

const isPallidrome = (str) => {
  let cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let start = 0
  let end = cleanStr.length - 1
  while (start <= end) {
    if (cleanStr[start] !== cleanStr[end]) return 'No'
    start++
    end--
  }
  return 'Yes'
}
// console.log(isPallidrome('A man, a plan, a canal: Panama'));

const reverseWord = (string) => {
  // let str=s.trim().split(/\s+/)
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
// console.log(reverseWord('hello world'));

const reverse = (s, start, end) => {
  while (start <= end) {
    ;[s[start], s[end]] = [s[end], s[start]]
    start++
    end--
  }
  return s
}

const reverseStr = (s) => {
  reverse(s, 0, s.length - 1)

  let start = 0
  for (let end = 0; end < s.length; end++) {
    if (s[end] === ' ' || end === s.length) {
      reverse(s, start, end - 1)
      start = end + 1
    }
  }
  return s
}
// console.log(
//   reverseStr([
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
  let stack = []
  for (const char of str) {
    stack[stack.length - 1] === char ? stack.pop() : stack.push(char)
    }
    return stack.join('')
}
// console.log(hello('zxxyyv'));
const str = (s) => {
    let splitStr = s.split(' ')
    const a = splitStr.map(w => w.split('').reverse().join(''))
    return a.join(' ')
}
// console.log(str('Mr Ding'));

const subStr = (s, p) => {
    while (s.length !== 0 && s.indexOf(p) !== -1) {
        s=s.replace(p,'')
    }
    return s
}
// console.log(subStr('daabcbaabcbc','abc'));
