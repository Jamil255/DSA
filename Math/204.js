const isPrime = (n) => {
  let count = 0
    let prime = new Array(n).fill(true)
     prime[0] = prime[1] = false
  for (let i = 2; i < n; i++) {
    if (prime[i]) {
      count++
      for (let j = 2 * i; j < n; j = j + i) {
        prime[j] = 0
      }
      }
      
    }
    console.log(prime)
  return count
}

console.log(isPrime(500000))
