const fill = document.querySelector('.fill')

const boxes = document.querySelectorAll('.img-border')

fill.addEventListener('dragstart',dragStart)
fill.addEventListener('dragend',dragEnd)

boxes.forEach(box=>{
    box.addEventListener('dragover',dragOver)
    box.addEventListener('dragenter',dragEnter)
    box.addEventListener('dragleave',dragLeave)
    box.addEventListener('drop',dragDrop)
})
function dragStart(){
    this.className += ' hold'
    setTimeout(()=>{
        this.className ='ivisible'
    },0)
}
function dragEnd(){
    this.className = 'fill'
}
function dragOver(e){
    e.preventDefault()
    console.log('drag Over')
}
function dragEnter(e){
    e.preventDefault()
    this.className += ' hovered'
}
function dragLeave(){
    this.className = 'img-border'
}
function dragDrop(){
    this.className = 'img-border'
    this.append(fill)
}
