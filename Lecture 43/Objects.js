// function createUser(username, age, amount){
//     this.username = username
//     this.age = age
//     this.amount = amount
// }

// const userOne = new createUser("aaxe", 23, 14000)
// console.log(userOne)

// function createUser(username, age, amount){
//     this.username = username
//     this.age = age
//     this.amount = amount
// }

// createUser.prototype.payAmount = function(){
//     this.amount = 0
// }

// const userOne = new createUser("aaxe", 23, 14000)
// userOne.payAmount()
// console.log(userOne)

// Object.prototype.learningStatus = "Humayun is good at javascript"
// const userInfo = {
//     userName : "aaxe",
// }
// console.log(userInfo.learningStatus)
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.learningStatus)

// Array.prototype.learningStatus = "Humayun is good at javascript"
// const userInfo = {
//     userName : "aaxe",
// }
// console.log(userInfo.learningStatus)
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.learningStatus)

// let person = {
//     name : undefined,
//     age : undefined,
// }

// let teacher = {
//     qualification : undefined,
//     getInfo : function(){
//         console.log(`Information Console:
//             name : ${this.name},
//             age : ${this.age},
//             qualification : ${this.qualification}`)
//     }
// }

// teacher.__proto__ = person -> older way
// Object.setPrototypeOf(teacher, person) ->newer way
// teacher.name = "ahmed"
// teacher.age = 23
// teacher.qualification = "phd"
// teacher.getInfo()

// String.prototype.trueLength = function(){
//     console.log(`true length is ${this.trim().length}`)
// }
// "             aaxe                   ".trueLength()

// const fun = () => {
//     return this
// }

// const user = fun()
// console.log(user)

// function createUser(){
//     this.username = "aaaaaaaaaaaaaaaaaaxe"
//     return this
// }

// this.age = 23

// const obj1 = createUser()
// console.log(obj1)

// const fun = () => {
//     return this
// }

// const user = fun()

// function createUser(username){
//     this.username = username
//     this.fn = () => {
//         return this
//     }
// }

// const obj1 = new createUser("aaxe")
// console.log(obj1.fn())