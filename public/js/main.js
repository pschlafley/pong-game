import Ball from '../lib/Ball.js';
import Rectangle from '../lib/Rect.js';

const canvas = document.querySelector('#screen');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillRect(0, 0, canvas.width, canvas.height);


let mouse = {
    y: innerHeight / 2
};

addEventListener("mousemove", function (e) {
    mouse.y = e.clientY;
})

const pongBall = new Ball(700, 300, 10, 'red');
const usrRect = new Rectangle(1500, undefined, 7, 75, 'white');

function Update() {
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    usrRect.draw();
    usrRect.y = mouse.y;

    pongBall.animate();
};

Update();


// function rectUpdate(e) {
//     usrRect.animate(e);

//     requestAnimationFrame(rectUpdate);
// };

// ballUpdate();
// window.addEventListener('mousemove', rectUpdate);