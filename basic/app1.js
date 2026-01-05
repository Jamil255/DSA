// array collection of data
// unstructured data

// var a = ['12', 1, undefined, null, true, {}]
// a[10] = 'hello world'
// console.log(a[1]);

// console.log(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7])

// var a = ['jamil', 'waqar', 'aniba', [21, 23, 4], [24, 25]   ]

// console.log(a[4][1], a[3][2], a[3][1]);

// console.log()

// console.log(a[3][1]);

var a = [
  'jamil',
  'waqar',
  'aniba',
  [1, 2, 3, ['male', 'female', 'other', ['helloF']], true],
  [24, 25],
]
// console.log(a[3][3][3][0])

// method =>function action perform

// push()
// pop()

// pop => remove last  index ,element from array

// var b = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log('before pop', b)
// b.pop()
// console.log('after pop', b)

// push =>add value last index

// var b = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log('before push', b)
// b.push(10)
// console.log('after push', b)

// slice => copy in array
var userInfo = ['jamil', 'afzal', 21, 'cse', 'male']
var copyUserInfo = userInfo.slice(0, 3)
// console.log(copyUserInfo)
// console.log(userInfo)

// slice(index,length)

// splice => remove and add element in array

// splice(index ,deleteCount,addvalue)

var cities = ['karachi', 'multan', 'japan', 'london']
console.log('before splice ', cities)
cities.splice(2,0,'lahore','islamabad')
console.log('after splice', cities)
