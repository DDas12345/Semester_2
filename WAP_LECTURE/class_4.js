// let arr = [5, 10, 'Debanshika', true, undefined, null, [1, 2, 3, 4, 5]]
// //        [0,  1,     2,          3,     4,       5,        6]
// console.log(arr)
// console.log(arr.length)
// console.log(arr[2])

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for of
// for (let value of arr) {
//     console.log(value)
// }

// let name = 'Debanshika'
// for (let n of name) {
//     console.log(n)
// }

// push, pop, unshift, shift

let num = [1, 2, 3, 4, 5]
// console.log(num)

// push
num.push(6)
console.log(num)

// pop
// num.pop()
// console.log(num)

// unshift
// num.unshift()
// console.log(num)

// shift
// num.shift()
// console.log(num)

// slice
let num_slice = num.slice(1, 4)
console.log(num_slice)

// console.log(num.includes(5))
// console.log(num.sort())

let number = [4,1,5,2,3]
console.log(number.sort((a,b)=>a-b)) // ascending
console.log(number.sort((a,b)=>b-a)) // descending

let array = [10, 20, 30];
let a = array.push(40)
console.log(a);