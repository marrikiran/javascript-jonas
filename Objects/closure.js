function yearsToRetire(retirementAge) {
    var msg = ' years until retirement.';
    return function(yearOfBirth) {
        console.log('You have ' + (retirementAge - (2017 - yearOfBirth)) + msg);
    };
}

yearsToRetire(66)(1957);
yearsToRetire(66)(1963);
yearsToRetire(66)(1982);
yearsToRetire(66)(1984);
yearsToRetire(66)(1989);
yearsToRetire(66)(2013);


function interviewQuestion(job) {
    if (job === 'Teacher') {
        return function(name) {
            console.log('What subjects do you teach, ' +name + '?');
        };
    } else if (job === 'Designer') {
        return function(name) {
            console.log(name + ' could you please explain UX design?');
        };
    } else {
        return function(name) {
            console.log('So, what do you do, ' + name + '?');
        };
    }
}

console.log('*********************************************');

interviewQuestion()('David');
interviewQuestion('Teacher')('David');
interviewQuestion('Designer')('Mike');


function interviewQuestion(job) {
    return function(name) {
        if (job === "Teacher") {
            console.log("What subjects do you teach, " + name + "?");
        } else if (job === "Designer") {
            console.log(name + " could you please explain UX design?");
        } else {
            console.log("So, what do you do, " + name + "?");
        }
    };
}

console.log('*********************************************');
interviewQuestion()("David");
interviewQuestion("Teacher")("David");
interviewQuestion("Designer")("Mike");