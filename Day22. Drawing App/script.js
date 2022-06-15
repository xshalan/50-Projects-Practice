const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const colorPicker = document.querySelector('.color')
const increaseFont = document.querySelector('.increase')
const decreaseFont = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
const rectBtn = document.querySelector('.rect')

let x, y
let size = 5
let isPressed = false
let isRectPressed = false
var color = '#000'
colorPicker.addEventListener('change', (e) => {
    color = e.target.value
})
rectBtn.addEventListener('click', () => {
    isRectPressed = true
})
function drawRect(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.rect(x1, y1, x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, true); // Outer circle
    ctx.fillStyle = color;
    ctx.fill();

}
function drawLine(x1, y1, x2, y2) {

    ctx.beginPath();
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();

}
canvas.addEventListener('mousedown', (e) => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY
    if (!isRectPressed)
        drawCircle(x, y)
})
canvas.addEventListener('mouseup', (e) => {
    isPressed = false
    isRectPressed = false
    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    x2 = e.offsetX
    y2 = e.offsetY
    if (isPressed && !isRectPressed) {
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2
        y = y2
    } else if (isPressed && isRectPressed) {
        ctx.clearRect(x, y,x2,y2)
        drawRect(x, y, Math.abs(x2 - x), Math.abs(y2 - y))
    }
})

const updateScreen = () => {
    document.querySelector('.size').innerHTML = size
}
increaseFont.addEventListener('click', () => {
    size += 5
    if (size >= 50) {
        size = 50
    }
    updateScreen()
})


decreaseFont.addEventListener('click', () => {
    size -= 5
    if (size <= 5) {
        size = 5
    }
    updateScreen()
})


reset.addEventListener('click', () => {
    size = 5
    ctx.clearRect(0, 0, canvas.width, canvas.height);

})
