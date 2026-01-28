let student = {
    name: "Debanshika",
    age: 18,
    address: "Chhattisgarh",
}

let subjects = {
    WAP : "JS",
    DSA : "Python"
}

// let key = Object.keys(student)
// console.log(key)
// console.log(key.length)

// let value = Object.values(student)
// console.log(value)

// console.log(student)

// let keyVal = Object.entries(student)
// console.log(keyVal)

// for (let [key, value] of keyVal) {
//     console.log(key, value)
// }

// let std = [
//     {
//         name: "Debanshika",
//         age: 18,
//         address: "Chhattisgarh"
//     }, 

//     {
//         name: "John",
//         age: 20,
//         address: "Madhya Pradesh"
//     }
// ]

// console.log(std)
// console.log(std.length)

// let {name, age} = student
// console.log(name)
// console.log(age)

// let arr = [10, 20, 30, 40, 50]
// console.log(arr)
// let [a, b, c, d, e] = arr
// console.log(a)

//spread operator
// let newArr = [...arr]
// console.log(newArr)

// let updatedstudent = {
//     ...student,
//     age: 19
// }

// console.log(updatedstudent)

// let finaldata = {...student, ...subjects}
// console.log(finaldata)

let user = {
    id: 1,
    name: 'Debanshika',
    password: 'Naaginofblack@12345'
}

let {name, ...secretData} = user
