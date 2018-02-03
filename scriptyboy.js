var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "teal";
var shape = 0;

var clear_button = document.getElementById("clear");
var toggle_button = document.getElementById("toggle");

var clear_canvas = function(){
	ctx.clearRect(0,0, canvas.width, canvas.height);
};
var change_shape = function(){
	if (shape == 0){
		shape = 1;
		console.log("circle");
	}
	else{
		shape = 0;
		console.log("square");
	}
};
var getMousePos = function(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}
var makey_shapey = function(e){
	var pos = getMousePos(canvas, e);
	if (shape == 0){
		ctx.fillRect(pos.x, pos.y, 50, 50);
	};
	if (shape == 1){
		ctx.beginPath();
		ctx.arc(pos.x, pos.y, 25, 0, 2 * Math.PI);
		ctx.fill();
	};
};

clear_button.addEventListener("click", clear_canvas);
toggle_button.addEventListener("click", change_shape);
canvas.addEventListener("click", makey_shapey);