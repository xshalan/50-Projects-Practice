const resultEl = document.getElementById("result")
const clipboardEl = document.getElementById("clipboard")
const lengthEl = document.getElementById("password_length")
const upperEl = document.getElementById("uppercase_chkbox")
const lowerEl = document.getElementById("lowercase_chkbox")
const numberEl = document.getElementById("number_chkbox")
const symbolEl = document.getElementById("symbol_chkbox")
const generateEl = document.getElementById("generate-password")

const randomFunc = {
    hasLower: getRandomLower,
    hasUpper: getRandomUpper,
    hasNumber: getRandomNumber,
    hasSymbol: getRandomSymbol,
}

generateEl.addEventListener('click', () => {
    const length = lengthEl.value
    const hasUpper = upperEl.checked
    const hasLower = lowerEl.checked
    const hasNumber = numberEl.checked
    const hasSymbol = symbolEl.checked
    resultEl.value = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length)
})


function generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length) {
    let generatedPassword = ""
    const typesCount = hasLower + hasNumber + hasSymbol + hasUpper
    const typesArr = [{ hasLower }, { hasNumber }, { hasSymbol }, { hasUpper }].filter(item => Object.values(item)[0])
    
    if(typesCount===0)
        return ''

    for (let index = 0; index < length; index +=typesCount ) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            console.log(funcName)
            console.log(randomFunc[funcName])
            generatedPassword += randomFunc[funcName]()
        });
    }

    const finalPassword = generatedPassword.slice(0,length)
    return finalPassword
}
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
    return symbols[Math.floor(Math.random() * symbols.length)]
}

