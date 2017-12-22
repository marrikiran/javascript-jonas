var years = new Array();
var ages = new Array();
const CURRENT_YEAR = 2017;

function getYears() {
	for (var i = 0; i < 5; i++) {
		years[i] = prompt('Enter the year of birth of person ' + (i + 1));
	}
}

function storeAge(yearsOfBirth) {
	for (var i = 0; i < yearsOfBirth.length; i++) {
		ages[i] = getAge(yearsOfBirth[i]);
	}
}

function checkFullAge(yearsOfBirth) {
	for (var i = 0; i < yearsOfBirth.length; i++) {
		if (isFullAge(ages[i])) {
			console.log('Person ' + (i + 1) + ' is of full age and is ' + getAge(yearsOfBirth[i]) + ' years old');
		} else {
			console.log('Person ' + (i + 1) + ' is not of full age and is ' + getAge(yearsOfBirth[i]) + ' years old');
		}
	}
}

function isFullAge(age) {
	return age >= 18;
}


function getAge(yearOfBirth) {
	return CURRENT_YEAR - yearOfBirth;
}

getYears();
storeAge(years);
checkFullAge(years);

function printFullAge(yearsOfBirth) {
	storeAge(yearsOfBirth);
	var booleanResults = [];

	for (var i = 0; i < yearsOfBirth.length; i++) {
		booleanResults.push(isFullAge(ages[i]));
	}

	console.log(years);
	console.log(ages);
	console.log(booleanResults);
}

printFullAge(years);