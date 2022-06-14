const btn = document.getElementById("button")
const circleEl = document.createElement("span")

btn.addEventListener('click',(e)=>{
    const windowX = e.clientX
    const windowY = e.clientY

    const btnTop = e.target.offsetTop
    const btnLeft = e.target.offsetLeft

    const insideX = windowX - btnLeft
    const insideY = windowY - btnTop
    console.log(btnLeft , windowX)
    circleEl.classList.add('circle')
    circleEl.style.top = `${insideY}px`
    circleEl.style.left = `${insideX}px`

    btn.appendChild(circleEl)
})
