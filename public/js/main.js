const canvas = document.querySelector('#screen');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillRect(0, 0, canvas.width, canvas.height);


// Ball class that will be used to hold ball information
class Ball {
    constructor(x, y, r, c) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = c;

        // create a random number between 1 and 4
        this.dx = (Math.random() * 4) + 1;
        // create a random number between  -4 and 4 
        // if this is equal to 1 then it will be a positive number else it will be negative allowing for the ball to go in different directions
        this.dx *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;

        this.dy = (Math.random() * 4) + 1;
        this.dy *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    }

    animate = function () {
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

    draw = function () {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
    }
};


const pongBall = new Ball(700, 300, 10, 'red');

function Update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pongBall.animate();

    requestAnimationFrame(Update);
};

Update();