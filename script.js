const h1 = document.querySelector("h1");
// const input1 = document.querySelector("#calculo1");
// const input2 = document.querySelector("#calculo2");
const pResult = document.querySelector("#pResult");
const pOperaciones = document.querySelector("#pOperaciones");

const botonCero = document.querySelector("#boton-cero");
const botonUno = document.querySelector("#boton-uno");
const botonDos = document.querySelector("#boton-dos");
const botonTres = document.querySelector("#boton-tres");
const botonCuatro = document.querySelector("#boton-cuatro");
const botonCinco = document.querySelector("#boton-cinco");
const botonSeis = document.querySelector("#boton-seis");
const botonSiete = document.querySelector("#boton-siete");
const botonOcho = document.querySelector("#boton-ocho");
const botonNueve = document.querySelector("#boton-nueve");
const botonSuma = document.querySelector("#boton-suma");
const botonResta = document.querySelector("#boton-resta");
const botonMultiplicacion = document.querySelector("#boton-multiplicacion");
const botonDivision = document.querySelector("#boton-division");
const botonIgual = document.querySelector("#boton-igual");
const botonPunto = document.querySelector("#boton-punto");
let cacheAfter = 0;
let cacheBefore = 0;
let resultado = null;
let dato = null;
let operar = false;

function botonOnClick(dato) {
  //let resultado = Number(input1.value) + Number(input2.value);
//   console.log(`el dato es ${dato}`);
  if (operar == false) {
    operacionesBefore(dato)
  }
  else if (operar == true) {
    operacionesAfter(dato)
  } 
}

function operacionesBefore(dato) {
    verificacion = Number(dato);

//   console.log(`verificacion es ${verificacion}`);
//   console.log(verificacion =!NaN)
//   console.log(dato == ".")
    if ((typeof(dato) == "number" || dato == ".")) {
       
//   console.log(`el daaaaato es ${dato}`); 
      cacheBefore = cacheBefore + String(dato);
    }
    else{
        operar = true;
        operando = dato;
        console.log(operando)
        console.log("revisar operando")
    }

  console.log(Number(cacheBefore))
}


function operacionesAfter(dato) {
    cacheBefore = Number(cacheBefore);
    verificacion = Number(dato);
    console.log(dato)
    if ((typeof(dato) == "number" || dato == ".")) {
        cacheAfter = String(cacheAfter) + String(dato);
        console.log(Number(cacheAfter))
  
        // console.log(`el daaaaato es ${dato}`); 
      }else{
        resultado = true;
        console.log("revisar operando")
      }
    
     if (resultado == true){
    arrojarResultado()
    }

}

function arrojarResultado() {
    cacheAfter = Number(cacheAfter);
    if (operando == "+") {
        resultado = cacheBefore + cacheAfter;
    } else if (operando == "-") {
        resultado = cacheBefore - cacheAfter;
    } else if (operando == "/") {
        resultado = cacheBefore / cacheAfter;
    } else if (operando == "*") {
        resultado = cacheBefore * cacheAfter;
    } else {
        console.log("mensaje predeterminado")
    }
    console.log(resultado)
    reInicializarVariables();
    return resultado;
    //Se re-inicializan las variables para poder volver a ejecutar el programa
}

function reInicializarVariables(){
    cacheAfter = 0;
    cacheBefore = 0;
    resultado = null;
    dato = null;
    operar = false;
}