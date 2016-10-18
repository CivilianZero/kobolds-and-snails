var prompt = require('prompt-sync')();

function Animal() {
    this.hunger = 100;
}

Animal.prototype.says = '...';
Animal.prototype.speak = function () {
    return this.says;
};
Animal.prototype.isDead = function () {
    if (this.hunger > 100) {
        return true;
    } else {
        return false;
    }
}
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
Kobold.prototype.id = 'kobold';

function Bat() {
    this.says = 'BlOOd!';
    this.hunger = 100;
}

Bat.prototype = Object.create(Animal.prototype);
Bat.prototype.eats = ['animal'];
Bat.prototype.id = 'bat';

function Snail() {
    this.hunger = 100;
    this.says = 'KAANYEEE WEST';
}

Snail.prototype = Object.create(Animal.prototype);
Snail.prototype.eats = ['plants', 'fungus', 'algae'];
Snail.prototype.id = 'snail';

function printRoom() {
    console.log("Here's where the room will go.");
}

var player = new Kobold();

console.log(player);
var command;

var room = [];
var kit = new Bat();
kit.hunger = 70;
room.push(kit);
console.assert((kit instanceof Animal) === true);
console.assert(kit.id === 'bat');

function takeInput() {
    var command;
    var eating;
    var thingToEat;
    command = prompt(">> ");
    if (command.indexOf('eat') === 0) {
        var eating = command.slice(4);
        var thingToEat = room.find((value) => (value.id === eating));
        console.log(thingToEat);
        player.eat(thingToEat);
        
    } else if (command.indexOf('leave room') === 0) {
        generateRoom();
    } else if (command.indexOf('die') === 0) {
        player.hunger = 101;
    } else {
        console.log("Your command sucks.");
    }

}

while (!player.isDead()) {
    printRoom();
    takeInput();
    if (player.hunger <= 0) {
        player.dead = !player.dead;
    }
}

console.log("You died!");

