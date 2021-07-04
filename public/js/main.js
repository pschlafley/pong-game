import Ball from '../lib/Ball.js';
import Rectangle from '../lib/Rect.js';

const canvas = document.querySelector('#screen');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouseY = canvas.height / 2;

ctx.fillRect(0, 0, canvas.width, canvas.height);

const pongBall = new Ball(700, 300, 10, 'red');
const usrRect = new Rectangle(1500, mouseY, 7, 75, 'white');

// varaiables to get the position of the mouse wherever it moves on the canvas
let cposX;
let cposY;


const init = () => {
    usrRect.draw();
}

window.addEventListener('load', usrRect.animate);




// function Update() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     usrRect.draw();

//     pongBall.animate();

//     requestAnimationFrame(Update);
// };

// Update();