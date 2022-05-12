// offcanvas
let btnJs = document.querySelector('.btn-js');
btnJs.onclick = function(event) {
    let input1 = document.querySelector('.banane').value;
    let input2 = document.querySelector('.banane2').value;

    event.preventDefault();
    console.log(`success: ${input1}, ${input2}`);
}

//modale
let modalForm = document.getElementById('modalForm')
let modalAnswers = document.querySelectorAll('.js-input-2')
let modalCheck = document.getElementById('checkbox3')

modalForm.onsubmit = function (event){
    event.preventDefault(event)
    let objModal = {}
    modalAnswers.forEach((element) => objModal[element.id] = element.value);
    objModal[modalCheck.id] = modalCheck.checked;
    console.log(objModal);
    modalForm.reset();
}

//form
let modalForm2 = document.getElementById('modalForm2')
let modalAnswers2 = document.querySelectorAll('.js-input-3')
let modalCheck2 = document.getElementById('flexCheckChecked')

modalForm2.onsubmit = function (event){
    event.preventDefault(event)
    let objModal2 = {}
    modalAnswers2.forEach((element) => objModal2[element.id] = element.value);
    objModal2[modalCheck2.id] = modalCheck2.checked;
    console.log(objModal2);
    modalForm2.reset();
}

//cookies
let cookiesButton = document.querySelector('.cookiesButton')
let cookiesBox = document.querySelector('.cookies')
let yesCookies = document.querySelector('.yesCookies')
let noCookies = document.querySelector('.noCookies')

cookiesButton.onclick = function(event){
    event.preventDefault(event);
    if(yesCookies.checked == true){
        console.log(`${yesCookies.id}: ${yesCookies.value}`);
        cookiesBox.classList.add('d-none');
    }else if(noCookies.checked == true){
        console.log(`${noCookies.id}: ${noCookies.value}`);
        cookiesBox.classList.add('d-none');
    }
}