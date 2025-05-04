const isPossible = (num) => {
  if (num <= 1) return false
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false
  }
  return true
}

const isPrime = (num) => {
  let count = 0
  for (let i = 2; i < num; i++) {
    if (isPossible(i)) count++
  }
  return count
}
console.log(isPrime(500000))
