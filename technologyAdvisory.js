/* OFFCANVAS */

let offCanvasForm = document.getElementById('offCanvasForm')

offCanvasForm.onsubmit = function (event){
    event.preventDefault(event)
    let input1 = document.querySelector('.canvasName').value
    let input2 = document.querySelector('.canvasTel').value
    console.log(`success: ${input1} ${input2}`);
    offCanvasForm.reset()
}

/* MODALE */
let modalForm = document.getElementById('modalForm')
let modalAnswers = document.querySelectorAll('.modalSelect')
let checkboxAnswer = document.querySelector('.checkboxAnswer')

modalForm.onsubmit = function (event){
    event.preventDefault(event)
    let objModal = {}
    modalAnswers.forEach((element) => objModal[element.id] = element.value);
    objModal[checkboxAnswer.id] = checkboxAnswer.checked
    console.log(objModal);
    modalForm.reset()
}

/* FORM */

let bottomForm = document.getElementById('bottomForm')
let formAnswers = document.querySelectorAll('.formSelect')
let checkboxAnswer2 = document.querySelector('.checkboxAnswer2')

bottomForm.onsubmit = function (event){
    event.preventDefault(event)
    let objForm = {}
    formAnswers.forEach((element) => objForm[element.id] = element.value);
    objForm[checkboxAnswer2.id] = checkboxAnswer2.checked
    console.log(objForm);
    bottomForm.reset();
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