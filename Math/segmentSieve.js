const segmentSieve = (n) => {
  let prime = new Array(n).fill(true)
  for (let i = 2; i * i < n; i++) {
    if (prime[i]) {
      for (let p = 2 * i; p < n; p += i) {
        prime[p] = false
      }
    }
  }

  for (let i = 2; i < n; i++) {
    if (prime[i]) {
      console.log(i)
    }
  }
}
console.log(segmentSieve(100))
