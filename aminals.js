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
};

Animal.prototype.kill = function () {
    this.hunger = 101;
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

module.exports = {
    Bat: Bat,
    Snail: Snail,
    Kobold: Kobold
};