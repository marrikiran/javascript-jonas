/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

(function() {

    var Question = function(question, options, correctAnswer) {
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
    };

    Question.prototype = {
        askQuestion: function() {
            console.log(this.question);
            console.log("You options are:");

            for (var i = 0; i < this.options.length; i++) {
                console.log(i + ") " + this.options[i]);
            }
        },

        checkAnswer: function(answerFromUser, callback) {
            var score;

            if (answerFromUser === this.correctAnswer) {
                alert("Correct answer.");
                score = callback(true);
            } else {
                alert("Your answer is incorrect. The correct answer is " + this.options[this.correctAnswer]);
                score = callback(false);
            }

            this.displayScore(score);
        },

        displayScore: function(score) {
            console.log("--------------------------------------------------------------------");
            console.log("Your current score is " + score);
            console.log("--------------------------------------------------------------------");
        }
    };

    var questionArray = [];

    var question1 = new Question("What is the capital of India?", ["Mumbai", "Kolkata", "New Delhi", "Bengaluru"], 2);
    var question2 = new Question("Which is the best programming language in the world?", ["JavaScript", "Python", "PHP", "Java"], 0);
    var question3 = new Question("Who was the first player to score a double hundred in ODIs?", ["Virat Kohli", "Virender Sehwag", "Sachin Tendulkar", "Rohit Sharma"], 2);
    var question4 = new Question("Who is the Prime Minister of India?", ["Narendra Modi", "Donald Trump", "Rahul Gandhi", "Lalu Prasad Yadav"], 0);
    var question5 = new Question("Who holds the record for most test wickets?", ["Shane Warne", "Anil Kumble", "Glen McGrath", "Muttiah Muralitharan"], 3);

    questionArray.push(question1);
    questionArray.push(question2);
    questionArray.push(question3);
    questionArray.push(question4);
    questionArray.push(question5);

    function quizScore() {
        // We are separating the score part so that it doesn't mess with other parts of the application
        var score = 0;

        return function(isAnswerCorrect) {
            if (isAnswerCorrect) {
                score += 1;
            }

            return score;
        };
    }

    var keepScore = quizScore();

    loadNextQuestion();
    function loadNextQuestion() {
        var questionToBeDisplayed = Math.floor(Math.random() * questionArray.length);
        questionArray[questionToBeDisplayed].askQuestion();

        var answerFromUser = prompt("Please choose an option to answer this question: [eg. 0]");

        if (answerFromUser !== 'exit') {
            questionArray[questionToBeDisplayed].checkAnswer(parseInt(answerFromUser), keepScore);
            loadNextQuestion();
        }
    }
})();


/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends
(Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score
    (Hint: I'm going to use the power of closures for this, but you don't have to,
    just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/
