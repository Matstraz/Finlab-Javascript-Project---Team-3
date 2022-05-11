/* Codice offcanvas nav 2  */

class Form {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }
}



const formLog = document.getElementById('btn-form--submit');

formLog.addEventListener('click', (event) => {
  event.preventDefault();
  const formCallback = new Form(document.getElementById('form-firstName-body').value, document.getElementById('form-phoneNumber-body').value);
  console.log(formCallback);
})




/* codice modale nav 1 */

class Modal {
  constructor(cont1, cont2, cont3, name, email, phoneNumber, message, checkbox) {
    this.cont1 = cont1;
    this.cont2 = cont2;
    this.cont3 = cont3;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.message = message;
    this.checkbox = checkbox;
  }
}

const modalNav = document.getElementById('btn-modal--submit');

modalNav.addEventListener('click', (event) => {
  event.preventDefault();
  const modalLog = new Modal(
    document.getElementById('modal-cont-1').value,
    document.getElementById('modal-cont-2').value,
    document.getElementById('modal-cont-3').value,
    document.getElementById('modal-name').value,
    document.getElementById('modal-email').value,
    document.getElementById('modal-phone').value,
    document.getElementById('modal-message').value,
    document.getElementById('checkbox-modal').checked
  );
  console.log(modalLog);
})

/* cookies */

// cookie policy
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