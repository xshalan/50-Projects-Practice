const nav = document.getElementById('nav')

const toggle = document.querySelector('.hamburger-btn')

toggle.addEventListener('click',()=>{
    nav.classList.toggle('active')
})
