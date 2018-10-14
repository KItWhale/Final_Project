var ParentClass = require("./ParentClass.js");
var Matrix = require("./Matrix.js");
var myMatrix = new Matrix(100,100);
var matrix = myMatrix.mat(); 

module.exports = class Slime{
	constructor(x,y,index){
		this.x=x;
		this.y=y;
		this.index=index;
		this.energy=35;
	}
	die(matrix, slimeArr){
		this.energy--;
		if(this.energy<=0){
			matrix[this.y][this.x]=0;
			for (var i in slimeArr) {
                if (this.x == slimeArr[i].x && this.y == slimeArr[i].y) {
                    slimeArr.splice(i, 1);
                    break;
                }
            }
		}
	}
}