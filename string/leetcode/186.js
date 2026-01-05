const reverse = (s, start, end) => {
  while (start < end) {
    ;[s[start], s[end]] = [s[end], s[start]]
    start++
    end--
  }
}

const reverseWordII = (s) => {
  // Step 1: Reverse the entire array
  reverse(s, 0, s.length - 1)

  // Step 2: Reverse each word individually
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
  reverseWordII([
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
