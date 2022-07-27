const game_screen_play = document.querySelector(".game-screen-play")
const game_screen = document.querySelector(".game-screen")
const board_time = document.querySelector('.game-screen-time-counter')
const board_score = document.querySelector('.game-screen-score-counter')
const selectInsects = document.querySelectorAll('.select-insect-box')
const playGameButton = document.querySelector('.play-game-btn')
const selectInsectsHero = document.querySelector('.select-insect')
const playGameHero = document.querySelector('.play-game')

let score = 0
let seconds = 0 
let minutes = 0 

let selected_insect_img = ""
let selected_insect_alt = ""

removeAllUpClasses()


function startInterval(){
    setInterval(()=>{
        if(seconds<60){
            seconds +=1
        }else{
            seconds = 0
            minutes +=1
        }
        
        console.log(minutes)
        console.log(seconds%60)
        board_time.innerHTML = `${(minutes<=9)?'0'+minutes : minutes}:${(seconds<=9)?'0'+seconds : seconds}`
    },1000)
}

selectInsects.forEach(selectDiv => {
    selectDiv.addEventListener('click', (e) => {
        selected_insect_img = e.target.currentSrc
        selected_insect_alt = e.target.alt
        console.log(selected_insect_img)
        selectInsectsHero.classList.add('up')
        game_screen.classList.remove('hidden')

        createInsect(randomXY().x, randomXY().y)
        startInterval()
    })
})

playGameButton.addEventListener('click', () => {
    playGameHero.classList.add('up')
})

function removeAllUpClasses() {
    document.querySelectorAll('.hero').forEach(hero => {
        if (hero.classList.contains('up')) {
            hero.classList.remove('up')
            game_screen.classList.add('hidden')
        }
    })
}

function createInsect(x, y) {
    const insectEl = document.createElement('button')
    insectEl.classList.add('game-screen-insect')
    insectEl.innerHTML = `
    <img src="${selected_insect_img}" alt="${selected_insect_alt}" class="select-insect-box-img">
    `
    console.log(insectEl.innerHTML)
    insectEl.style.top = `${y}px`
    insectEl.style.left = `${x}px`

    insectEl.addEventListener('click', () => {
        score += 1
        if(score==20){
            document.querySelector('.alert').classList.add('show')
        }
        board_score.innerHTML = score
        game_screen_play.removeChild(insectEl)
        createInsect(randomXY().x, randomXY().y)
        setTimeout(()=>{
            createInsect(randomXY().x, randomXY().y)
        },300)
    })
    game_screen_play.appendChild(insectEl)
}

function randomXY() {
    let init_position = { 'x': 50, 'y': 50 }
    const screen_width = game_screen_play.offsetWidth -100
    const screen_height = game_screen_play.offsetHeight -100
    init_position.x = randomInteger(init_position.x,screen_width)
    init_position.y = randomInteger(init_position.y,screen_height)
    console.log(screen_width,'x',screen_height)
    console.log(init_position)
    return init_position

}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
