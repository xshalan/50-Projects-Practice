const board = document.querySelector('.container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 10000
for (let index = 0; index < SQUARES; index++) {
    const squareEl = document.createElement('div')
    squareEl.classList.add('square')
    squareEl.addEventListener('mouseover', () => {
        const color = getRandomColor()
        squareEl.style.background = color
        squareEl.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
        
    })

    squareEl.addEventListener('mouseout', () => {
        squareEl.style.background = '#1d1d1d'
        squareEl.style.boxShadow = '0 0 2px #000'
    })
    board.appendChild(squareEl)

}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

