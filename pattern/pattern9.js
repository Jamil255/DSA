let n = prompt('enter a number')
function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let str = ''

    // Print left numbers
    for (let j = 1; j <= n - i; j++) {
      str += j
    }

    // Print stars
    for (let j = 0; j < i * 2; j++) {
      str += '*'
    }

    // Print right numbers
    for (let j = n - i; j >= 1; j--) {
      str += j
    }

    console.log(str)
  }
}

// Call the function with n = 5
printPattern(5)

// let row = n
// while (row >= 1) {
//   let col = 1
//   let line = ''
//   while (col <= row) {
//     line += col + ''
//     col++
//     }
//     let p1=
//   console.log(line)
//   row--
// }
