const getJoke = document.querySelector('.btn')
const joke = document.querySelector('.joke')

getJoke.addEventListener('click', () => {
    generateJoke()
})


const generateJoke = () => {
    fetch('https://icanhazdadjoke.com',
        {
            headers: {
                Accept: 'application/json',
            },
        })
        .then(res => res.json())
        .then(data => {
            joke.innerHTML = data.joke
        })
}

generateJoke()
