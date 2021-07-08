const canvas = document.querySelector('#screen');

// function to detect when the ball collides with the user's paddle
export function paddleAndBallCollision(bx, by, br, px, py, pw, ph) {
    return bx < px + pw && by < py + ph && px < bx + br && py < by + br;
};

// create an object with y variable
export let mouse = {
    y: innerHeight / 2
};

// add the mousemove event listener to the mouse's y key and set it equal to the y position of the mouse when it moves onto the browers
canvas.addEventListener("mousemove", function (e) {
    mouse.y = e.clientY;
});