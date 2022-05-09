let off1 = document.querySelector('.callback')
let input1 = document.querySelector('.canvasName').value
let input2 = document.querySelector('.canvasTel').value

off1.onclick = function (event){
    event.preventDefault()
    console.log(`success:Jacopo, 33532123 ${input1} ${input2}`)
}

let modalForm = document.querySelector('.modal-body').firstElementChild
