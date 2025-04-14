const dabangPattern = (n) => {
  for (let i = 0; i < n; i++) {
    let line = ''
    for (let j = 1; j <= n - i; j++) {
      line += j
    }
    for (let j = 0; j < i * 2; j++) {
      line += '*'
    }

    for (let j = n - i; j >= 1; j--) {
      line += j
    }
    console.log(line)
  }
}
dabangPattern(5)
