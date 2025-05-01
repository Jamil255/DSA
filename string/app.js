// const reverse = (s, start, end) => {
//   while (start <= end) {
//     ;[s[start], s[end]] = [s[end], s[start]]
//     start++
//     end--
//   }
// }

// const reverseStr = (s) => {
//   reverse(s, 0, s.length - 1)
//   let start = 0
//   for (let end = 0; end <= s.length; end++) {
//     if (s[end] === ' ' || end === s.length) {
//       reverse(s, start, end - 1)
//       start = end + 1
//     }
//   }
//   return s
// }

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

const noOfOccurStr = (str) => {
  let h = {}
  let maxVal = -Infinity
  let maxKey = ''
  for (const key of str) {
    h[key] = h[key] + 1 || 1
  }

  for (const key in h) {
    if (h[key] > maxVal) {
      maxVal = h[key]
      maxKey = key
    }
  }

  console.log(maxKey, maxVal)
}
// console.log(noOfOccurStr('codeswfiters'))

const permatationStr = (str, part) => {
  while (str.length !== 0 && str.indexOf(part) !== -1) {
    str = str.replace(part, '')
  }
  return str
}
// console.log(permatationStr('abcd','abw'))

const compression = (str) => {
  let n = str.length
  let index = 0
  for (let i = 0; i < n; i++) {
    let count = 0
    let ch = str[i]
    while (i < n && str[i] === ch) {
      count++
      i++
    }
    str[index++] = ch
    if (count > 1) {
      str[index++] = ch
      let toStr = count.toString()
      for (const key of toStr) {
        str[index++] = key
      }
    }
    i--
  }
  str.length = index
  console.log(str)
  return index
}

console.log(compression(['a', 'b', 'c', 'c']))
