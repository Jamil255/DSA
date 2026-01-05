const reverseInt = (n) => {
  let ans = 0
  while (n !== 0) {
    let digit = n % 10
    ans = ans * 10 + digit

    n = Math.floor(n / 10)
  }
  return ans
}
console.log(reverseInt(123));



const binaryToDec=(n)=>parseInt(n,2)
// console.log(binaryToDec("111"))

const decimalToBinary = (n) => n.toString(2)
// console.log(decimalToBinary(7));
