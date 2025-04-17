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
// console.log(tripletOfSum([1, 2, 3, 4, 5], 12))

const arraySort = (a) => {
    let low = 0
    let mid = 0
    let high = a.length - 1
    
    while (mid <= high) {
        if (a[mid] == 1) {
        mid++
        } else if (a[mid] == 0) {
            [a[low], a[mid]] = [a[mid], a[low]]
            mid++
            low++
        } else if (a[mid] == 2) {
            [a[mid], a[high]] = [a[high], a[mid]]
            high--
    }
    }
    return a
}
console.log(arraySort([1,2,1,1,0,0,1,2]));
