const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
let text = "Hello World!"
let idx = 1
let speedValue = 300 / speedEl.value
writeText()
function writeText(){
    textEl.innerText = text.slice(0,idx++)
    if(idx>text.length)
        idx = 1 
    
    setTimeout(writeText,speedValue)
}

speedEl.addEventListener('input',(e)=>{
    speedValue = 500 / e.target.value
})
