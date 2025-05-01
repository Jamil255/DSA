const frequency = (str) => {
  let h = {}
  for (const key of str) {
    h[key] = h[key] + 1 || 1
  }
  let maxkey = ''
  let maxVal = -Infinity
  for (const key in h) {
    if (h[key] > maxVal) {
      maxVal = h[key]
      maxkey = key
    }
  }
  return [maxkey, maxVal]
}

console.log(frequency('jamilafzal'))
