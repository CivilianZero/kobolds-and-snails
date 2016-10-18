var entities = [
    0, //fungus
    1, //algae
    2, //plant
    3, //cat
    4  //snail
],
    room = [],
    i,
    whichOnes;

function fromXToY(x, y) {
    return Math.floor(Math.random() * (y-x)) + x;
};

function generateRoom() {
    room = [];
    for (i = 0; i < fromXToY(5, 15); i++) {
        whichOnes = fromXToY(0, 4);
        room.push(entities[whichOnes]);
    }
}

generateRoom();
console.log(room);
