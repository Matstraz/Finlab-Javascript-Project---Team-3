let off1 = document.querySelector('.callback')
let input1 = document.querySelector('.canvasName').value
let input2 = document.querySelector('.canvasTel').value

off1.onclick = function (event){
    event.preventDefault()
    console.log(`success: ${input1} ${input2}`)
}


/* //ALTERNATIVA PER CREARE UN ARRAY (rinominare le classi negli input)
let off1 = document.querySelector('.callback')
let input1 = document.querySelectorAll('.offCavansLarge')

off1.onclick = function (event){
    event.preventDefault()
    let obj = []
    input1.forEach((element, i) => obj.push((input1[i].id) = input1[i].value));
    console.log(`success: ${obj}`) */
