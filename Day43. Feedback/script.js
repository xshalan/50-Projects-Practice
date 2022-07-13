const ratings  = document.querySelectorAll('.rating')
const sendFeedback = document.getElementById('send-feedback')
const container = document.querySelector('.container')
sendFeedback.addEventListener('click',()=>{
    container.innerHTML = `
    <h3><span class="heart">❤</span></h3>
    <strong>Thank you!</strong>
    <h3>Feedback: ${selectedRating}</h3>
    <small>We'll use your feedback to improve our customer support<s/mall>
    `

})
let selectedRating = 'Love'
ratings.forEach(rate=>{
    rate.addEventListener('click',(e)=>{
        clearSelectedRating();
        rate.classList.add('selected')
        selectedRating = e.target.nextElementSibling.innerText
        console.log(selectedRating)
    })
})
function clearSelectedRating(){
    ratings.forEach(rate=>{
        rate.classList.remove('selected')
    })
}
