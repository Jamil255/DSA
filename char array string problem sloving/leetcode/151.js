const revereWord = (str) => {
  let cleanStr = str.trim().split(/\s+/)
  let start = 0
  let end = cleanStr.length - 1
  while (start <= end) {
    ;[cleanStr[start], cleanStr[end]] = [cleanStr[end], cleanStr[start]]
    start++
    end--
  }
  return cleanStr.join(' ')
}
// console.log(revereWord("a good   example"));
