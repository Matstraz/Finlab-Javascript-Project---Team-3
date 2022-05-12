// offcanvas
let btnJs = document.querySelector('.btn-js');
btnJs.onclick = function(event) {
    let input1 = document.querySelector('.banane').value;
    let input2 = document.querySelector('.banane2').value;

    event.preventDefault();
    console.log(`success: ${input1}, ${input2}`);
}

//modale
let modButtom = document.querySelector('.btn-js-2')
let modalAnswers = document.querySelectorAll('.js-input-2')

modButtom.onclick = function (event){
    event.preventDefault(event)
    let objModal = {}
    modalAnswers.forEach((element) => objModal[element.id] = element.value);
    console.log(objModal);
}

//form
let modButtom2 = document.querySelector('.btn-js-3')
let modalAnswers2 = document.querySelectorAll('.js-input-3')

modButtom2.onclick = function (event){
    event.preventDefault(event)
    let objModal2 = {}
    modalAnswers2.forEach((element) => objModal2[element.id] = element.value);
    console.log(objModal2);
}

//cookies
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