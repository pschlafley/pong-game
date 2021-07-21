const canvas = document.querySelector('#screen');
const ctx = canvas.getContext('2d');

export default class Net {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    };

};