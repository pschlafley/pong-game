import Ball from '../lib/Ball.js';
import Rectangle from '../lib/Rect.js';
import { paddleAndBallCollision, mouse } from './helpers.js';

const canvas = document.querySelector('#screen');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// variable to set the rectangle's x width to 95% of the innerwidth of the window
let rectX = canvas.width * .95;

const pongBall = new Ball(700, 300, 10, 'red');
const usrPaddle = new Rectangle(rectX, undefined, 7, 75, 'white');

function Update() {
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    usrPaddle.draw();
    // set the y position of the user's paddle equal to the mouse object's y position so that the paddle moves with the mouse on the canvas
    usrPaddle.y = mouse.y;

    pongBall.animate();

    if (paddleAndBallCollision(pongBall.x, pongBall.y, pongBall.r, usrPaddle.x, usrPaddle.y, usrPaddle.width, usrPaddle.height)) {
        pongBall.dx *= -1;
    }

};

Update();
