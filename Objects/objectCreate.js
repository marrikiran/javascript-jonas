
var personPrototype = {
    lastName: 'Carseldine',
    address: 'USA',
    calculateAge: function() {
        console.log(2017 - this.yearOfBirth);
    }
};

var david = Object.create(personPrototype);
david.name = 'David';
david.yearOfBirth = 1984;

console.log(david);

var mike = Object.create(personPrototype, {
    name: { value: 'Mike'},
    yearOfBirth: { value: 1979 }
});

console.log(mike);