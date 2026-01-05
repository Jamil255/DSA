let n = +prompt('enter your number')
// console.log(typeof n);
// let row = 1
// let count = 1
// while (row <= n) {
//   let col = 1
//   let line = ''
//   while (col <= row) {
//     line += String.fromCharCode(64 + count)
//     count++
//     col++
//   }
//   console.log(line)
//   row++
// }
// let row = 1

// while (row <= n) {
//   let line = ''
//   let col = 1
//   while (col <= row) {
//     line += String.fromCharCode(65 + row + col - 2)

//     col++
//   }
//   console.log(line)
//   row++
// }

// let row = 1
// let count = 1
// while (row <= n) {
//   let col = 1
//   let line = ''
//   while (col <= row) {
//     line += String.fromCharCode(65 + n - row + col - 1) + ' '

//     col++
//   }

//   console.log(line)
//   row++
// }

// let row = 1
// while (row <= n) {
//   let space = n - row
//   let line = ''
//   while (space) {
//     line += ' '
//     space--
//   }
//   let col = 1
//   while (col <= row) {
//     line += '*'
//     col++
//   }
//   console.log(line)
//   row++
// }

// let row = n
// while (row >= 1) {
//   let line = ''
//   let col = 1
//   while (col <= row) {
//     line += '*'
//     col++
//   }
//   console.log(line)
//   row--
// }

// let row = n
// while (row >= 1) {
//     let line = ''
//     let col = 1
//     while (col <= row) {
//         line += '*'
//         col++
//     }
//     console.log(line)
//     row--
// }

// let row = 1;
// while (row <= n) {
//   let line = '';

//   // Print spaces: row - 1 spaces for right alignment
//   let space = row - 1;
//   while (space > 0) {
//     line += ' ';
//     space--;
//   }

//   // Print stars: (n - row + 1) stars
//   let col = 1;
//   while (col <= n - row + 1) {
//     line += '*';
//     col++;
//   }

//   console.log(line);
//   row++;
// }
// let row = 1
// while (row <= n) {
//   let line = ''
//   let space = row - 1
//   while (space > 0) {
//     line += ' '
//     space--
//   }
//   let col = 1
//   while (col <= n - row + 1) {
//     line += '*'
//     col++
//   }
//   console.log(line)
//   row++
// }
