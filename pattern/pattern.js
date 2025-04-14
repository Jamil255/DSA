let n = prompt('enter a number')
// let row = 1
// while (row <== n) {
//   let col = 1
//   let output = ''
//   while (col <== row) {
//     output += '*'
//     col++
//   }
//   console.log(output)
//   row++
// }

// let row = 1
// while (row <== n) {
//   let col = 1

//   while (col <== row) {
//     console.log(row)
//     col++
//   }

//   row++
// }

// let i = 1
// while (i  <== 5) {
//     let j = 1
//     while (j <== i) {
//         console.log( i)
//         j++
//     }
//     i++
//  }

// let i = 1
// while (i <== n) {
//     let j = 1
//     while (j <== i) {
//         console.log(i)
//         j++

//     }
// i++
// }

// let row = 1
// while (row <== n) {
//   let col = 1

//   while (col <== row) {
//     col++
//   }
//   row++
// }
// let count = 1

// while (row <== n) {
//   let col = 1
//   let line = ''
//   while (col <== row) {
//     line += count + ''
//     count++
//     col++
//   }
//   console.log(line.trim())
//   row++
// }

// let row = 1
// while (row <== n) {
//   let value
//   value = row
//   let col = 1
//   while (col <== row) {
//     console.log(value)
//     value = value + 1

//     col++
//   }

//   row++
// }

// Total number of rows
// let row = 1;

// while (row <== n) {
//   let value; // Starting number for each row

//   // Determine starting value based on row number
//   if (row <== 3) {
//     value = row;
//   } else {
//     value = 2 * row - 3; // Formula for rows 4 and 5
//   }

//   let col = 1;
//   const columns = row <== 3 ? row : 3; // Number of columns per row

//   while (col <== columns) {
// console.log(value);
//       value++;
//     col++;
//   }
//   console.log(); // Move to next line
//   row++;
// }
// let row = 0
// while (row <== 4) {
//   let value = row
//   let col = 0
//   while (col <== row) {
//     console.log(value)
//     value++
//     col++
//   }
//   row++
// }

// let row = 0
// while (row <= n) {
//   let cols = 0
//   let input = ''
//   while (cols <== row) {
//     input += row - cols + 1 + ''
//     cols++
//   }
//   row++
//   console.log(input)
// }

// let row = 0
// while (row <== n) {
//   let cols = 0
//   let output = ''
//   while (cols <== row) {
//     output += row - cols + 1 + ''
//     cols++
//   }

//   console.log(output)
//   row++
// }

// let a = 's'
// console.log(a)

// let row = 0;

// while (row <= n) {
//   let line = ""; // Create a new string for each row
//   let col = 0;

//   while (col <= n) {
//     // Convert ASCII value to character
//     line += String.fromCharCode('A'.charCodeAt(0) + row);
//     col++;
//   }

//   console.log(line);
//   row++;
// }

// let row = 0
// while (row <== n) {
//   let line = ''
//   let col = 1
//   while (col <== n) {
//     line += String.fromCharCode('A'.charCodeAt(0) + row)
//     col++
//   }
//   console.log(line)
//   row++
// }

// let count = 1
// let row = 1
// while (row <= n) {
//   let col = 1
//   let input = ''

//   while (col <= n) {
//     input += String.fromCharCode(64 + count) + ' '

//     count++
//     col++
//   }
//   console.log(input)
//   row++
// }
// let n = 3; // number of rows (and columns)
// let row = 0;

// while (row < n) {
//   let col = 0;
//   let response = ""; // Initialize response as an empty string

//   // For each row, the first letter should be:
//   // 'A' + (2 * row)
//   // For row 0: 'A' (65)
//   // For row 1: 'A' + 2 = 'C' (67)
//   // For row 2: 'A' + 4 = 'E' (69)
//   while (col < n) {
//     // For each column, add the column offset to the starting letter of the row.
//     let ch = String.fromCharCode(65 + 1 * row + col);
//     response += ch;
//     col++;
//   }

//   console.log(response);
//   row++;
// }

// let row = 1
// while (row <= n) {
//   let col = 1
//   let line = ''
//   while (col <= row) {
//     line += String.fromCharCode('A'.charCodeAt(0) + row - 1)

//     col++
//   }
//   console.log(line)
//   row++
// }


