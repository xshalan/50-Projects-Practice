const cardHeader = document.querySelector('.card-header')
const title = document.querySelector('.card-title')
const excerp = document.querySelector('.excerp')
const authorImg = document.querySelector('.author-img')
const authorName = document.querySelector('.author-name')
const authorDate = document.querySelector('.author-date')

const animated_bg = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')

function getData() {
    cardHeader.innerHTML = '<img src="https://source.unsplash.com/random/300x200" alt="">'

    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerp.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, repudiandae...'


    authorImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
    authorName.innerHTML = 'John Doe'
    authorDate.innerHTML = 'Oct 08, 2020'
}

function stopAnimation() {
    animated_bg.forEach(div => {
        div.classList.remove('animated-bg')
    })

    animated_bg_text.forEach(div => {
        div.classList.remove('animated-bg-text')
    })
}
setTimeout(() => {
    stopAnimation()
    getData()
}, 2500)
