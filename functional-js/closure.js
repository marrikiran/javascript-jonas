var name = 'Pritam Bohra';
var age = 28;

var getName = function(name) {
    var introMsg = 'Hello everyone, I am ';

    return function() {
        return introMsg + name + ' and I am ' + age + ' years old.';
    };
};

var introduction = getName(name);
age = 'Twenty Eight';
console.log(introduction());


/* function quizScore() {
    // We are separating the score part so that it doesn't mess with other parts of the application
    var score = 0;

    return function(isAnswerCorrect) {
    if (isAnswerCorrect) {
        score += 1;
    }

    return score;
    };
} */