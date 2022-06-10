const left_btn = document.querySelector('.left-arrow')
const right_btn = document.querySelector('.right-arrow')

const slides = document.querySelectorAll('.slide')

//remove every active class 

// add active to the required slide once click on right OR left btn 
let active_slide = 0
showSlide(active_slide)

function showSlide(active_slide) {
    console.log(active_slide)
    slides.forEach(slide=>{
        slide.classList.remove('active')
    })
    slides[active_slide].classList.add('active')
    document.body.style.backgroundImage = slides[active_slide].style.backgroundImage
}

left_btn.addEventListener('click', () => {
    if (active_slide > 0 && active_slide <= slides.length)
        active_slide--
    else
        active_slide = slides.length-1

    showSlide(active_slide)

})

right_btn.addEventListener('click', () => {
    if (active_slide >= 0 && active_slide < slides.length-1)
        active_slide++
    else
        active_slide = 0

    showSlide(active_slide)

})
