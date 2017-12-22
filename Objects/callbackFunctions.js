var yearsOfBirth = [1957, 1963, 1984, 1989,];

var currentAges = arrayCalculations(yearsOfBirth, function (yearOfBirth) {
    return (2017 - yearOfBirth);
});

var inThirties = arrayCalculations(currentAges, function(currentAge) {
    return (currentAge >= 30);
});

console.log(currentAges);
console.log(inThirties);

function arrayCalculations(array, callback) {
    var result = [];

    for (var i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }

    return result;
}