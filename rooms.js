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

function populateRoom() {
    generateRoom();
    for (i = 0; i < room.length; i++) {
        switch(i) {
            case 0:
                room[i] = 'fungus';
                break;
            case 1:
                room[i] = 'algae';
                break;
            case 2:
                room[i] = 'plant'
                break;
            case 3:
                room[i] = new Bat();
                break;
            case 4:
                room[i] = new Snail();
                break;
        }
    }
}

populateRoom();
console.log(room);
