const nav = document.querySelector('.nav')

window.addEventListener('scroll',()=>{
    let navOffset = nav.offsetHeight
    let scrollY = window.scrollY
    if(scrollY > navOffset+150){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
})

console.log(window.scrollY)
