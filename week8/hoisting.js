/* scope:

English -> Global
Finnish -> local

when it comes variables we diffferent scope: Global and local scope

*/

const PI = Math.PI
let a = 5

if(a > 0) {
   
    let b = 5
    let a = 1
    let result = a * b
    console.log(result)
}

console.log(a)
a = 3
console.log(a)

for(let i = 0; i < 3; i++){
   
    let a = 9
}

function func() {
    var c = 33
    let b = 4
    return 'something'
}


// Draw conclusion
// let and const are block scope but are var is function scoped. 

