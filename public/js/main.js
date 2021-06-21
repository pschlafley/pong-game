const canvas = document.querySelector('#screen');
const ctx = canvas.getContext('2d');


const draw = () => {
    canvas.style.border = '1px solid orange';
    if (ctx) {
        // // "fillStyle" specifies the color, gradient, or pattern to use inside shapes
        // // The default style is #000 (black)
        // ctx.fillStyle = 'rgb(200, 0, 0)';
        // // ".fillRect()" draws a filled rectandgle shape
        // // .fillRect(x, y, width, height)
        // ctx.fillRect(10, 10, 50, 50);

        // // ctx.fillStyle = 'rgb(0, 0, 200, .5)';
        // // ctx.fillRect(30, 30, 50, 50);

        // // draws a large black square 100 x 100 px on each side
        // ctx.fillRect(25, 25, 100, 100);
        // // erases a 60x60 px square from the center
        // ctx.clearRect(45, 45, 60, 60);
        // // creates a rectangular outline 50x50 px within the cleared square
        // ctx.strokeRect(50, 50, 50, 50);

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
                ctx.beginPath();
                let x = 25 + j * 50;
                let y = 25 + i * 50;
                let radius = 20;
                let startAngle = 0;
                let endAngle = Math.PI + (Math.PI * j) / 2;
                let counterclockwise = i % 2 !== 0;

                ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

                if (i > 1) {
                    ctx.fill();
                } else {
                    ctx.stroke();
                }
            }
        }
    };
};

draw();