let firstName = 'Asab'
let lastName = 'Yeta'
let age = 250
let isMarried = true

// Object => property:model, type, color, manual,
// person: tall, firstName, lastName, age, hair, color, ....

// Object

const person = {
    firstName:'Asabeneh',
    lastName:'Yetayeh',
    age:250,
    country:'Finland',
    city:'Helsinki',
    skills:['HTML','CSS','JS','React'],
    getPersonInfo:function(){
       return `${this.firstName} ${ this.lastName}. His skill are ${this.skills.join()}`
    }
}
console.log(person)
console.log(person.firstName)
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person.nationality)
person.nationality = 'Ethiopian'
console.log(person.nationality)
console.log(person)
console.log('what is the output from her?', person.getPersonInfo())

// Object Methods
// hasOwnProperty, Object.keys, Object.values, Object.assign, entries
const keys = Object.keys(person)
console.log(keys)
const values = Object.values(person)

console.log(values)
console.log(person.hasOwnProperty('firstName'))

if(person.hasOwnProperty('skills')){
    person.skills.push('React')
}
console.log(person)

const entries = Object.entries(person)
console.log(entries)

const p1 = Object.assign({}, person, {city:'Espoo'} )
console.log(p1)

