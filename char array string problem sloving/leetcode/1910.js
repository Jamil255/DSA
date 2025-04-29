const subStr = (str, part) => {
  while (str.length !== 0 && str.indexOf(part) !== -1) {
    str = str.replace(part, ' ')
  }
  return str
}

console.log(subStr('abcbd',"abc"))
