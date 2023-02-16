// const cartas=document.getElementsByClassName("gridcontainer")

// const selector=document.getElementsByTagName("select")
// document.addEventListener('DOMContentLoaded'),()=>{

const fragment = document.createDocumentFragment();

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



function opciones() {

  let opciones = document.getElementById("opciones");



  let destinos = ["Madrid", "Barcelona", "Sevilla"];

  for (i = 0; i < destinos.length; i++) {

    let ciudad = document.createElement("option");
    ciudad.textContent = destinos[i];
    fragment.append(ciudad);
  }

  opciones.append(fragment);

}

// carta.forEach(element =>{element.append(img)});

function cartas() {

  const cartas = document.getElementById("cartas");


  for (i = 0; i < 3; i++) {

    let div = document.createElement("div");
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");

    div.append(img, h3, p)

    fragment.append(div)
  }
  cartas.append(fragment)

}

banner();
opciones()
cartas()

