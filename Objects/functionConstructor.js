var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    console.log(this);
};

// Person.prototype.calculateAge = function() {
//   console.log(2017 - this.yearOfBirth);
// };
// Person.prototype.lastName = 'Smith';

Person.prototype = {
    calculateAge: function() {
        console.log(2017 - this.yearOfBirth);
        console.log('My last name is ', this.lastName, ' and my address is ' + this.address);
    },

    lastName: 'Smith',
    address: 'Portugal'
};

var david = new Person('David', 1984, 'Teacher');
david.lastName = 'Warren';
david.address = 'Queensland';
david.relationshipStatus = 'Single';
david.calculateAge();

console.log(david);
console.log(david.address);
console.log(david.lastName);

var mike = new Person('Mike', 1979, 'Artist');
mike.calculateAge();

console.log(mike);
console.log(david.lastName);
console.log(mike.lastName);
