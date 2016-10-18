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

function Kobold() {
    this.says = 'grr';
    this.hunger = 100;
}

Kobold.prototype = Object.create(Animal.prototype);
Kobold.prototype.eats = ['plant', 'animal'];
Kobold.prototype.id = 'Kobold';

function Bat() {
    this.says = 'meow';
    this.hunger = 100;
}

Bat.prototype = Object.create(Animal.prototype);
Bat.prototype.eats = ['animal'];
Bat.prototype.id = 'Bat';

function Snail() {
    this.hunger = 100;
    this.says = 'KAANYEEE WEST';
}

Snail.prototype = Object.create(Animal.prototype);
Snail.prototype.eats = ['plants', 'fungus', 'algae'];
Snail.prototype.id = 'Snail';

var command;
var eating;
var thingToEat;
var dead = false;


function printRoom () {
    console.log("Here's where the room will go.");
}

function takeInput() {
    command = prompt(">> ");
    if (command.indexOf('eat') === 0) {
        var eating = command.slice(4),
            thingToEat = room.find((value) => (value.id === eating));
        console.log(thingToEat);
        Player.eat
    } else if (command.indexOf('leave room') === 0) {
        generateRoom();
    }

}

while (!dead) {
    printRoom();
    takeInput();
}

