const slide = document.getElementById('slide')
const slides = document.querySelectorAll('.slide')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
console.log(slides)



console.log(slides)

let idx = 0
const runSlider = () => {
    idx++
    changeImage()

}

setInterval(runSlider, 2000)
function changeImage(){
    if (idx > slides.length - 1)
        idx = 0
    if (idx < 0)
        idx = slides.length - 1
    slides.forEach(slide => {
        slide.style.transform = `translateX(${-idx * 100}%)`


    })
}
next.addEventListener('click',()=>{
        idx++
        changeImage()
})

prev.addEventListener('click',()=>{
    idx--
    changeImage()
})
