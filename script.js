const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");
    
btn.addEventListener('click', sumarInputValues)

function sumarInputValues(event) {
    let resultado = Number(input1.value) + Number(input2.value);
    pResult.innerText = `La suma es ${resultado}`
    console.log(`La suma es ${resultado}`)
}

/* form.addEventListener('submit', sumarInputValues)


function sumarInputValues(event) {
    console.log({event})
    event.preventDefault();
    let resultado = Number(input1.value) + Number(input2.value);
    pResult.innerText = `La suma es ${resultado}`
    console.log(`La suma es ${resultado}`)
} */

