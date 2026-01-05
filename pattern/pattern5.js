let n = prompt('enter a number')
let row = 1
while (row <= n) {
  // space

  let space = row - 1
  let line = ''
  let k = 0

  while (k <= space) {
    line += ' '
    k++
  }

  // numbering

  let col = row
  while (col <= n) {
    line += col + ' '
    col++
  }
  console.log(line)
  row++
}
