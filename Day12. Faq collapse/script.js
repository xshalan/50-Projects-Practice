const toggle = document.querySelectorAll('.faq-toggle')
const faq = document.querySelectorAll('.faq')
toggle.forEach(btn=>{{
    btn.addEventListener('click',()=>{
        btn.parentNode.classList.toggle('active')
    })
}})
