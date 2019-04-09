import Sandbox from "./Sandbox.js";

var cols = 160;
var rows = 120;
var tileSize = 4;

const init = () => {
	var canvas = document.getElementById("canvas");
	var materials = null;
	var sandbox = new Sandbox(canvas, cols, rows, tileSize);
};
document.addEventListener("DOMContentLoaded", init);
