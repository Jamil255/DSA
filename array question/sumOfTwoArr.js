const sumOfTwoArray = (arr1, m, arr2, n) => {
  let i = m - 1
  let j = n - 1
  let carry = 0
  let ans = []
  while (i >= 0 && j >= 0) {
    let value1 = arr1[i]
    let value2 = arr2[j]
    let sum = value1 + value2 + carry
    carry = Math.floor(sum / 10)
    sum = Math.floor(sum % 10)
    ans.push(sum)
    j--
    i--
  }

  // first case

  while (i >= 0) {
    let sum = arr1[i] + carry
    carry = Math.floor(sum / 10)
    sum = Math.floor(sum % 10)
    ans.push(sum)
    i--
  }

  // second case

  while (j >= 0) {
    let sum = arr2[j] + carry
    carry = Math.floor(sum / 10)
    sum = Math.floor(sum % 10)
    ans.push(sum)
    j--
  }

  // third case

  while (carry !== 0) {
    let sum = carry
    carry = Math.floor(sum / 10)
    sum = Math.floor(sum % 10)
    ans.push(sum)
  }

  return ans.reverse()
}

console.log(sumOfTwoArray([1, 2, 3, 4], 4, [5], 1))
