var animals = [
    { name: 'Tommy', type: 'dog' },
    { name: 'Icra', type: 'cat' },
    { name: 'mittu', type: 'parrot' },
    { name: 'tutu', type: 'dog' },
    { name: 'lucky', type: 'dog' },
    { name: 'mini', type: 'cat' },
    { name: 'bruno', type: 'dog' }
];

/*****************************FILTER***************************************************/
var dogFilter = animals.filter(function(currentElement, index) {
    // returns an array with the elements satisfying the condition
    return currentElement.type === 'dog';
});

// console.log(dogFilter);

/*****************************MAP******************************************************/
var dogMap = animals.map(function(currentElement, index) {
    // returns a tramsformed array
    return currentElement.name + ' is a ' + currentElement.type;
});

// console.log(dogMap);

/*****************************REDUCE*****************************************************/

var scores = [100, 1123, 3324, 435, 23123, 645645,];

var scoreReduce = scores.reduce(function(accumulator, currentElement, index) {
    // reduces the array into a single element and returns it
    return accumulator += currentElement;
}, 0);

console.log(scoreReduce);

/*****************************REDUCE ADVANCED************************************************/

var file = "Pritam Bohra\twaffle\tiron\t80\t1\nPritam Bohra\tblender\tiron\t280\t3\nPritam Bohra\twaffle\tknife\t10\t4\nAdhya Bohra\twaffle\tiron\t80\t1\nAdhya Bohra\tblender\tiron\t280\t3\nAdhya Bohra\twaffle\tknife\t10\t4";
var lines = file.split('\n');
var array = lines.map(function(currentElement, index, array) {
    return currentElement.split('\t');
});

// var jsonArray = [];
var json = array.reduce(function(accumulator, currentElement, index) {
    // if (!accumulator[currentElement[0]]) {
    //     accumulator[currentElement[0]] = [];
    // }
    accumulator[currentElement[0]] = accumulator[currentElement[0]] || [];

    accumulator[currentElement[0]].push({
        item: currentElement[1],
        material: currentElement[2],
        price: currentElement[3],
        quantity: currentElement[4],
    });

    return accumulator;
}, {});
console.log(JSON.stringify(json, null, 2));
