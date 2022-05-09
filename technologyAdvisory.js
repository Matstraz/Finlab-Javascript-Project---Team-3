/* OFFCANVAS */

let offButton = document.querySelector('.callback')
let input1 = document.querySelector('.canvasName').value
let input2 = document.querySelector('.canvasTel').value

offButton.onclick = function (event){
    event.preventDefault()
    console.log(`success: ${input1} ${input2}`)
}

/* //ALTERNATIVA PER CREARE UN ARRAY
let offButton = document.querySelector('.callback')
let input1 = document.querySelectorAll('.offCavansLarge')

offButton.onclick = function (event){
    event.preventDefault()
    let arr = []
    input1.forEach((element, i) => arr.push([input1[i].id, input1[i].value]));
    console.log(arr)
} */

/* //ALTERNATIVA PER CREARE UN OGGETTO
let offButton = document.querySelector('.callback')
let input1 = document.querySelectorAll('.offCavansLarge')

offButton.onclick = function (event){
    event.preventDefault()
    let obj = {}
    input1.forEach((element, i) => obj[input1[i].id] = input1[i].value);
    console.log(obj)
} */

/* MODALE */
let modButtom = document.querySelector('.modalButton')
let modalAnswers = document.querySelectorAll('.modalSelect')


modButtom.onclick = function (event){
    event.preventDefault()
    let objModal = {}
    modalAnswers.forEach((element, i) => objModal[modalAnswers[i].id] = modalAnswers[i].value);
    console.log(objModal)
}

/* FORM */

let formButtom = document.querySelector('.formButton')
let formAnswers = document.querySelectorAll('.formSelect')

formButtom.onclick = function (event){
    event.preventDefault()
    let objForm = {}
    formAnswers.forEach((element, i) => objForm[formAnswers[i].id] = formAnswers[i].value);
    console.log(objForm)
}