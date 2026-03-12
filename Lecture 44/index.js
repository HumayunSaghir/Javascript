// let userInfo = {
//     userName : "aaxe",
//     userAge : 22,
//     userEmail : "abc@gmail.com",
//     getInfo : function(){
//         console.log(this)
//     }
// }
// userInfo.getInfo()

// function greet(){
//     console.log(this)
// }
// greet()

// function setUsername(username){
//     this.username = username
//     return this
// }

// const userOne = new setUsername("aaxe")
// console.log(userOne.username)

function setUsername(username){
    this.username = username
}

function createUser(username, email, age){
    setUsername.call(this, username)
    this.email = email
    this.age = age
}

const userOne = new createUser("aaxe", "abc@gmail.com", 22)
console.log(userOne)
console.log(userOne)