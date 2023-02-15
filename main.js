// const cartas=document.getElementsByClassName("gridcontainer")

// const selector=document.getElementsByTagName("select")
// document.addEventListener('DOMContentLoaded'),()=>{

function banner() {

  const banner = document.getElementById("banner"); //todo Por que si la declaro fuera no funciona

  let img = document.createElement("img");

  let arrayFotos = [
    "img/banner/2.jpg",
    "img/banner/1.jpg",
    "img/banner/3.jpg",
    "img/banner/4.jpg",
    "img/banner/5.jpg",
    "img/banner/6.jpg",
    "img/banner/7.jpg",
    "img/banner/8.jpg",
  ];

  let aleatorio = arrayFotos[Math.floor(Math.random() * arrayFotos.length)];

  img.src = aleatorio;

  banner.append(img);
}





function opciones(){
let opciones = document.getElementById("opciones");
const fragment= document.createDocumentFragment();


let destinos=["Madrid","Barcelona","Sevilla"];

for(i=0;i<destinos.length;i++){

    let ciudad =document.createElement("option");
    ciudad.textContent=destinos[i];
    fragment.append(ciudad);
}

opciones.append(fragment);

}

function cartas(){

const carta1 =document.getElementById("carta1")  //todo con element by class me sale que append no es una funcion

let img = document.createElement("img");

carta1.append(img)

}

banner();
opciones()
cartas()

