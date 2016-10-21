var prompt = require('prompt-sync')();
var generateRoom = require("./rooms.js");
var fauna = require("./aminals.js");
var player = new fauna.Kobold();
var currentRoom = generateRoom();
var eatThemselves = require("./eatThemselves.js")
console.log(currentRoom);

function takeInput() {
    var command;
    var eating;
    var thingToEat;
    command = prompt(">> ");
    if (command.indexOf('eat ') === 0) {
        var eating = command.slice(4);
        var thingToEat = currentRoom.find((value) => (value.id === eating));
        player.eat(thingToEat);
        if (currentRoom.indexOf(thingToEat) === -1) {
            console.log("There aren't any of those!");
        } else {
            currentRoom.splice(currentRoom.indexOf(thingToEat), 1); 
        }
        console.log(player.hunger);
        console.log(currentRoom);
    } else if (command.indexOf('leave room') === 0) {
        currentRoom = generateRoom();
        console.log(currentRoom);
    } else if (command.indexOf('die') === 0) {
        player.kill();
    } else {
        console.log("I'm not sure what you're trying to do there.");
    }
    // eatThemselves();
}

while (!player.isDead()) {
    // printRoom();
    takeInput();
    if (player.hunger > 100) {
        player.dead = !player.dead;
    }
}

console.log("You Died!");
