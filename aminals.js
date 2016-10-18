var prompt = require('prompt-sync')();

function Animal() {
    this.hunger = 100;
}

Animal.prototype.says = '...';
Animal.prototype.speak = function () {
    return this.says;
};
Animal.prototype.eat = function (food) {
    if (this.eats.indexOf('animal') >= 0 && food instanceof Animal) {
        this.hunger -= (100 - food.hunger);
    } else if (this.eats.indexOf(food) >= 0) {
        this.hunger -= 10;
        if (this.hunger < 0) {
            this.hunger = 0;
        }
    } else {
        this.hunger = 100;
    }
};

function Dog() {
    this.says = 'woof';
    this.hunger = 100;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.eats = ['plant', 'animal'];

function Cat() {
    this.says = 'meow';
    this.hunger = 100;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.eats = ['animal'];

function Snail() {
    this.hunger = 100;
}

Snail.prototype = Object.create(Animal.prototype);
Snail.prototype.eats = ['plants', 'fungus', 'algae'];

var command = prompt(">> ");


if (command.indexOf('eat') === 0) {
    var eating = command.slice(4);
    thingToEat = room.find((value) => (value.id === eating));
    console.log(thingToEat);
} else if (command.indexOf('leave room') === 0) {
    generateRoom();
}


