const peakElementOfMountain = (array) => {
  let start = 0
  let end = array.length - 1
  let mid = Math.floor((start + end) / 2)

  while (start < end) {
    if (array[mid] < array[mid + 1]) {
      start = mid + 1
    } else {
      end = mid
    }
    mid = Math.floor((start + end) / 2)
    }
    return start
}
console.log(peakElementOfMountain([0,1,0]));    
