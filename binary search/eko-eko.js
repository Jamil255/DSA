const isPossible = (trees, mid, meter) => {
  let collected = 0
  for (let tree of trees) {
    if (tree > mid) {
      collected += tree - mid
    }
  }
  return collected >= meter
}
const ekoEko = (trees, meter) => {
  let start = 0
  let ans = -1
  let end = Math.max(...trees)
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (isPossible(trees, mid, meter)) {
      ans = mid
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return ans
}
console.log(ekoEko([20, 15, 10, 17], 7))
