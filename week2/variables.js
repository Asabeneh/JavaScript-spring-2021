// What is a variable
// variable is a storage that stores data the may be use and 

// var, let, const
// we can use _ and $ with our variable names
// camelCase

// Arithmetic Operations: +, -, *, /, %, **
// =
// comparisons: >, <, >=, <=, ==, ===, !=, !===

let a = 3
let b = 2

let sum = a + b
let diff = a - b
let prod = a * b
let div = a / b
let remainder = a % b
let exponential = a ** b


let sentence = "I just love JavaScript. Because with JavaScript, i can do almost anything."

let currentYear = 2021
let firstName = 'John'
let lastName = 'Doe'
let space = ' '
let fullName = firstName + space +  lastName
console.log('The sum is ', sum)
console.log('The difference', diff)
console.log('The product is ', prod)
console.log('The div', div)
console.log('The exponential', exponential)
console.log('The full name is ', fullName)


// Guys, find the area of a cirle
// area = pi * r * r

const PI  = Math.PI
let r = 10
let area1 = PI * r * r

console.log(area1)


// calculate the area of a rectangle with length 10 and width 20
// perimeter
let length = 20
let width = 10
let areaRect = length * width
let perimeter = 2 * (length + width)

console.log(areaRect)
console.log(perimeter)

// caculate the weight of an object on planet Earth, gravity is 9.81 and mass is 75 kg

const gravity = 9.81
let mass = 75
let weight = mass * gravity

console.log('The weight of the body on planet Earth is  ', weight)


// value that can be true or false

console.log(3 > 2)
console.log(3 >= 2)
console.log(2 < 3)
console.log(2 <= 3)
console.log(2 == 3)

console.log(2 == 2)
console.log(2 == '2')
console.log(2 === '2')
console.log(2 === 2)

// Data types: Number, String, Boolean, null, undefined, Object

// Number: Int, float
let num1 = 3
let num2 = 4
let pi = 3.14

// bultin function

console.log(Math.round(pi))



let randValue = Math.floor(Math.random() * 11)

console.log(randValue)

console.log(Math.sqrt(4))
console.log(Math.sqrt(9))
console.log(Math.sqrt(2))

let now = new Date()
console.log(now.getFullYear())

console.log(now.getMonth())
console.log(now.getHours())
console.log(now.getMinutes())

// Boolean data types: true or false

// what punctions marks do we use to make a string: single quote, double quote, back stick

let letter = 'a'
let para = ` I love JavaScript `

console.log(letter.length)
console.log(para.length)

console.log(letter.toLowerCase())
console.log(letter.toUpperCase())
console.log(para.toUpperCase())
console.log(para.includes('Love'))
console.log(para.endsWith('Script'))
console.log(para.split(' '))
console.log(para)
console.log(para.trim())


let value = null

let country
console.log(country)

country = 'Finland'

console.log(country)

let city = undefined

// array, functions, objects



typeof(10)