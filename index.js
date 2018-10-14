var Matrix = require("./Matrix.js");
var myMatrix = new Matrix(100,100);
var matrix = myMatrix.mat(); 

var Auto = require("./auto.js");
var Grass = require("./grass.js");
var GrassEater = require("./grasseater.js");
var Human = require("./human.js");
var Musor = require("./musor.js");
var Predator = require("./predator.js");
var Slime = require("./slime.js");
var Snail = require("./snail.js");


function main() {
    var grassArr = [];
    var grassEaterArr = [];
    var predatorArr = [];
    var humanArr = [];
    var snailArr = [];
    var slimeArr = [];
    var autoArr = [];
    var musorArr = [];



    for (y = 0; y < matrix.length; y++) {
        for (x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var gre = new GrassEater(x, y, 2);
                grassEaterArr.push(gre);
            }
            else if (matrix[y][x] == 3) {
                var pre = new Predator(x, y, 3);
                predatorArr.push(pre);
            }
            else if (matrix[y][x] == 4) {
                var hum = new Human(x, y, 4);
                humanArr.push(hum);
            }
            else if (matrix[y][x] == 5) {
                var sna = new Snail(x, y, 5);
                snailArr.push(sna);
            }
            else if (matrix[y][x] == 7) {
                var auto = new Auto(x, y, 7);
                autoArr.push(auto);
            }
        }
    }

    setInterval(function () {
        // for (y = 0; y < matrix.length; y++) {
        //     for (x = 0; x < matrix[y].length; x++) {
        //         if (matrix[y][x] == 1) {
        //             console.log(1);
        //         }
        //         else if (matrix[y][x] == 0) {
        //             console.log(0);
        //         }
        //         else if (matrix[y][x] == 2) {
        //             console.log(2);
        //         }
        //         else if (matrix[y][x] == 3) {
        //             console.log(3);
        //         }
        //         else if (matrix[y][x] == 4) {
        //             console.log(4);
        //         }
        //         else if (matrix[y][x] == 5) {
        //             console.log(5);
        //         }
        //         else if (matrix[y][x] == 6) {
        //             console.log(6);
        //         }
        //         else if (matrix[y][x] == 7) {
        //             console.log(7);
        //         }
        //         else if (matrix[y][x] == 8) {
        //             console.log(8);
        //         }
        //     }
        // }
        for (var i in grassArr) {
            grassArr[i].mul(matrix, grassArr);
        }
        for (var i in grassEaterArr) {
           // console.log( grassEaterArr[i] );
            grassEaterArr[i].eat(matrix, grassEaterArr, grassArr);
        }
        for (var i in predatorArr) {
            predatorArr[i].eat(matrix, predatorArr, grassEaterArr);
        }
        for (var i in humanArr) {
            humanArr[i].exterminate(matrix, humanArr, predatorArr, musorArr, grassEaterArr);
        }
        for (var i in snailArr) {
            snailArr[i].move(matrix, slimeArr);
        }
        for (var i in slimeArr) {
            slimeArr[i].die(matrix, slimeArr);
        }
        for (var i in autoArr) {
            autoArr[i].exterminate(matrix, grassEaterArr, predatorArr, snailArr);
        }
        console.log(matrix)
    }, 20);

}
main();