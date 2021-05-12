/*
->
->
->
->
*/
setTimeout(() => {
    console.log('I will come after 3 seconds')
}, 3000)

console.log('I will go and wait for you there. ')


/* async await */


// promise > fullfilled rejected pending

const makeSquare = (n) => n ** 2
console.log(makeSquare(3) * 3)
const makeCube = (n, func) => {
    return n * func(n)
}

console.log(makeCube(10, makeSquare))

let promise = new Promise(function(resolve, reject) {

    const skills = ['HTML', 'CSS']
    if(skills.length >= 3){
          console.log(resolve('You can attend the react course'))

    } else {
        console.log(reject(`${skills.join(',')} are not enough for attending React`)) 

    }
  
   
})

promise.then((value) => {
    console.log(value)
}).catch((value) => {
    console.log('here ?')
    console.log(value)
})
