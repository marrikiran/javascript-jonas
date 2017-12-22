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

    checkAnswer: function(answerFromUser) {
      if (answerFromUser === this.correctAnswer) {
        alert("Correct answer!");
        console.log("Your score is " + 10);
      } else {
        alert(
          "Your answer is incorrect. The correct answer is " +
            this.options[this.correctAnswer]
        );
        console.log("Your score is 0");
      }

      console.log(6);
      loadNextQuestion();
      console.log(7);
    }
  };

  var questionArray = [];

  var question1 = new Question(
    "What is the capital of India?",
    ["Mumbai", "Kolkata", "New Delhi", "Bengaluru"],
    2
  );
  var question2 = new Question(
    "Which is the best programming language in the world?",
    ["JavaScript", "Python", "PHP", "Java"],
    0
  );
  var question3 = new Question(
    "Who was the first player to score a double hundred in ODIs?",
    ["Virat Kohli", "Virender Sehwag", "Sachin Tendulkar", "Rohit Sharma"],
    2
  );
  var question4 = new Question(
    "Who is the Prime Minister of India?",
    ["Narendra Modi", "Donald Trump", "Rahul Gandhi", "Lalu Prasad Yadav"],
    0
  );
  var question5 = new Question(
    "Who holds the record for most test wickets?",
    ["Shane Warne", "Anil Kumble", "Glen McGrath", "Muttiah Muralitharan"],
    3
  );

  questionArray.push(question1);
  questionArray.push(question2);
  questionArray.push(question3);
  questionArray.push(question4);
  questionArray.push(question5);

  console.log(1);
  loadNextQuestion();
  console.log(2);

    function loadNextQuestion() {
        while (true) {
            var questionToBeDisplayed = Math.floor(Math.random() * questionArray.length);

            console.log(3);
            questionArray[questionToBeDisplayed].askQuestion();

            var answerFromUser = prompt("Please choose an option to answer this question: [eg. 0]");

            if (answerFromUser === "exit") {
                console.log(4);
                break;
            }

            console.log(5);
            questionArray[questionToBeDisplayed].checkAnswer(parseInt(answerFromUser));
            console.log(8);
        }

    console.log(9);
  }
})();
