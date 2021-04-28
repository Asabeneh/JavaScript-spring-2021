
/// function declaration
// function doSomeThing () {
//    return 'I am teaching'
// }

// expression function
// const doSomeThing = function () {
//    return 'I am teaching'
// }

// Arrow function
const doSomeThing =  ()  =>  'I am teaching'
console.log(doSomeThing())


// function addTwoNumber(a, b){
//     let sum = a  + b
//     return sum
// }

// const  addTwoNumber = function(a, b){
//     let sum = a  + b
//     return sum
// }

const  addTwoNumber = (a, b) =>  a  + b

console.log(addTwoNumber(1, 4))
console.log(addTwoNumber(1, 99))
console.log(addTwoNumber(10, 90))

// makeSquare(n), write this fucntin in three way
// function makeSquare (n) {
//     return  n ** 2

// }
// const makeSquare = function (n) {
//     return  n ** 2
// }
const makeSquare = (n)  =>  n ** 2

console.log(makeSquare(10))
console.log(makeSquare(9))
