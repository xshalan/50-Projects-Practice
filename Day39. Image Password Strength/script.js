const password = document.getElementById('password')
const backgroundImage = document.querySelector('.bg-image')
const PASSWORD_LENGTH = 10 

password.addEventListener('input',(e)=>{
    let passwordInput = e.target.value.length
    if(passwordInput <= PASSWORD_LENGTH &&passwordInput >= 0)
    backgroundImage.style.filter = `blur(${20-(passwordInput*2)}px)
    `
})


