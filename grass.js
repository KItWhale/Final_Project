var ParentClass = require("./ParentClass.js");


module.exports = class Grass extends ParentClass {

    mul(matrix, grassArr) {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = this.random(emptyCells);
        if (this.multiply >= 5 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }

}
