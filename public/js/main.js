import Ball from '../lib/Ball.js';

const canvas = document.querySelector('#screen');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillRect(0, 0, canvas.width, canvas.height);

const pongBall = new Ball(700, 300, 10, 'red');

function Update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pongBall.animate();

    requestAnimationFrame(Update);
};

Update();