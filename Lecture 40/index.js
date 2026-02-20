// creating a promise
// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("async task has been completed!")
//         resolve()
//     }, 2000)
// })
// promiseOne.then(() => console.log("promise has been consumed"))

// creating promise without holding into a variable
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("async task has been completed!")
//         resolve()
//     }, 2000)
// })
// .then(() => console.log("promise has been consumed!"))

// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("user info obtained!")
//         resolve({
//             userName : "aaxe",
//             userEmail : "abc@gmail.com",
//             paymentStatus : true,
//         })
//     }, 2000)
// })
// promiseOne.then((data) => console.log(data))

// const promiseOne = new Promise((resolve, reject) => {
//     const failed = false;

//     // incase promise is not failed
//     if(!failed){
//         resolve({
//             userName : "aaxe",
//             userEmail : "abc@gmail.com",
//             status : true,
//         })
//     }

//     // incase promise is failed
//     if(failed){
//         reject("Promise has been failed!")
//     }
// })
// .then((user) => user.userName) //it will return username
// .then((userName) => console.log(`user name is ${userName}`))
// .catch((err) => console.log(`error in promise completion, ${err}`))
// .finally(() => console.log("promise is either failed or resolved"))

// const promiseTwo = new Promise((resolve, reject) => {
//     const failed = true;

//     // incase promise is not failed
//     if(!failed){
//         setTimeout(() => {
//             // sending the result back!
//             resolve({
//                 userName : "aaxe",
//                 userEmail : "abc@gmail.com",
//                 status : true,
//             })
//         }, 2000)
//     }

//     // incase promise is failed
//     if(failed){
//         reject("Promise has been failed!")
//     }
// })
// .then((user) => user) //it will return user
// .catch((err) => console.log(`error in promise completion, ${err}`))
// .finally(() => console.log("promise is either failed or resolved"))

// async function consumePromiseTwo(){
//     try{
//         const response = await promiseTwo
//         console.log(response)
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// consumePromiseTwo()

// fetch("https://api.github.com/users/humayunsaghir")
// .then((response) => response.json())
// .then((data) => console.log(data.bio))
// .catch((err) => console.log(err))
// .finally(() => console.log("promise is either failed or resolved!"))

async function getGithubData(){
    const response = await fetch("https://api.github.com/users/humayunsaghir")

    console.log(response)
}

getGithubData()