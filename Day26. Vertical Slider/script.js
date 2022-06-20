const slideLeft = document.querySelector('.left-side')
const slideRight = document.querySelector('.right-side')
const slidesLength = slideLeft.querySelectorAll('div').length
const slide_up = document.querySelector('.up-btn')
const slide_down = document.querySelector('.down-btn')


window.addEventListener('keydown', (e) => {
    if (e.code === "ArrowUp") {
        slide('up')
    } else if (e.code === "ArrowDown") {
        slide('down')
    }
})



let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

slide_up.addEventListener('click', () => slide('up'))
slide_down.addEventListener('click', () => slide('down'))

function slide(direction) {
    let sliderHeight = slideLeft.clientHeight
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }

    }

    if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }

    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}
