var ParentClass = require("./ParentClass.js");
var mat = require("./Matrix.js");
var matrix = mat(100, 100);

module.exports = class Grass extends ParentClass {

    mul() {
        this.multiply++;
        var newCell = this.chooseCell(0)[Math.floor(Math.random() * this.chooseCell(0).length)];
        if (this.multiply >= 5 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }

}
