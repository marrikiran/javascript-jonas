function talk() {
    console.log(this);
    console.log(this.sound);
}


var animal = {
    talk: talk,
    otherProperty: 'blah blah'
};

animal.talk();

var cat = {
    sound: 'meow!!!'
};

Object.setPrototypeOf(cat, animal);

cat.talk();

var dog = {
    sound: 'bark'
};

Object.setPrototypeOf(dog, cat);
dog.talk();