const open_menu = document.querySelector('.open-btn')
const close_menu = document.querySelector('.close-btn')
const navs = document.querySelectorAll('.nav')

open_menu.addEventListener('click',()=>{
    navs.forEach(nav=>[
        nav.classList.add('visible')
    ])
})

close_menu.addEventListener('click',()=>{
    navs.forEach(nav=>[
        nav.classList.remove('visible')
    ])
})
