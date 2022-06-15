const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const colorPicker = document.querySelector('.color')
const increaseFont = document.querySelector('.increase')
const decreaseFont = document.querySelector('.decrease')
const reset = document.querySelector('.reset')

let x, y
let size = 5
let isPressed = false
var color = '#000'
colorPicker.addEventListener('change', (e) => {
    color = e.target.value
})
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
    drawCircle(x, y)
})
canvas.addEventListener('mouseup', (e) => {
    isPressed = false
    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        x2 = e.offsetX
        y2 = e.offsetY
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2
        y = y2
    }
})

const updateScreen = () => {
    document.querySelector('.size').innerHTML = size
}
increaseFont.addEventListener('click', () => {
    size += 5
    if(size>=50){
        size = 50
    }
    updateScreen()
})


decreaseFont.addEventListener('click', () => {
    size -= 5
    if(size<=5){
        size = 5
    }
    updateScreen()
})


reset.addEventListener('click', () => {
    size = 5
    ctx.clearRect(0, 0, canvas.width, canvas.height);

})
