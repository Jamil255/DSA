const tripletOfSum = (arr, target) => {
  let triplet = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] == target) {
          triplet.push([arr[i], arr[j], arr[k]])
        }
      }
    }
    }

    return  new Set(triplet)
}
console.log(tripletOfSum([1, 2, 3, 4, 5], 12))
