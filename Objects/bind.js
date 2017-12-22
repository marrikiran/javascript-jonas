var sound = 'tu tu';

var dog = {
    sound: 'bark',
    talk: function() {
        console.log(this);
        console.log(this.sound);
    }
};

dog.talk();

var dogSound = dog.talk.bind(dog);
dogSound();


// var newFunction = function() {
//   console.log("the sound is " + this.sound);
// };

// var dog1 = {
//   sound: "bark",
//   soundAssignment: newFunction,
//   talk: function() {
//     console.log(this);
//     console.log(this.sound);
//   }
// };

// // newFunction();
// dog1.soundAssignment();