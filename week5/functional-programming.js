// map, filter, reduce, find, findIndex, some, every

const nums = [1, 2, 3, 4, 5]
//[1, 4, 9, 16, 25]

// long way
const newArr = []
for(let i = 0; i < nums.length ;i++){
    newArr.push(nums[i] * nums[i])
}

console.log(newArr)

// shorter way using map
const numsSquared = nums.map((item) =>  item * item)

// Filter
const evens = nums.filter((item) => item % 2 == 0)

console.log(numsSquared)
console.log(evens)


// long way
let total = 0
for (const num of nums){
    console.log(`${num} ${total}`)
    total = total + num
}
console.log(total)

// Shorter way
const totalValue = nums.reduce((acc, curr) =>  acc * curr, 1)

console.log(totalValue)

let three = nums.find((item) => item > 3)
console.log(three)
let indexOfThree = nums.findIndex((item) => item ==3)
console.log(indexOfThree)

console.log(nums.every((num) => num > 0))

const now = new Date ()
const year = now.getFullYear()
const month = now.getMonth() + 1
const date = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes()


console.log(now.getFullYear())
console.log(now.getMonth() + 1)
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(`${year}/${month}/${date}`)
console.log(`${date}/${month}/${year}`)
console.log(`${date}/${month}/${year} ${hours}:${minutes}`)





