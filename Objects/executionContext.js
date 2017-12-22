var name = 'Pritam';

function modifyName(newName) {
    
    this.name = changeName(newName);

    function changeName(newName) {
        return newName;
        
    }
}


console.log(name);
modifyName('Pritamkumar Bohra');
console.log(name);