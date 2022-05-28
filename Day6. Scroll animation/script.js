const boxes = document.querySelectorAll('.content-box')





const checkBoxes = () => {
    const triggerPoint = window.innerHeight / 5 * 4
    boxes.forEach(box => {
        const boxTop = (box.getBoundingClientRect().top)
        if (boxTop < triggerPoint) {
            box.classList.add('show')
            console.log('show')
        } else {
            box.classList.remove('show')
            console.log('remove')
        }

    })
}
checkBoxes()
window.addEventListener('scroll', checkBoxes)
