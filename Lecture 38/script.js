// setTimeout(function(){
//     console.log("Hello World")
// }, 2000)

// setInterval(function(){
//     console.log("Hello World")
// }, 1000)

// function print(){
//     console.log("Hello World")
// }

// setTimeout(print, 2000)
// setInterval(print, 1000)

// const heading = document.querySelector(".heading")

// function changeHeading(element){
//     element.innerText = "web api"
//     console.log("heading has been changed!")
// }


// const headingChange = setTimeout(changeHeading, 2000, heading)

// // clearTimeout(headingChange)

// const button = document.querySelector(".stop")
// button.addEventListener("click", function(){
//     clearTimeout(headingChange)
//     console.log("heading will not be changed")
// })


// let count = 0

// function startPrinting(){
    //     console.log(count++)
    // }
    
    // let ref = undefined
    
    // start.addEventListener("click", function(){
//     ref = setInterval(startPrinting, 200)
// })

// stop.addEventListener("click", function(){
    //     clearInterval(ref)
    // })

// const start = document.querySelector(".start")
// const stop = document.querySelector(".stop")

// function generateColorCode(){
//     let code = "#"

//     let arr = ["0", "1", "2", "3", "4", "5", "6",
//         "7", "8", "9", "a", "b", "c", "d", "e", "f"
//     ]

//     const min = 0
//     const max = 15

//     for(let i = 0; i < 6; i++){
//         const randVal = Math.floor(Math.random() * (max - min + 1) + min)

//         code += arr[randVal]
//     }

//     return code
// }

// function changeColor(){
//     const code = generateColorCode()
//     document.body.style.backgroundColor = code
// }

// let ref = undefined

// start.addEventListener("click", function(){
//     ref = setInterval(changeColor, 500)
// })

// stop.addEventListener("click", function(){
//     clearTimeout(ref)
// })

const heading = document.querySelector(".heading")

window.addEventListener("keydown", function(e){
    heading.innerHTML = e.code
})