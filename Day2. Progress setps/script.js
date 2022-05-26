const progressLine = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.progress-circle')

let curentActive = 1;


prev.addEventListener('click', () => {
    curentActive--
    if (curentActive < 1) {
        curentActive = 1
    }
    update()
})
next.addEventListener('click', () => {
    curentActive++
    if (curentActive > circles.length) {
        curentActive = circles.length
    }
    update()
})

function update() {
    circles.forEach((element, idx) => {
        if (idx < curentActive) {
            element.classList.add('active')
        } else {
            element.classList.remove('active')
        }
        
    });
    progressLine.style.width = (curentActive-1)/(circles.length-1)*100+'%'
    if(curentActive===1){
        prev.disabled=true
    }else if(curentActive===circles.length){
        next.disabled=true
    }else{
        prev.disabled=false
        next.disabled=false
    }
}

