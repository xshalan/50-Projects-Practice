const spans = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replyBtn = document.querySelector('.replay')

spans.forEach((span, idx) => {
    const lastItem = spans.length - 1
    span.addEventListener('animationend', (e) => {
        if (e.animationName === 'goIn' && idx !== lastItem) {
            span.classList.remove('in')
            span.classList.add('out')
            console.log(span)
        } else if (e.animationName === 'goOut' && span.nextElementSibling) {
            span.nextElementSibling.classList.add('in')
        } else {
            finalMessage.classList.add('show')
            counter.classList.add('hide')
        }
    })
});


replyBtn.addEventListener('click', () => {
    spans.forEach(span => {
        span.classList.remove('out')
        span.classList.remove('in')
    })
    finalMessage.classList.remove('show')
    counter.classList.remove('hide')
    spans[0].classList.add('in')
})
