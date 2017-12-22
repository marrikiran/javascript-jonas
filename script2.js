var test = 'Hello World';

if (test === window.test) {
	console.log('They are equal');
} else {
	console.log('They are not equal');
}


hoistingTest();
console.log(testVariable);

function hoistingTest() {
	console.log('Just testing hoisting in javascript');
}

var testVariable = 'test value';

var anonymousFunction = function() {
	console.log('anonymous function');
};


console.log(anonymousFunction());