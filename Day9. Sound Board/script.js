const sounds = [
    'applause',
'boo',
'gasp',
'tada',
'victory',
'wrong'
]
const buttonBoard = document.querySelector('.button-board')
sounds.forEach(sound=>{
    let btn = document.createElement("button")
    btn.innerHTML = sound
    buttonBoard.appendChild(btn)

    btn.addEventListener('click',()=>{
        stopAllSounds()
        document.getElementById(sound).play()
    })

})
function stopAllSounds(){
    sounds.forEach(sound=>{
        const audio = document.getElementById(sound)
        audio.pause()
        audio.currentTime = 0
    })
}
