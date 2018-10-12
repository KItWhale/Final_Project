var ParentClass = require("./ParentClass.js");
var mat = require("./Matrix.js");
var matrix = mat(100, 100);

module.exports = class Musor {
	constructor(x, y, index) {
		this.x = x;
		this.y = y;
		this.index = index;
	}
}