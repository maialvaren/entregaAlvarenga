let nombre = "Maira";
let condición = "Reprocann aprobado"

let pregunta = prompt("¿Cómo te llamas?")
alert("¡Gracias por tu visita, " + pregunta+"!")

console.log(pregunta)

if(condición == "Reprocann aprobado"){
  console.warn("Trámite aprobado")
}else{
  console.log("Revisar trámite")
}

function Geneticas(){
  console.log("Índica")
  console.log("Sativa");
}

Geneticas();


function saludar(parametro1, parametro2){
  console.log(`Hola${parametro1} ${parametro2}`);
}

let parametro1 = "Emanuel"; 
let parametro2 = "Ariel";

let resultado = 0;  

function sumar(numeroA, numeroB){
  resultado = numeroA+numeroB;
}

function mostrar(mensaje){
  console.log(mensaje);
}

sumar(6,3)

mostrar(resultado)

for(let i=0;i<10;i++){
  console.log("Iteración N" + i);
}