const canvas = document.querySelector('#screen');
const ctx = canvas.getContext('2d');


// function displayMousePosition() {

//     ctx.font = "14px Arial";

//     ctx.textAlign = "center";

//     ctx.textBaseline = "middle";

//     ctx.fillStyle = "rgb(255, 255, 255) ";

//     var str = "x = " + this.mposX + ", " + "y = " + this.mposY;

//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     ctx.fillText(str, canvas.width / 2, canvas.height / 2, canvas.width - 20);
// }

export default class Rectangle {
    constructor(x, y, width, height, c) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.c = c;
    }

    animate(e) {
        e.preventDefault();
        // get the x position of the mouse
        // get the difference between the mouse position and the left hand side of the canvas
        this.cposX = e.pageX - canvas.offsetLeft;

        // get the y position
        // ge the difference between the mouse position and the top of the canvas
        this.cposY = e.pageY - canvas.offsetTop;
        // displayMousePosition();
    }

    // update() {

    // }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
    }
}