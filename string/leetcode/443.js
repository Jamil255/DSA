const compression = (str) => {
  let index = 0
  let n = str.length

  for (let i = 0; i < n; i++) {
    let ch = str[i]
    let count = 0
    while (i < n && str[i] == ch) {
      count++
      i++
    }
    if (count == 1) {
      str[index++] = ch
    } else {
      str[index++] = ch
      let cnt = count.toString()
      for (let j = 0; j < cnt.length; j++) {
        str[index++] = cnt[j]
      }
    }
    i--
  }
  str.length = index
  return index
}

// console.log(
//   compression(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b','a'])
// )
