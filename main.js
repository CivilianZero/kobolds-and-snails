var prompt = require('prompt-sync')();
var generateRoom = require("./rooms.js");
var fauna = require("./aminals.js");
var player = new fauna.Kobold();
var currentRoom = generateRoom();
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
    console.log("You are a kobold standing in a cave filled with with many things. There is a small mailbox here. What would you like to do? \n"
                + "Options include: \n"
                + "eat something \n"
                + "leave room \n"
                + "die \n")
    printRoom();
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
    } else if (command.indexOf('leave room') === 0) {
        currentRoom = generateRoom();
        console.log(currentRoom);
    } else if (command.indexOf('mail') !== -1){
        console.log("This is no time to check your mail!");
    } else if (command.indexOf('die') === 0) {
        player.kill();
    } else {
        console.log("Your command was not recognized.");
    }

}

while (!player.isDead()) {
    // printRoom();
    takeInput();
    if (player.hunger > 100) {
        player.dead = !player.dead;
    }
}

console.log("You Died!");
