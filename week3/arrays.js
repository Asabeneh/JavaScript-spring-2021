let nums = [1, 2, 3]

// accessing array items
console.log(nums)
console.log(nums[0])
console.log(nums[1])
console.log(nums[2])
console.log(nums.length)

let lastIndex = nums.length - 1
console.log(nums[lastIndex])

// modifiy items in the array
// nums[0] = -5
// console.log(nums)
// nums[1] = 'Potato'
// console.log(nums)
// nums[lastIndex] = 300
// console.log(nums)

console.log(nums)

// push, pop, shift, unshift
// nums.push(4)
// console.log(nums)
// nums.unshift(-10)
// console.log(nums)
// nums.pop()
// console.log(nums)
// nums.shift()
// console.log(nums)
// push, unshif, pop, shift, slice

// arr.splice(index, number, item to be added)

// splice: three index, howmany, item to be added

// nums.splice(0)
// console.log(nums)

// slice and splice

console.log(nums.slice())
console.log(nums.slice(0,2))
let nums_copy = nums.slice()

// String dataty

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let fullName = firstName + ' ' + lastName
let country = 'Finland'
let city = 'Helsinki'
let age = 250

// Asabeneh Yetayeh lives in Helsinki, Finland. He is 250 years old.

console.log(fullName + ' lives in ' + city + ', ' + country + '.' + ' He is ' + age + ' years old.')

// String interpolation

console.log(`${fullName} lives in ${city}, ${country}. He is ${age} years old. `)








