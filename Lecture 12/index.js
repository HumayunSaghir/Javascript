// let amount = 10000
// console.log(amount.toString().length)

// let amount = 1000
// console.log(amount.toFixed(2))

// let value = 1243
// console.log(value.toPrecision(4))

// let amount = 100000
// console.log(amount.toLocaleString('en-IN'))

// let min = Number.MIN_VALUE
// console.log(min)

// let max = Number.MAX_VALUE
// console.log(max)

// console.log(Math.abs(-2))
// console.log(Math.round(3.54))
// console.log(Math.ceil(3.4))
// console.log(Math.floor(3.9))
// console.log(Math.sqrt(25))
// console.log(Math.pow(10, 2))
// console.log(Math.min(1, 2, 3, 4, 5))
// console.log(Math.max(1, 2, 3, 4, 5))

let step = 1

while(true){
    let min = 1
    let max = 10
    let value = Math.floor(Math.random() * (max - min + 1) + min)

    console.log(step++)

    if(value === 10){
        console.log("10 found")
        break
    }
}