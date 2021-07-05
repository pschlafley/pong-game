const canvas = document.querySelector('#screen');
const ctx = canvas.getContext('2d');

export default class Rectangle {
    constructor(x, y, width, height, c) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.c = c;

        this.cposY;

    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
    }
}