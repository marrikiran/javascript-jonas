var employee ={
	name: 'David',
	yearOfBirth: 1989,
	department: 'IT',
	salary: 110000,
	qualifications: ['B.Sc.(IT)', 'MCA', 'MS', ],
	calculateAge: function() {
		this.age = 2017 - this.yearOfBirth;
	}
};

employee.calculateAge();
console.log(employee);