var mat = require("./Matrix.js");
var matrix = mat(100, 100);

var Auto = require("./auto.js");
var Grass = require("./grass.js");
var GrassEater = require("./grasseater.js");
var Human = require("./human.js");
var Musor = require("./musor.js");
var Predator = require("./predator.js");
var Slime = require("./slime.js");
var Snail = require("./snail.js");


function main() {

}
main();


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

setInterval(function(){ 
    for (y = 0; y < matrix.length; y++) {
        for (x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                console.log(1)
            }
            else if (matrix[y][x] == 0) {
                console.log(0);
            }
            else if (matrix[y][x] == 2) {
                console.log(2);
            }
            else if (matrix[y][x] == 3) {
                console.log(3);
            }
            else if (matrix[y][x] == 4) {
                console.log(4);
            }
            else if (matrix[y][x] == 5) {
                console.log(5);
            }
            else if (matrix[y][x] == 6) {
                console.log(6);
            }
            else if (matrix[y][x] == 7) {
                console.log(7);
            }
            else if (matrix[y][x] == 8) {
                console.log(8);
            }
        }
    }
}, 20);


for (var i in grassArr) {
    grassArr[i].mul();
}
for (var i in grassEaterArr) {
    grassEaterArr[i].eat();
}
for (var i in predatorArr) {
    predatorArr[i].eat();
}
for (var i in humanArr) {
    humanArr[i].exterminate();
}
for (var i in snailArr) {
    snailArr[i].move();
}
for (var i in slimeArr) {
    slimeArr[i].die();
}
for (var i in autoArr) {
    autoArr[i].exterminate();
}







function mat(m, n) {
    var matrix = [];
    for (y = 0; y < m; y++) {
        matrix[y] = [];
        for (x = 0; x < n; x++) {
            matrix[y][x] = Math.round(Math.random());
        }
    }


    matrix[10][50] = 2;
    matrix[24][30] = 2;
    matrix[76][76] = 2;
    matrix[34][97] = 2;
    matrix[34][72] = 2;
    matrix[32][33] = 2;
    matrix[82][54] = 2;
    matrix[94][2] = 2;
    matrix[12][14] = 2;
    matrix[72][14] = 2;
    matrix[34][83] = 2;
    matrix[63][22] = 2;
    matrix[87][54] = 2;
    matrix[52][12] = 2;
    matrix[45][12] = 2;
    matrix[52][4] = 2;
    matrix[99][36] = 2;

    matrix[38][36] = 3;
    matrix[95][23] = 3;
    matrix[53][23] = 3;
    matrix[34][83] = 3;
    matrix[93][34] = 3;
    matrix[83][85] = 3;
    matrix[14][23] = 3;
    matrix[4][64] = 3;
    matrix[42][57] = 3;
    matrix[14][34] = 3;
    matrix[78][23] = 3;
    matrix[53][84] = 3;
    matrix[14][63] = 3;
    matrix[75][3] = 3;
    matrix[25][94] = 3;
    matrix[84][23] = 3;
    matrix[73][54] = 3;
    matrix[45][23] = 3;
    matrix[92][24] = 3;

    matrix[2][45] = 4;
    matrix[35][23] = 4;
    matrix[23][63] = 4;
    matrix[84][93] = 4;
    matrix[52][45] = 4;
    matrix[83][45] = 4;
    matrix[43][5] = 4;
    matrix[73][2] = 4;
    matrix[94][45] = 4;
    matrix[41][23] = 4;
    matrix[84][45] = 4;
    matrix[52][82] = 4;
    matrix[63][45] = 4;
    matrix[74][31] = 4;
    matrix[23][4] = 4;
    matrix[52][95] = 4;

    matrix[64][19] = 5;
    matrix[9][19] = 5;
    matrix[74][85] = 5;
    matrix[85][12] = 5;
    matrix[53][23] = 5;
    matrix[64][19] = 5;
    matrix[23][85] = 5;
    matrix[14][75] = 5;
    matrix[24][98] = 5;
    matrix[53][23] = 5;
    matrix[31][45] = 5;
    matrix[24][19] = 5;
    matrix[85][43] = 5;
    matrix[64][12] = 5;
    matrix[4][75] = 5;
    matrix[97][2] = 5;
    matrix[14][22] = 5;
    matrix[66][48] = 5;

    matrix[34][24] = 7;
    matrix[58][83] = 7;
    matrix[53][12] = 7;
    matrix[85][24] = 7;
    matrix[64][25] = 7;

    return matrix;
}

