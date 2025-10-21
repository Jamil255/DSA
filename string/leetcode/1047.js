const str1047 = (str) => {
    let stack = []
    for (const char of str) {
        console.log(char,'----------');
        stack[stack.length-1]===char?stack.pop():stack.push(char)
        
    }
    return stack.join('')
}
console.log(str1047('zxxyy'))