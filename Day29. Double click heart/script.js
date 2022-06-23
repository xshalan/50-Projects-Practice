const post = document.querySelector('.img-post')

const times = document.querySelector('.count-clicked')

let clickTime = 0
let clickeCount = 0
post.addEventListener('click', (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if (new Date().getTime() - clickTime < 800) {
            createHeart(e)
            incrementCounter()
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement("span")
    heart.classList.add('heart')
    heart.innerHTML = '♥'
    
    
    let postY = e.clientY
    let postX = e.clientX

    let postTop =   e.target.getBoundingClientRect().top 
    let postLeft =   e.target.getBoundingClientRect().left 
    
    let insideX = postX - postLeft
    let insideY = postY - postTop
    heart.style.top = `${insideY}px`
    heart.style.left = `${insideX}px`
    post.appendChild(heart)
    setTimeout(()=>{
        post.removeChild(heart)
    },1500)
}

const incrementCounter = ()=>{
    times.innerHTML=`${clickeCount++}`
}
