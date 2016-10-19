var entities = {
    flora: ['plant', 'fungus', 'algae'],
    fauna: [Snail, Bat]
},
    room = [],
    i;

function fromXToY(x, y) {
    return Math.floor(Math.random() * (y-x)) + x;
};

function generateRoom() {
    room = [];
    for (i = 0; i < fromXToY(8, 16); i++) {
        let type = Math.random ? 'fauna' : 'flora'; // random 0 || 1
        let set = entities[type]; // get entity arr
        let n = fromXToY(0, set.length); // random 0 -> set.length
        // create obj if fauna, otherwise use string identifier
        let entity = type === 'fauna' ? new set[n] : set[n];
        // push the entity
        room.push(entity);
    }
    return room;
}
