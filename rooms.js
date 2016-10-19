var entities = {
    flora: ['plant', 'fungus', 'algae'],
    fauna: [Snail, Bat]
},
    room = [],
    i;

function fromXToY(x, y) {
    return Math.floor(Math.random() * (y  -x)) + x;
}

function generateRoom() {
    room = [];
    for (i = 0; i < fromXToY(8, 16); i++) {
        let type = Math.random ? 'fauna' : 'flora',
            set = entities[type],
            n = fromXToY(0, set.length),
            entity = type === 'fauna' ? new set[n]() : set[n];
        room.push(entity);
    }
    return room;
}
