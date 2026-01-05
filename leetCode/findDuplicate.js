const findDuplicate287 = (array) => {
  let ans = 0

  for (let i = 0; i < array.length; i++) {
    ans = ans ^ array[i]
  }
  for (let i = 1; i < array.length; i++) {
    ans = ans ^ i
  }
  return ans
}

// console.log(findDuplicate287([1,2,3,4,2]));

const findDuplicate442 = (array) => {
  let h = {}
  let repeated = []
  for (let a of array) {
    h[a] = h[a] + 1 || 1
  }

  for (let b in h) {
    if (h[b] > 1) {
      repeated.push(Number(b))
    }
  }
  return repeated
}

console.log(findDuplicate442([1,2,3,2,1,4]));