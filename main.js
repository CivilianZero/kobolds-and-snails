var prompt = require('prompt-sync')();
var generateRoom = require("./rooms.js");
var fauna = require("./aminals.js");
var player = new fauna.Kobold();
var currentRoom = generateRoom();
var eatThemselves = require("./eatThemselves.js");
console.log(currentRoom);

function printRoom() {
    console.log("You see the following in the room with you: ");
    for (var i = 0 ; i < currentRoom.length ; i++) {
        if (currentRoom[i].id) {
            console.log(currentRoom[i].id);
        } else {
            console.log(currentRoom[i]);
        }
    }
}

function takeInput() {
    var command;
    var eating;
    var thingToEat;
    console.log("You are a kobold standing in a cave filled with with many things. \n There is a small mailbox here. \n What would you like to do? \n"
                + "Options include: \n"
                + "eat something \n"
                + "leave room \n"
                + "die \n");
    printRoom();
    command = prompt(">> ");
    if (command.indexOf('eat ') === 0) {
        eating = command.slice(4);
        thingToEat = currentRoom.find((value) => (value.id === eating));
        player.eat(thingToEat);
        if (currentRoom.indexOf(thingToEat) === -1) {
            console.log("There aren't any of those!");
        } else {
            currentRoom.splice(currentRoom.indexOf(thingToEat), 1); 
        }
    } else if (command.indexOf('leave room') === 0) {
        currentRoom = generateRoom();
        console.log(currentRoom);
    } else if (command.indexOf('mail') !== -1){
        console.log("This is no time to check your mail!");
    } else if (command.indexOf('die') === 0) {
        player.kill();
    } else {
        console.log("I'm not sure what you're trying to do there.");
    }
    eatThemselves();
}

while (!player.isDead()) {
    // printRoom();
    takeInput();
    if (player.hunger > 100) {
        player.dead = !player.dead;
    }
}

console.log("You Died!");
