var name = 'Pritam"s MyEngine';
var message = 'Hello ' + name;

var age = 28;
var test;

console.log(message + age);
console.log(age + age);
console.log(test);
console.log(age);

if (test === null) {
	console.log('it is null')
} else if (test === undefined) {
	console.log('it is undefined');
} else {
	console.log('I am consfused');


	console.log('Giving Git demo to Kiran');
}

name = prompt("What's your name?");
var lastName = prompt('Hey ' + name + ', what is your last name?');

age = prompt('Mr. ' + name + ' ' + lastName + ', what is your age?');

console.log(name + ' ' + lastName + ' is ' + age +' years old.');