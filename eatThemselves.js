// this function was moved to main.js

function eatThemselves () {
	currentRoom.forEach(function (value) {
		if (typeof value === "object") {
			for (var i = 0; i < currentRoom.length; i++) {
				if (value.eats.indexOf(currentRoom[i] && currentRoom.indexOf(value) !== i) >= 0) {
					value.eat(currentRoom[i]);
					currentRoom.splice(i, 1);
				}
			}
		}
	});
}