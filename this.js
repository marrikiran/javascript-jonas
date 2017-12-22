getName();

function getName() {
	console.log(this);
	var firstName = 'David';
	var lastName = 'Hussey';

	testThis();

	function testThis() {
		console.log(this);
		console.log('I am just testing \'this\'');
	}

	return 'David';
}


var employee = {
	name: 'David',
	yearOfBirth: 1989,
	department: 'IT',
	salary: 110000,
	qualifications: ['B.Sc.(IT)', 'MCA', 'MS', ],
	calculateAge: function() {
		console.log(this);
		console.log(this.age = 2017 - this.yearOfBirth);

		anotherThisTest();

		function anotherThisTest() {
			console.log(this);
		}
	}
};

employee.calculateAge();