const canvas = document.querySelector('#screen');
const ctx = canvas.getContext('2d');
import Rectangle from '../lib/Rect.js';
let mouseY = canvas.height / 2;

let mouse = {
    y: innerHeight / 2
};

addEventListener("mousemove", function (e) {
    mouse.y = e.clientY;
})


const usrRect = new Rectangle(1500, mouseY, 7, 75, 'white');

const getDistance = (x1, y1, x2, y2) => {
    let xDist = x2 - x1;
    let yDist = y2 - y1;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}
export default class Ball {
    constructor(x, y, r, c) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = c;

        // dx and dy determine the velocity of the object in motion
        // create a random number between 1 and 4
        this.dx = (Math.random() * 4) + 1;
        // create a random number between  -4 and 4 
        // if this is equal to 1 then it will be a positive number else it will be negative allowing for the ball to go in different directions
        this.dx *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;

        this.dy = (Math.random() * 4) + 1;
        this.dy *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    }

    animate() {

        if (getDistance(this.x, this.y, usrRect.x, usrRect.y) < this.r + usrRect.width) {
            this.dx = -this.dx;
            this.dy = -this.dy;
        }

        // add the velocity to the x and y variables to get the ball to move
        this.x += this.dx;
        this.y += this.dy;

        // if x + r is greater than the width of the canvas or if x - r is < 0 set this.x = to negative velocity value so that the ball bounces off of the walls
        if (this.x + this.r > canvas.width || this.x - this.r < 0) {
            this.dx = -this.dx;
        };


        if (this.y + this.r > canvas.height || this.y - this.r < 0) {
            this.dy = -this.dy;
        };

        this.draw();
    }

    hitPaddle(paddleName) {
        console.log(paddleName);
        // try to stop the ball and reverse its direction if it hits the paddle rectangle
        if (this.x + this.r > usrRect.x && this.y >= usrRect.cposY && this.y <= usrRect.cposY + 75) {
            this.dx = -this.dx;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
    }
};