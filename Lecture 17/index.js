// merging objects
// let obj1 = {
//     userName : "aaxe",
//     userAge : 23,
// }
// let obj2 = {
//     depName : "Computer Science",
//     batch : "Spring 2023",
// }
// let obj3 = {obj1, obj2}
// console.log(obj3)

// storing objects within objects
// let stdInfo = {
//     userName : "aaxe",
//     userAge : 23,
//     depInfo : {
//         depName : "Computer Science",
//         batch : "Spring 2023",
//     }
// }
// console.log(stdInfo.depInfo?.depName)

// assigning objects
// let obj1 = {
//     userName : "aaxe",
//     userAge : 23,
// }
// let obj2 = {
//     depName : "Computer Science",
//     batch : "Spring 2023",
// }
// let obj3 = {
//     paidStatus : true,
// }
// let obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4)

let obj1 = {
    userName : "aaxe",
    userAge : 23,
}

let obj2 = {
    depName : "Computer Science",
    batch : "Spring 2023",
}

let obj3 = {...obj1, ...obj2}
// console.log(Object.entries(obj3))
// console.log(obj3.hasOwnProperty("userName"))