// Regular loop



// for(let i = 1; i < 11; i = i + 5){
//     console.log(i)
// }

// for(let i = 10; i >= 0; i--){
//     console.log(i)
// }



// let count = 0
// while (count < 11) {
//     console.log(count )
//     count++
// }




// let count = 12
// do {
//     console.log(count )
//     count++
// } while (count < 11)

/*

count arr = []
while (array.length!=10) {}

*/

const items = ['Mango', 'Milk','Honey','Sugar','Coffee','Meat']

console.log('Regular for LOOP')
for(let i = 0; i < items.length; i++){
    console.log(i + 1, items[i].toUpperCase())
}

console.log('forEach Loop')
items.forEach(function(item){
    console.log(item)
})



// 
for(const item of items){
    console.log(item.toUpperCase())
}


// const user = {
//     name:'JOHN',
//     age:25,
//     skills:['HTML', 'CSS','JS']
// }

// for (const key in user){
//     console.log(key, user[key])
// }

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
};


let arr = []
for(const key in users){
    let point = users[key].points
    if(point >= 50) {
        arr.push(point) 
    }
}
console.log(arr)
console.log(arr.length)

// Higher Order Function: Is a function that takes another function as a parameter or return a function

// const makeSquare = (n) => n ** 2

// function cube(func, n){
//     return func(n) * n 
// }

// console.log(cube(makeSquare, 3))


function xyz (x, y){
    return {
        sum:(x, y) => x + y,
        product: (x,y) => x * y
    }  
}

console.log(xyz().product(2, 30))
console.log(xyz().sum(99, 1))

// Functional Programming: map, filter, reduce, some, any, find, findIndex



