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


