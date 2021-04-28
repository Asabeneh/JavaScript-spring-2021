// conditions => descion making
// some condition => time

function checkNumber (n) {
    let result = ''
    if(n > 0) {
        result = 'positive'
    } else if ( n === 0) {
        result = 'zero'
    } else if ( n < 0) {
        result = 'negative'
    }
    else {
    result = 'Not a number'
    }
    return result
}

function getWeatherCondition(weather) {
    weather =  weather.toLowerCase()
    let result = ''
if(weather === 'rainy') result = 'Take your umbrella'
else if (weather === 'cloudy') result = 'It is just cloudy and a high probability of rain'
else if (weather === 'windy') result = 'It is very windy, take care of yourself you taken'
else if (weather === 'snowy') result = 'It is just full of snow'
else if (weather ==='sunny') result = 'It is just a shiny day go out freely. Enjoy your day!'

else {
    result = 'It is just a shiny day go out freely. Enjoy your day!'
}
return result
}

// console.log(checkNumber(1))
// console.log(checkNumber(-1))
// console.log(checkNumber(0))

// console.log(getWeatherCondition('suNnY'))
// console.log(getWeatherCondition('snowy'))


function getWeatherCondition_2 (weather) {
    weather = weather. toLowerCase()
switch(weather) {
    case 'showery':
    case 'dripping':
    case 'rainy':
        return 'Take your umbrella'
    case 'sunny':
        return 'It is just a shiny day go out freely. Enjoy your day!'
    case 'snowy':
        return 'It is just full of snow'
    case 'windy':
        return 'It is very windy, take care of yourself you taken'
    case 'cloudy':
        return  'It is just cloudy and a high probability of rain'
    default:
        return 'It is just a shiny day go out freely. Enjoy your day!'
}
}

console.log(getWeatherCondition_2('dripping'))
console.log(getWeatherCondition_2('showery'))

// Ternary => x, y , z

let name = 'Eyob'

let value = name.length > 5  ? 'Long Name': 'Short Name'
console.log(value)

// Loops, functions

function generateEvenNums (n) {
const evens = []
for(let i = 0;  i <= n; i = i + 2){
evens.push(i)
}
return evens
}

console.log(generateEvenNums(1000))

 for(let i = 5;  i >= 0; i--){
  console.log(i)
}
// [2, 5, 6, 7, 0] => [0, 7, 6, 5, 2]
function reverseArray(arr){

let newArr = []
for(let i = arr.length-1;  i >= 0; i--){
  newArr.push(arr[i])
}
return newArr

}

console.log(reverseArray([2, 5, 6, 7, 0]))


// who does not know how to declare ? 

/*
function printFullName(firstName, lasteName){
    return firstName + ' ' + lasteName
}
*/
/*
// function expression
const printFullName = function (firstName, lasteName){
    return firstName + ' ' + lasteName
}
*/
/*
const printFullName = (firstName, lasteName) => {
    return firstName + ' ' + lasteName
}
*/
const printFullName = (firstName, lasteName) => firstName + ' ' + lasteName

console.log(printFullName('Asab','Yeta'))
console.log(printFullName('Donald J.', 'Trump'))


// calculate the weight of an object on any planet ? name of the function calculateWeight, it returns the weight of the object as string(eg 700.55 N), gravity  of Earth = 9.81, weight = mass * gravity


const calculateWeight =  (mass, gravity = 9.81) => {
    let w = mass * gravity
    return `${w.toFixed(1)} N`
}

console.log(calculateWeight(75.45))
console.log(calculateWeight(75.45, 1.62))

// calculate the area of a circle. The area of circle can be calculated as area = pi * r * r, calculateAreaOfCircle, it returns a string 180 m2

const calAreaOfCircle = (radius) => {
    area = Math.PI * radius ** 2
    return `The area of the circle with ${radius} m radius is ${area.toFixed(2)} m2.`
}

console.log(calAreaOfCircle(100))

// Global Objects

console.log(Math.sqrt(4))
console.log(Math.sqrt(2))
console.log(Math.random()) // 0 to 0.999999
console.log(Math.round(9.81))
console.log(Math.floor(9.81))
console.log(Math.ceil(3.14))

// generate array of 7 random numbers ? 

const generateSevenNums = (n = 7) => {
    const nums = []
    for (let i = 0; i < n; i++) nums.push(Math.floor(Math.random() * 11))
    return nums
}

console.log(generateSevenNums(25))

/* Objects */


const person = {
    firstName:'Asabeneh',
    lastName:'Yetayeh',
    country : 'Finland',
    city : 'Helsinki',
    age : 250,
    skills : ['HTML','CSS','JavaScript'],
    favoriteFoods : ['Tuna','Salmon','Potatoes','Mango','Avocado'],
    getPersonInfo:function(job){
        return `${this.firstName} ${this.lastName} lives in ${this.country}, ${this.city}. He is a ${job}`
    },
    hobbies:'teaching, talking'
}

console.log(person)
console.log(person.age)
console.log(person.favoriteFoods[0])
console.log(person.nationality)

person.nationality = 'Ethiopian'

console.log(person.nationality)
console.log(person.getPersonInfo('Instructor'))

// Object methods:keys, values, entities, hasOwnProperty

console.log(Object.keys(person))
const keys = Object.keys(person)
console.log(keys)
console.log(Object.values(person))
const entries= Object.entries(person)
console.log(entries)

console.log(person.hasOwnProperty('hobbies'))

const personAccount = {
    firstName:'Asabeneh',
    lastName:'Yetayeh',
    incomes:[{
        description:'Salary',
        amount:'3500'
    },
    {
        description:'Sold house',
        amount:'35000'
    },
    {
        description:'Book Sale',
        amount:'10000'
    },
],
expenses:[{
        description:'Rend',
        amount:'1500'
    },
    {
        description:'Transport',
        amount:'150'
    },
    
],
addIncome: function () {

},
addExpense: function () {

},
totalIncome: function () {

},
totalExpense: function() {

}

}
















