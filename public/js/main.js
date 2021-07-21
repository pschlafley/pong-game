import Ball from '../lib/Ball.js';
import Paddle from '../lib/Rect.js';
import { paddleAndBallCollision, mouse } from './helpers.js';

const canvas = document.querySelector('#screen');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// GAME LOGIC

// variable to set the rectangle's x width to 95% of the innerwidth of the window
const halfHeight = canvas.height / 2;
const haflWidth = canvas.width / 2;
let rectX = canvas.width * .95;

const pongBall = new Ball(haflWidth, halfHeight, 10, 'red');
const usrPaddle = new Paddle(rectX, halfHeight, 7, 75, 'white');
const aiPaddle = new Paddle(80, halfHeight, 7, 75, 'blue');

// function that draws the canvas, ball, and userPaddle
const init = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    usrPaddle.draw();
    aiPaddle.draw();

    if (usrPaddle.y + mouse.y + usrPaddle.height < canvas.height) {
        usrPaddle.y = mouse.y;
    };

    pongBall.draw();
    // pongBall.animate();
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

startGame();