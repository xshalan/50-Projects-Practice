const searchBtn = document.querySelector('.btn')
const searchInput = document.querySelector('.search')
const input = document.querySelector('.input')

searchBtn.addEventListener('click',()=>{
    searchInput.classList.toggle('active')
    input.focus()
})

document.body.addEventListener('click',()=>{
    searchInput.classList.remove('active')
},true)
// For reference:
//https://www.w3.org/TR/DOM-Level-3-Events///#event-flow
//https://stackoverflow.com/a/8054864
