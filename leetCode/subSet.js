const subSetFind = (array1, array2) => {
  let set1 = new Set(array1)
  let set2 = new Set(array2)
  let interSection = [...set1].filter((item) => set2.has(item))
//   let union = [...new Set([...set1, ...set2])]
  return [interSection, union]
}

console.log(subSetFind([1, 2, 3, 4], [4, 5]))
