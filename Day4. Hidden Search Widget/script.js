const searchBtn = document.querySelector('.btn')
const searchInput = document.querySelector('.search')
const input = document.querySelector('.input')

searchBtn.addEventListener('click',()=>{
    searchInput.classList.toggle('active')
    input.focus()
})
