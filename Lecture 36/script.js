// const element = document.addEventListener('click', function(e){
//     // alert("image is clicked!")
//     // console.log("image is clicked!")
//     console.log(e)
// }, false)

// const list = document.querySelector(".list")

// const owl = document.querySelector(".owl")

// list.addEventListener("click", function(e){
//     console.log("list is clicked!")
//     // e.stopPropagation()
// }, true)

// owl.addEventListener("click", function(e){
//     console.log("owl is clicked!")
//     // e.stopPropagation()
// }, false)

// const link = document.addEventListener("click", function(e){
//     e.preventDefault()
//     console.log("link is clicked!")
//     console.log(e.target.parentNode)
// })

const cow = document.querySelector(".cow")

cow.addEventListener("click", function(e){
    // console.log(cow.parentNode.removeChild(cow))
    console.log(e.target.tagName)
})