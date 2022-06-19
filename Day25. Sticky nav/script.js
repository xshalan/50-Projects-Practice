const nav = document.querySelector('.nav')
const menu_button = document.querySelector('.menu-toggle')
const menu_mobile = document.querySelector('.menu')
window.addEventListener('scroll',()=>{
    let navOffset = nav.offsetHeight
    let scrollY = window.scrollY
    if(scrollY > navOffset+150){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
})

menu_button.addEventListener('click',()=>{
    menu_button.classList.toggle('close')
    menu_mobile.classList.toggle('mobile')

})

window.addEventListener('resize',()=>{
    var newWidth = window.innerWidth;
    if(newWidth>560){
        menu_mobile.classList.remove('mobile')
        menu_button.classList.remove('close')
    }
})
console.log(window.scrollY)
