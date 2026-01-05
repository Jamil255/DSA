const isPrime = (num) => {
  // base_case
  if (num <= 1) return false

  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false
  }
  return true
}

const countPrime = (num) => {
  let count = 0

  for (let i = 2; i < num; i++) {
    if (isPrime(i)) count++
  }
  return count
}
console.log(countPrime(500))
