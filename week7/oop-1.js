// OOP: Object Oriented Programming
// Chair, Table, Car, Person
// Chair: iron/plastic/wood, 4/3,
// Car: color, make, model, gear box
// Dog: color, breed, legs, age, gender, bark
// Person: firstName, lastName, age, nationality, etc

class Animal {
	constructor(name, age, breed) {
		this.name = name;
		this.age = age;
		this.breed = breed;
	}
	bark() {
		return 'It wolfs';
	}
}

const a1 = new Animal('Puppy', 4, 'Husky');
const a2 = new Animal('Fluffy', 6, 'Pug');

console.log(a1);
console.log(a2);
console.log(a1.bark());
