const pivetOfIndex = (array) => {
  let leftsum = 0
  let sum = 0
  array.array.forEach((element) => (sum += element))

  for (let i = 0; i < array.length; i++) {
    let rightSum = sum - array[i] - leftsum
    if (leftsum == rightSum) return i
    leftsum += array[i]
  }
}
console.log(pivetOfIndex([1,7,3,6,5,6]));
