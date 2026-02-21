// const userInfo = {
//     userName : "aaxe",
//     userEmail : "abc@gmail.com",
//     getInfo : function(){
//         // console.log(`name : ${this.userName}, email : ${this.userEmail}`)
//         console.log(this)
//     }   
// }
// userInfo.getInfo()

// function CreateUser(username, email){
//     this.username = username
//     this.email = email

//     this.getInfo = function(){
//         console.log(`name : ${this.username}, email : ${this.email}`)
//     }
// }

// const userOne = new CreateUser("aaxe", "abc@gmail.com")

// console.log(userOne.getInfo())
// console.log(userOne.constructor)
// console.log(userOne instanceof CreateUser)

function CreateUser(username, email){
    this.username = username
    this.email = email
    return this
}

const userOne = CreateUser("aaxe", "abc@gmail.com")
console.log(userOne instanceof CreateUser)