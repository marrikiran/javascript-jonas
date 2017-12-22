/*******************Function Constructor**************************/
var Person = function (name, yearOfBirth, job) {
    this.name  = name ;
    this.yearOfBirth = yearOfBirth;
    this.job = job ;
};

Person.prototype = {
    calculateAge: function() {
        console.log(2017 - this.yearOfBirth);
    },
};

var david = new Person("David", 1984, "Teacher");
david.calculateAge();

console.log(david);

var yearOfBirth = 1989;

var newCalculateAge = david.calculateAge.bind(this);
newCalculateAge();

/*******************Object.create**************************/

var studentPrototype = {
    name: 'Mike Anderson',
    age: 15,
    class: 9,
    cgpa: 3.8,
    getGrade: function() {
        if (this.cgpa >= 3.6) {
            console.log('A Grade');
        }
    }
};

var studentJohn = Object.create(studentPrototype);
studentJohn.name = "John";
studentJohn.age = 20;
studentJohn.class = 14;
studentJohn.cgpa = 3.89;

console.log(studentJohn);

var studentMike = Object.create(studentPrototype, {
    name: { value: 'Michael Ferrera'},
    age: { value: 24 },
    class: { value: 14 },
    cgpa: { value: 3.9 }
});

console.log(studentMike);