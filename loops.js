// what are loops?
// why need them?
// to repeat, 

console.log('Hello world!')

// For loop
/*
for (initional, conditon, increm/decrem) {

}

*/


for(let i = 1; i <= 10; i = i + 1){
    console.log(`${i} ^ ${i} = ${i ** i}`)
}


/*
1 x 1 = 1
2 x 2 = 4
*/

for(let i = 5; i >= 0; i--){
    console.log(i, i * i, i ** i)
}

// while loop

/*
let count = 0
while (condtion){
    console.log('sss')
    increment/decr
}
0
1
2
3


*/
let count = 0
while (count <= 3){
    console.log('count: ', count)
    count++
}

/*
first do and check
let k = 0
do {
console.log(k)
k++
} while (k <= 3)

*/

let k = 4
do {
console.log('k',k)
k++
} while (k <= 3)

const shoppingCart = ['Mango', 'Milk','Honey','Sugar','Coffee','Meat']

const newProducts = []

for (let i = 0; i <  shoppingCart.length; i++){
    if (shoppingCart[i].length === 4) {
        newProducts.push(shoppingCart[i])
    }
}
console.log(newProducts)


const newArr = []
for(let i = shoppingCart.length - 1; i >= 0; i--){
    newArr.push(shoppingCart[i])
}
console.log(newArr)

