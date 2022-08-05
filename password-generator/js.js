let length1 = document.getElementById('length')
let uppercase = document.getElementById('uppercase')
let lowercase = document.getElementById('lowercase')
let numbers = document.getElementById('numbers')
let symbols = document.getElementById('symbols')
let result = document.getElementById('result')
let generate = document.getElementById('generate')



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
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

let passwordLength = length1.value

let generateFunctions = {
    uppercase : getRandomUpper,
    lowercase : getRandomLower,
    numbers : getRandomNumber,
    symbols : getRandomSymbol
}

let checkedElementsState = {
    uppercase : uppercase.checked,
    lowercase : lowercase.checked,
    numbers : numbers.checked,
    symbols : symbols.checked
}

length1.addEventListener('input', (e) =>{
    passwordLength = e.target.value;
})

document.querySelectorAll('.setting input[type="checkbox"]').forEach((checkbox) =>{
    checkbox.addEventListener('click', (e)=>{
        checkedElementsState[e.target.id] = !checkedElementsState[e.target.id]
    })
})

generate.addEventListener('click',() =>{
    let password = generatePassword(checkedElementsState, passwordLength)
    result.innerText = password
})

let generatePassword = (checkboxs, passLength) =>{
    let password = ''
    let checkedCheckboxes = Object.keys(checkboxs).filter(item => checkboxs[item] == true)
    console.log(checkedCheckboxes)
    while(password.length < passLength){
        let rand = Math.floor(Math.random() * checkedCheckboxes.length)
        password += generateFunctions[checkedCheckboxes[rand]]()
    }
    console.log(checkboxs)
    return password;
}






// let checkedCheckboxes = Object.keys(checkboxs).filter(item => checkboxs[item])
//     while(password.length < passLength){
//         let randomNum = Math.floor(Math.random() * checkedCheckboxes.length)
//         password += generateFunctions[checkedCheckboxes[randomNum]]();
//     }