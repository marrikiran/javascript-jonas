var david = {
    name: 'David Malan',
    age: 23,
    job: 'teacher',
    introduce: function (style, timeOfDay) {
        var msg = '';
        if (style === 'formal') {
            msg = "Good " + timeOfDay + ", everyone.";
            msg +=  " I'm " + this.name + ". I am " + this.age +  " years old and I'm a " + this.job + ".";
            msg += " Have a good " + timeOfDay + ".";
            msg += "*********************************************";
            console.log(msg);
        } else if (style === 'informal') {
            msg = "What's fellas!!!!";
            msg += " I'm " + this.name + ". I am " + this.age + " years old and I'm a " + this.job + ".";
            msg += " Have a good " + timeOfDay + ".";
            msg += "*********************************************";
            console.log(msg);
        }
    }
};


var mike = {
    name: 'Mike Robinson',
    age: 20,
    job: 'Lab assistant'
};

var name = 'Pritam Bohra';
var age = 28;
var job = 'Software Programmer';

david.introduce('formal', 'morning');
david.introduce('informal', 'evening');

david.introduce.call(window, 'formal', 'morning');
david.introduce.call(window.mike, 'formal', 'morning');

console.log('*********************CALL***************************************');
var mikeIntroduction = david.introduce.call(mike, 'formal', 'night');


console.log("*********************APPLY***************************************");
var mikeIntro = david.introduce.apply(mike, ['informal', 'morning']);


console.log("*********************BIND***************************************");

var davidFunction = david.introduce.bind(david, 'formal');
davidFunction('afternoon');

var mikeFunction = david.introduce.bind(mike, 'informal', 'night');
mikeFunction();

console.log("*************BIND with function as arguments********************");

var yearsOfBirth = [1990, 1999, 2001, 1994, 2010, 2000, 1989];

function processArray(yearsOfBirth, callbackFunction) {
    var result = [];
    
    for (var i = 0; i < yearsOfBirth.length; i++) {
      result.push(callbackFunction(yearsOfBirth[i]));
    }
    return result;
}


var calculateAge = function(yearOfBirth) {
    return (2017 - yearOfBirth);
};

var calculateIsFull = function(ageLimit, age) {
    return (age >= ageLimit);
};

var getAges = processArray(yearsOfBirth, calculateAge);
var getFullAgeIndia = processArray(getAges, calculateIsFull.bind(this, 18));
var getFullAgeUS = processArray(getAges, calculateIsFull.bind(this, 18));
var getFullAgeJapan = processArray(getAges, calculateIsFull.bind(this, 20));

/************************ SAME AS ABOVE STATEMENT******************************
var getFullAgeJapan = processArray(getAges, function(ageLimit, age) {
  return age >= ageLimit;
}.bind(this, 20));

 */

console.log(getAges);
console.log(getFullAgeIndia);
console.log(getFullAgeUS);
console.log(getFullAgeJapan);