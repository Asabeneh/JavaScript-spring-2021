// function makeSquare(n) {
//     return n * n
// }

const makeSquare = (n) =>  n * n


console.log(makeSquare(2) * 2)
// 2 * 2 * 2

const makeCube = (func, n) => {
    return  func(n) * n
}

console.log(makeCube(makeSquare, 3))

const numbers = [1, 2, 3, 4,5]



numbers.forEach((item) => console.log(item * item))

const squaredNums = numbers.map((item) => {
    return  [item, item * item]
})

console.log(squaredNums)

const evens = numbers.filter((num) => num % 2 !== 0)
console.log(evens)

const total = numbers.reduce((acc, cur) => acc + cur)
console.log(total)

