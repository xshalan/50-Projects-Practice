const toggle_theme = document.querySelector('.mode-toggle')

toggle_theme.addEventListener('click',()=>{
    const html = document.querySelector('html')
    html.classList.toggle('dark')
})
