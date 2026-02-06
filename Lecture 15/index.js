// let arr1 = ["toyota", "honda", "suzuki"]
// let arr2 = ["iphone", "samsung", "oppo"]
// arr1.push(arr2)
// console.log(arr1)

// let arr1 = ["toyota", "honda", "suzuki"]
// let arr2 = ["iphone", "samsung", "oppo"]
// let arr3 = arr1.concat(arr2)
// console.log(arr3.length)

// let arr1 = ["toyota", "honda", "suzuki"]
// let arr2 = ["iphone", "samsung", "oppo"]
// let arr3 = [...arr1, ...arr2]
// console.log(arr3)

// let arr = [1, 2, [true, ["hello", false, ['a', 'b']]]]
// // console.log(arr.length)
// console.log(arr.flat(Infinity).length)

// let nums = [1, 2, 3, 4, 5]
// let uni = "comsats"
// console.log(Array.isArray(nums))

// let uni = "comsats"
// let arr = Array.from(uni)
// console.log(arr)

// let userInfo = {
//     userName : "aaxe",
//     userAge : 23,
// }

// let arr = Array.from(Object.keys(userInfo))
// console.log(arr)
// console.log(Object.keys(userInfo).length)

// let num1 = 10
// let num2 = 20
// let num3 = 30

// let arr = Array.of(num1, num2, num3)
// console.log(arr)

let num = 123456
let arr = Array.from(String(num), Number)
console.log(arr)