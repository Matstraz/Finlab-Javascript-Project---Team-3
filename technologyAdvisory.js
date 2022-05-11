/* OFFCANVAS */

let offButton = document.querySelector('.callback')

offButton.onclick = function (event){
    event.preventDefault(event)
    let input1 = document.querySelector('.canvasName').value
    let input2 = document.querySelector('.canvasTel').value
    if(input1&&input2 !== ""){
        console.log(`success: ${input1} ${input2}`)
    }else{
        throw Error('each blanket must be filled')
    }
}

/* //ALTERNATIVA PER CREARE UN ARRAY CON COPPIE DI ARRAY [key, value]
let offButton = document.querySelector('.callback')
let input1 = document.querySelectorAll('.offCavansLarge')

offButton.onclick = function (event){
    event.preventDefault()
    let arr = []
    input1.forEach((element, i) => arr.push([input1[i].id, input1[i].value]));
    console.log(arr)
} */

/* MODALE */
let modButtom = document.querySelector('.modalButton')
let modalAnswers = document.querySelectorAll('.modalSelect')

modButtom.onclick = function (event){
    event.preventDefault(event)
    let objModal = {}
    modalAnswers.forEach((element, i) => objModal[modalAnswers[i].id] = modalAnswers[i].value);
    let checkboxAnswer = document.querySelector('.checkboxAnswer')
    objModal[checkboxAnswer.id] = checkboxAnswer.checked
    console.log(objModal)
}

/* FORM */

let formButtom = document.querySelector('.formButton')
let formAnswers = document.querySelectorAll('.formSelect')
let checkboxAnswer2 = document.querySelector('.checkboxAnswer2')

formButtom.onclick = function (event){
    event.preventDefault(event)
    let objForm = {}
    formAnswers.forEach((element, i) => objForm[formAnswers[i].id] = formAnswers[i].value);
    objForm[checkboxAnswer2.id] = checkboxAnswer2.checked
    console.log(objForm)
}

/* COOKIES */

let cookiesButton = document.querySelector('.cookiesButton')
let cookiesBox = document.querySelector('.cookies')
let yesCookies = document.querySelector('.yesCookies')
let noCookies = document.querySelector('.noCookies')

cookiesButton.onclick = function(event){
    event.preventDefault(event)
    if(yesCookies.checked == true){
        console.log(`${yesCookies.id}: ${yesCookies.value}`)
        cookiesBox.classList.add('d-none')
    }else if(noCookies.checked == true){
        console.log(`${noCookies.id}: ${noCookies.value}`)
        cookiesBox.classList.add('d-none')
    }
}