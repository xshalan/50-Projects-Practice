const GITHUB_API_URL = "https://api.github.com/users/"
const REPO_API = '/repos?sort=created'

const searchForm = document.getElementById('form')

const searchInput = document.getElementById('search')
const card_info = document.querySelector('.card-info')

async function getRepos(username) {
    try {
        const REPO_URL = GITHUB_API_URL + username + REPO_API
        const { data } = await axios(REPO_URL)
        console.log(data)
        createRepos(data)
    } catch (error) {
        //error
    }
}



async function getUser(username) {
    try {
        const { data } = await axios(GITHUB_API_URL + username)

        createUserCard(data)
        getRepos(username)
    } catch (err) {
        // if(err.response.status == 404) {
        //     createErrorCard(user)
        // }
        createErrorCard(username)
        console.log(err)

    }
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = searchInput.value
    searchInput.value = ''
    getUser(user)
})
const createRepos = (data) => {
    const reposEl = document.querySelector('.repos')

    data.slice(0, 5)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = repo.html_url
            repoEl.innerText = repo.name
            repoEl.target = '_blank'
            reposEl.appendChild(repoEl)
            console.log(repo.html_url)
        })

}
const createUserCard = (data) => {
    card_info.innerHTML = `
    <div class="profile-img">
            <img src="${data.avatar_url}" />
        </div>

        <div class="user-info">
            <h2>${data.name}</h2>
            <p>${data.bio}</p>
            <ul>
                <li>${data.followers} <strong>Followers</strong></li>

                <li>${data.following}  <strong>Following</strong></li>

                <li>${data.public_repos}  <strong>Repos</strong></li>
            </ul>
     
            <div class="repos">
            
        </div>

        </div>
    `
}

function createErrorCard(username) {
    card_info.innerHTML = `
    <div class="error">
            <h2>No profile found for <strong>${username}</strong></h2>
        </div>
        `


}
