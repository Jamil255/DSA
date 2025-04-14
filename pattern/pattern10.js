const findPattern = (n) => {
  for (let i = 0; i < n; i++) {
    let line = ''
    // left side print
    for (let j = 1; j <= n - i; j++) {
      line += j
    }

    // star print
    for (let j = 0; j < i * 2; j++) {
      line += '*'
    }

    // right side print
    for (let j = n - i; j >= 1; j--) {
      line += j
    }
    console.log(line)
  }
}

findPattern(5)
