export default class Sandbox {
	constructor(canvas, cols, rows, tileSize, materials) {
		this.canvas = canvas;
		this.cols = cols;
		this.rows = rows;
		this.tileSize = tileSize;
		this.materials = materials;

		this.canvas.width = this.cols;
		this.canvas.height = this.rows;
		this.canvas.style.transform = `translate(-50%, -50%) scale(${this.tileSize}`;
		this.ctx = canvas.getContext("2d");
		this.imgData = this.ctx.getImageData(0, 0, canvas.width, canvas.height);

		this.loop = this.loop.bind(this);
		requestAnimationFrame(this.loop);
	}
	update() {

	}
	draw(ctx) {
		var pixels = this.imgData.data;
		for (var i = 0; i < pixels.length;) {
			pixels[i++] = Math.random() * 256;
			pixels[i++] = Math.random() * 256;
			pixels[i++] = Math.random() * 256;
			pixels[i++] = 255;
		}
		ctx.putImageData(this.imgData, 0, 0);
	}
	loop() {
		this.update();
		this.draw(this.ctx);
		requestAnimationFrame(this.loop);
	}
}
