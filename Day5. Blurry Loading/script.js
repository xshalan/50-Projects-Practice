const bg = document.querySelector('.bg')
const loadingText = document.querySelector('.loading-text')

let loading = 0
const delay = 20
let int = setInterval(()=>{
    loading++
    if(loading>99){
        clearInterval()
    }
    loadingText.innerText=`${loading}%`
    loadingText.style.opacity = scale(loading,[0,100],[1,0])
    let blur = scale(loading,[0,100],[100,0])
    console.log(blur)
    bg.style.filter = `blur(${blur}px)`

},delay)


const scale = (number, [inMin, inMax], [outMin, outMax]) => {
    // if you need an integer value use Math.floor or Math.ceil here
    return (number - inMin) / (inMax - inMin) * (outMax - outMin) + outMin;
}
