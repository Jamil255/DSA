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
// console.log(isPrime(500000))

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

// console.log(countPrime(1000000));
