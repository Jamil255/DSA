const replaceStr = (str) => {

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      str += '@40'
    } else {
      str += str[i]
    }
  }
  return str
}
console.log(replaceStr('my name is jami afzal'))

