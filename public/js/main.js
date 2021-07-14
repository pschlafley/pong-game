import Ball from '../lib/Ball.js';
import Rectangle from '../lib/Rect.js';
import { paddleAndBallCollision, mouse } from './helpers.js';

const canvas = document.querySelector('#screen');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillRect(0, 0, canvas.width, canvas.height);


// GAME LOGIC

// variable to set the rectangle's x width to 95% of the innerwidth of the window
let rectX = canvas.width * .95;

const pongBall = new Ball(700, innerHeight / 2, 10, 'red');
const usrPaddle = new Rectangle(rectX, innerHeight / 2, 7, 75, 'white');

// function that draws the canvas, ball, and userPaddle
const init = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    usrPaddle.draw();

    usrPaddle.y = mouse.y;
    pongBall.animate();
};

// function that will detect the collision between the ball and the user's paddle
const collisionDetection = () => {
    if (paddleAndBallCollision(pongBall.x, pongBall.y, pongBall.r, usrPaddle.x, usrPaddle.y, usrPaddle.width, usrPaddle.height)) {
        pongBall.dx *= -1;
    }
};


const startGame = () => {
    requestAnimationFrame(startGame);
    init();
    collisionDetection();
};


const startScreen = () => {
    init();
};

startScreen();
