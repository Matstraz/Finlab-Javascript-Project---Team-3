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

let modButtom = document.querySelector('.modalButton')
let selects = document.querySelectorAll('.modalSelect')


modButtom.onclick = function (event){
    event.preventDefault()
    let obj = {}
    selects.forEach((element, i) => obj[selects[i].id] = selects[i].value);
    console.log(obj)
}

