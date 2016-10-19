var entities = {
    flora: ['plant', 'fungus', 'algae'],
    fauna: [Cat, Snail, Bat]
},
    room = [],
    i,
    whichOnes;

function fromXToY(x, y) {
    return Math.floor(Math.random() * (y-x)) + x;
};

function generateRoom() {
    var room = [];
    for (i = 0; i < fromXToY(8, 16); i++) {
        let type = fromXToY(0, 1) ? 'fauna' : 'flora'; // random 0 || 1
        let set = entities[type]; // get entity arr
        let n = fromXToY(0, set.length); // random 0 -> set.length
        // create obj if fauna, otherwise use string identifier
        let entity = type === 'fauna' ? new set[n] : set[n];
        // push the entity
        room.push(entity);
    }
    return room;
}

//function populateRoom() {
//    for (i = 0; i < room.length; i++) {
//        switch(room[i]) {
//            case 0:
//                room[i] = 'fungus';
//                break;
//            case 1:
//                room[i] = 'algae';
//                break;
//            case 2:
//                room[i] = 'plant'
//                break;
//            case 3:
//                room[i] = new Bat();
//                break;
//            case 4:
//                room[i] = new Snail();
//                break;
//        }
//    }
//}
