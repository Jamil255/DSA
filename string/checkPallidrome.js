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
console.log(isPallidrome('A man, a plan, a canal: Panama'))
