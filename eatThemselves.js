function eatThemselves () {
	room.forEach(function (value) {
		if (typeof value === "object") {
			for (var i = 0; i < room.length; i++) {
				if (value.eats.indexOf(room[i] && room.indexOf(value) !== i) >= 0) {
					value.eat(room[i]);
					room.splice(i, 1);
				}
			}
		}
	});
}

module.exports = eatThemselves;