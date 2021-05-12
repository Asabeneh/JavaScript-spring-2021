/* to write a function that take unlimited number of arguments and return the sum of the arguments 

sumAllNums(1, 2, 4, 5, 8, 9, 10)
*/



function sumAllNums() {
    console.log(this)
    let sum = 0
    for (const num of arguments){
        sum += num
    }
    return sum

}

console.log(sumAllNums(1, 3, 5, 10, 25, 4))


/*
const sumAllNums = (...args) =>  args.reduce((a, b) => a + b)
console.log(sumAllNums(1, 3, 5, 10, 25, 4))
*/

const makeSquare = () => {
    console.log(this)
}

makeSquare()

const person = {
    firstName:'Asab',
    lastName:'Yetayeh',
    getPersonInfo: () => {
        console.log(this)
    }
}

person.getPersonInfo()


 
