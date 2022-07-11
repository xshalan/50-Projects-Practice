
const filter = document.getElementById('filter')
const result = document.getElementById('result')
const listItems = []

getData() 


filter.addEventListener('input',(e)=>filterData(e.target.value))
function filterData(searchTerm){
    listItems.forEach(item=>{
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide')
        }else{
            item.classList.add('hide')
        }
    })
}


async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')
    const { results } = await res.json()

    result.innerHTML = ''
    
    results.forEach(user => {
        
        const liEl = document.createElement('li')
        listItems.push(liEl)
        liEl.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}"/>
            <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city},${user.location.country}</p>
            </div>
    `
    result.appendChild(liEl)
    });


}
