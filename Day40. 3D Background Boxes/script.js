
const boxesContainer = document.querySelector('.boxes')
const magicBtn = document.querySelector('.magic-button')
const CONTAINER_SIZE = 500 
const BOX_SIZE = 125 
const BOXES_COUNT = 500/125 

magicBtn.addEventListener('click',()=>{
    boxesContainer.classList.toggle('big')
})
for (let index = 0; index < BOXES_COUNT*BOXES_COUNT; index++) {
    let col = index % BOXES_COUNT 
    let row =Math.floor(index / BOXES_COUNT) 
    console.log(row)
    const boxEL = document.createElement('div')
    boxEL.classList.add('box')
    boxEL.style.backgroundPosition = `${-col*125}px ${-row*125}px`
    boxEL.addEventListener('click',()=>{
        boxesContainer.classList.toggle('big')
    })
    boxesContainer.appendChild(boxEL)
}

