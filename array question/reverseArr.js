const reverseArr = (array) => {
    // using 2pointer apporach
    let start = 0
    let end = array.length - 1
    while (start <= end) {
        [array[start], array[end]] = [array[end], array[start]]
        start++
        end--
    }
    return array
}
// console.log(reverseArr([1,2,3,4,5,6,7,8]))

// const traverseArray = (array, start+1) => {
//     let end = array.length - 1
//     while (start < end) {
//         [array[start], array[end]] = [array[end], array[start]]
//         start++
//         end--
//     }
//     return array
// }
// console.log(traverseArray([1, 2, 3, 4, 5, 6], 2))


const traverseArray = (array, start) => {
    let left = start + 1
    let right = array.length - 1
    while (left < right) {
        [array[left], array[right]] = [array[right], array[left]]
        left++
        right--
    }
    return array
}
console.log(traverseArray([1,2,3,4,5,6],2))


