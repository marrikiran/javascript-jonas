var a = 'Hello! ';
window.first();

function first() {
	var b = 'Hi! ';
	console.log(b);
	second();

	function second() {
		var c = 'Oi! ';
		console.log(c);
		third();
	}
}

function third() {
	var d = 'Tudo bom?';
	console.log(d);
	console.log(this);
}


var david = {
	name: 'David',
	yearOfBirth: 1987,
	calculateAge: function() {
		console.log(2017 - this.yearOfBirth);
		console.log(this);

		testThis();
		function testThis() {
			console.log(this);
		}
	}
};

david.calculateAge();

var mike = {
	name: 'Mike',
	yearOfBirth: 1979,
};

mike.calculateAge = david.calculateAge;
mike.calculateAge();

var username1 = document.getElementById("username");
var username2 = document.querySelector("#userForm #username");

console.log(username1);
console.log(username2);

var products1 = document.getElementsByClassName("product");
var products2 = document.querySelectorAll("#productForm .product");

console.log(products1);
console.log(products2);