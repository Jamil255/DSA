const arraySort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) minIndex = j
    }
    ;[array[i], array[minIndex]] = [array[minIndex], array[i]]
  }
  return array
}
// console.log(arraySort([5, 4, 3, 2, 1]))

// https://drive.google.com/file/d/1WtwEvIvqKOUR0Ys0S_SLPjfWzcT-W4_X/view?usp=sharing

// what is stable and unstable algorithm

// stable algorithm => mbl
//  merger sort
//  bubble sort
//  insertion sort

//  unstable algorithm(HQS)
//  heap sort
//  quick sort
//  selection sort

// for example[1, 2, 3, 4, 5, 2] = [1, 2, @2, 3, 4, 5] stable sort

// [1,2,3,4,1]=[@1,1,2,3,4] unstable  sort break the order

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) minIndex = j
    }
    ;[array[i], array[minIndex]] = [array[minIndex], array[i]]
    }
    return array
}
// console.log(selectionSort([9,2,3,1,6,5,7,8]))
