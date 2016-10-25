
// Bats don't eat bats, you dummy. They should.

function eatThemselves (room) {
	room.forEach(function (value) {
		if (typeof value === "object") {
			for (var i = 0; i < room.length; i++) {
				if (value.eats.indexOf(room[i]) >= 0 && room.indexOf(value) !== i) {
					console.log(value.id + "ate" + room[i].id);
					value.eat(room[i]);
					room.splice(i, 1);
					break;
				}
			}
		}
	});
}

module.exports = eatThemselves;