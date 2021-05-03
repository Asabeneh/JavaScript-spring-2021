class Person {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.skills = ['Disciple'];
	}
	addSkill(skill) {
		this.skills.push(skill);
	}
	getSkills() {
		return this.skills;
	}
	getPersonInf() {
		return `I am ${this.firstName} ${this.lastName}. I am ${
			this.age
		} years old. I love teaching ${this.skills.join(', ')}.`;
	}
}

const p1 = new Person('Asabeneh', 'Yetayeh', 250);
const p2 = new Person('John', 'Doe', 25);

console.log(p1.firstName);
console.log(p1.lastName);
console.log(p2);
console.log(p1.skills);

p1.addSkill('HTML');
p1.addSkill('CSS');
p1.addSkill('JavaScript');
console.log(p1.getSkills());
console.log(p1.getPersonInf());

// Inheritance: Cheap
//

class Student extends Person {
	constructor(firstName, lastName, age, nationality) {
		super(firstName, lastName, age);
		this.nationality = nationality;
	}
	addmethod() {}
	getPersonInf() {
		return `I am ${this.firstName} ${this.lastName}. I am ${
			this.age
		} years old. I love teaching ${this.skills.join()}. My nationality is ${
			this.nationality
		}.`;
	}
}

const s1 = new Student('James', 'John', 21, 'British');
console.log(s1);
s1.addSkill('JavaScript');
s1.addSkill('React');
console.log(s1.getSkills());
console.log(s1.getPersonInf());
console.log(s1.getSkills());
