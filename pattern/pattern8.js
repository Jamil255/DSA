let n = prompt('enter a number')
let row = 1
while (row <= n) {
  let line = ''
  let space = n - row
  while (space) {
    line += ' '
    space--
  }

  let col = 1
  while (col <= row) {
    line += col
    col++
  }

  let k = row - 1
  while (k) {
    line += k
    k--
  }
  console.log(line)
  row++
}
