const strReverse = (str) => {
  let start = 0
  let strSplit = str.split('')
  let end = strSplit.length - 1
  while (start <= end) {
    ;[strSplit[start], strSplit[end]] = [strSplit[end], strSplit[start]]
    start++
    end--
  }
  return strSplit.join('')
}

// console.log(strReverse('jamil'));

const arrayReverse = (array) => {
  let start = 0
  let end = array.length - 1
  while (start < end) {
    ;[array[start], array[end]] = [array[end], array[start]]
    start++
    end--
  }
  return array
}

// console.log(arrayReverse([1,2,3,4,5,6]));

const findFrequency = (str) => {
  let h = {}
  for (const a of str) {
    h[a] = h[a] + 1 || 1
  }
  return h
}
// console.log(findFrequency('hello'));

const findUnique = (array) => {
  let h = {}
  let temp = []
  for (const a of array) {
    h[a] = h[a] + 1 || 1
  }
  for (let key in h) {
    if (h[key] <= 1) {
      temp.push(Number(key))
    }
  }
  return temp
}
console.log(findUnique([1, 2, 3, 4, 4, 3]))
