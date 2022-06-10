const API_KEY = 'ad0fe420d1b89fe509648e261f973441'
const MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1`
const SEARCH_API = `https://api.themoviedb.org/3/search/company?api_key=${API_KEY}&query=`
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500'


const searchForm = document.getElementById('search-form')
const searchInput = document.getElementById('search')
const moviesContainer = document.querySelector('.container')

getMovies(MOVIES_URL)

async function getMovies(url) {
    const res = await fetch(url)
        .then(res => res.json())
    showMovies(res.results)
}

function showMovies(movies) {
    moviesContainer.innerHTML = ""
    movies.forEach(movie => {
        const { original_title, poster_path, vote_average, overview } = movie
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        let rating_class = "green"
       if(vote_average < 6){
        rating_class = "red"
       }else if(vote_average >=8){
        rating_class = "green"
       }else{
        rating_class = "orange"
       }

        movieEl.innerHTML = `
        <img src="${IMAGE_PATH+poster_path}"/>
        <div class="movie-info">
            <h3>${original_title}</h3>
            <span class="${rating_class}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            <p>${overview}</p>
        </div>
        `
        moviesContainer.appendChild(movieEl)
    });

}

searchForm.addEventListener('submit', (event) => {

    const searchValue = searchInput.value
    if (searchValue !== '') {

        getMovies(SEARCH_API + searchValue)
        searchValue = ''
    }
}) 
