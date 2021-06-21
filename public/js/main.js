const canvas = document.querySelector('#screen');
const ctx = canvas.getContext('2d');


const draw = () => {
    if (ctx) {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        let leftRect = new Path2D();
        leftRect.rect(10, 250, 10, 100);
        ctx.fillStyle = 'white';
        ctx.fill(leftRect);

        let rightRect = new Path2D();
        rightRect.rect(680, 250, 10, 100);
        ctx.fillStyle = 'white';
        ctx.fill(rightRect);

        let ball = new Path2D();
        ball.arc(350, 300, 10, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill(ball);
    };
};

draw();