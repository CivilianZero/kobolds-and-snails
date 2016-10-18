var entities = [
    0, //fungus
    1, //algae
    2, //plant
    3, //cat
    4  //snail
],
    room = [],
    i = 0;

function fromXToY(x, y) {
    Math.floor(Math.random() * (y-x)) + x;
};

function generateRoom() {
    while (i < fromXToY(5, 15)) {
        i = fromXToY(0, 4);
        room.push(entities[i]);
    }
}
