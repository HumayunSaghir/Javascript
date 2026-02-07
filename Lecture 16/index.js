// basics of object
let userData = {
    userName : "aaxe3296",
    userAge : 23,
    paidStatus : true,
    activeDays : ["Monday", "Tuesday", "Wednesday"]
}

userData = {
    userName : "aaxe8110",
}

// console.log(typeof userData)
// console.log(userData.userName)
// console.log(userData["userName"]) // this way is much better way
// Object.freeze(userData)
// userData.userName = "aaxe"
// console.log(userData)

// Adding symbol to an object
// const symbol = Symbol("$hroud3296")

// const myObject = {
//     [symbol] : "$hroud3296"
// }

// console.log(myObject)
// userData.greetings = function(){
//     console.log(`Hello ${this.userAge}! How are you?`)
// }

// console.log(userData.greetings())
// userData.activeHours = 12
// console.log(typeof (Object.keys(userData))[0])