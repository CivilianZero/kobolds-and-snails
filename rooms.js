var fauna = require('./aminals.js');

var entities = {
    flora: ['plant', 'fungus', 'algae'],
    fauna: [fauna.Snail, fauna.Bat]
};

function fromXToY(x, y) {
    return Math.round(Math.random() *(y - x) + x);
}

function generateRoom() {
    var room = [];
    for (var i = 0; i < fromXToY(8, 15); i++) {
        let type = fromXToY(0, 1) ? 'fauna' : 'flora',
            set = entities[type],
            n = fromXToY(0, set.length - 1),
            entity = type === 'fauna' ? new set[n]() : set[n];
        room.push(entity);

        console.log(i);
    }
    return room;
}

module.exports = generateRoom;