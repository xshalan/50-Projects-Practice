const smallCups = document.querySelectorAll('.small-cup')
const liters = document.getElementById('liters')
const remained = document.getElementById('remained')
const percentage = document.getElementById('percentage')



smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => {
        console.log(index)
        updateCups(index)
    })
})




function updateCups(clicked) {

    if(smallCups[clicked].classList.contains('full') && 
        !smallCups[clicked+1].classList.contains('full'))
        clicked--;

    smallCups.forEach((cup, index) => {
        if (index <= clicked) {
            cup.classList.add('full')   
        }
        else
            cup.classList.remove('full')
    })
    percentage.innerText = `${(100 / smallCups.length) * (clicked + 1)}%`
    percentage.style.height = `${(100 / smallCups.length) * (clicked + 1)}%`
    const remaining_liters = 2 - (.25 * (clicked + 1))
    liters.innerText = `${remaining_liters}L`

    if (remaining_liters == 0) {
        remained.style.height = 0
    }

}
