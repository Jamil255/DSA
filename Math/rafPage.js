// count of prime number

const countPrime = (n) => {
  let count = 0
  let prime = new Array(n).fill(true)
  prime[0] = prime[1] = false
  for (let i = 2; i < n; i++) {
    if (prime[i]) {
      count++
      for (let j = 2 * i; j < n; j += i) {
        prime[j] = false
      }
    }
  }
  return count
}

console.log(countPrime(100000))

const printPrimeNbr = (n) => {
  let prime = new Array(n).fill(true)
  for (let i = 2; i * i < n; i++) {
    if (prime[i]) {
      for (let j = 2 * i; j < n; j += i) {
        prime[j] = false
      }
    }
  }
  for (let i = 2; i < n; i++) {
    if (prime[i]) {
      console.log(i)
    }
  }
}

// console.log(printPrimeNbr(10000))