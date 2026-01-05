const reverseArray = (array) => {
let start = 0;
    let end = array?.length - 1;
    while (start <= end) {
       [array[start], array[end]] = [array[end], array[start]];
        start++;
        end--;
    }
    return array
  
    
}
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8]));