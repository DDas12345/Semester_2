//single object
// let obj = { age: 20, address: "Sonipat" }
// obj.name = "Debanshika";
// let allKeys = Object.keys(obj);
// for (let ele of allKeys) {
//     console.log(ele)
//     console.log(obj[ele])
// }

let users = [
    { name: 'Butch', age: 27 },
    { name: 'Juhi', age: 22 },
    { name: 'Ruhi', age: 20 },
    { name: 'James', age: 25 },
]

// for (let user of users) {
//     console.log(user);
// }

let userAbove = [];
for (let user of users){
    let currentUsername = user.name
    let currentUserage = user.age
    if(currentUserage > 18) {
        console.log(users)
    }
}