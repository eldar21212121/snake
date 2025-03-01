const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');


resizeCanvas();


const gridSize 20;
let snake = [{ x: gridSize * 5, y: gridSize * 5 }];
let food = { x: gridSize * 10, y: gridSize * 10 };
let dx = gridSize;
let dy = 0
let changingDirection = false;




document.addEventListenet('mousedown',changingDirection);
document.addEventListenet('touchstart',changingDirection);
window.addEventListener('resize', resizeCanvas);

function resizeCanvas () {
const.width = window.interWidth;
const.height = window.interHeight;
}
