const subSetFind = (array1, array2) => {
  let set1 = new Set(array1)
  let set2 = new Set(array2)
  let interSection = [...set1].filter((item) => set2.has(item))
  //   let union = [...new Set([...set1, ...set2])]
  return [interSection, union]
}

// console.log(subSetFind([1, 2, 3, 4], [4, 5]))

const findSubSet = (array1, array2) => {
  let temp = []
  let i = 0
  let j = 0
  while (i < array1.length && j < array2.length) {
    if (array1[i] == array2[j]) {
      temp.push(array1[i])
      i++
      j++
    } else if (array1[i] < array2[j]) {
      i++
    } else {
      j++
    }
  }
  return temp
}

console.log(findSubSet([1,2,3],[3,4]));