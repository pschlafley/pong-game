const canvas = document.querySelector('#screen');
const ctx = canvas.getContext('2d');
export default class Ball {
    constructor(x, y, r, c) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = c;

        // dx and dy determine the velocity of the object in motion
        // create a random number between 1 and 4
        this.dx = (Math.random() * 7) + 6;
        // create a random number between  -4 and 4 
        // if this is equal to 1 then it will be a positive number else it will be negative allowing for the ball to go in different directions
        // this.dx *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;

        this.dy = (Math.random() * 4) + 3;
        // this.dy *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    }

    animate() {
        // add the velocity to the x and y variables to get the ball to move
        this.x += this.dx;
        this.y += this.dy;

        // if x + r is greater than the width of the canvas or if x - r is < 0 set this.x = to negative velocity value so that the ball bounces off of the walls
        // if (this.x + this.r > canvas.width || this.x - this.r < 0) {
        //     this.dx = -this.dx;
        // };


        if (this.y + this.r > canvas.height || this.y - this.r < 0) {
            this.dy = -this.dy;
        };

        this.draw();
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
    }
};