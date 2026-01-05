const linearSearch = (array, key) => {
  if (array.length <= 1 || array.length <= 0) {
    return array[0] || 'array will be empty'
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] == key) {
      return 1
    }
  }
  return 0
}

// console.log(linearSearch([],99))

let num = 12
let num1 = 30
let swap
