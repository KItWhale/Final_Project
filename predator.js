var ParentClass = require("./ParentClass.js");
var Matrix = require("./Matrix.js");
var myMatrix = new Matrix(100,100);
var matrix = myMatrix.mat(); 
module.exports = class Predator extends ParentClass{
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 50;
        this.multiply = 0;
    }
    chooseCell(character) {
        super.getNewCoordinates();
        return super.chooseCell(character);
    }
    move(matrix, predatorArr) {
        var emptyCells = this.chooseCell(0);
        var newCell = this.random(emptyCells);

        var grasses = this.chooseCell(1);
        var grass = this.random(grasses);

        if (newCell) {

            matrix[this.y][this.x] = 0;

            matrix[newCell[1]][newCell[0]] = 3;
            this.x = newCell[0];
            this.y = newCell[1];

            this.energy--;
            if (this.energy <= 0) {
                this.die(matrix, predatorArr);
            }

        }
        if (grass) {
            matrix[this.y][this.x] = 1;

            matrix[grass[1]][grass[0]] = 3;
            this.x = grass[0];
            this.y = grass[1];

            this.energy--;
            if (this.energy <= 0) {
                this.die(matrix. predatorArr);
            }
        }

    }
    eat(matrix, predatorArr, grassEaterArr) {
        var grassEaters = this.chooseCell(2);
        var grassEater = this.random(grassEaters);

        if (grassEater) {

            matrix[this.y][this.x] = 0;
            matrix[grassEater[1]][grassEater[0]] = 3;
            this.x = grassEater[0];
            this.y = grassEater[1];

            for (var i in grassEaterArr) {
                if (grassEater[0] == grassEaterArr[i].x && grassEater[1] == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            this.energy += 2;
            this.multiply++;
            if (this.multiply >= 5) {
                this.mul(matrix, predatorArr);
            }


        }
        else {
            this.move(matrix, predatorArr);
        }
    }

    mul(matrix, predatorArr) {
        var emptyCells = this.chooseCell(0);
        var newCell = this.random(emptyCells);


        if (newCell) {
            matrix[newCell[1]][newCell[0]] = 3;
            var pre = new Predator(newCell[0], newCell[1], this.index)
            predatorArr.push(pre);
            this.multiply = 3;
        }

    }
    die(matrix, predatorArr) {
        matrix[this.y][this.x] = 0;
        for (var i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;
            }
        }
    }


}

