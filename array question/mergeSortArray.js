const mergeSortArray = (arr1, arr2) => {
  let tempArr = []
  let k = 0
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      tempArr[k++] = arr1[i++]
    } else {
      tempArr[k++] = arr2[j++]
    }
  }
  while (i < arr1.length) {
    tempArr[k++] = arr1[i++]
  }
  while (j < arr2.length) {
    tempArr[k++] = arr2[j++]
  }

  return tempArr
}

  
