// const cartas=document.getElementsByClassName("gridcontainer")

// const selector=document.getElementsByTagName("select")


const fragment = document.createDocumentFragment();

function banner() {
  const banner = document.getElementById("banner");

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
  const fragment = document.createDocumentFragment();

  let destinos = ["Madrid", "Barcelona", "Sevilla"];

  for (i = 0; i < destinos.length; i++) {
    let ciudad = document.createElement("option");
    ciudad.textContent = destinos[i];
    fragment.append(ciudad);
  }

  opciones.append(fragment);
}

function pintarRecomendados() {
  let recomendados = document.getElementById("recomendados");

  const arrayCards = [
    [
      "img/viajes/viajes-1.jpg",
      "viaje uno",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    ],
    [
      "img/viajes/viajes-2.jpg",
      "viaje dos",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    ],
    [
      "img/viajes/viajes-3.jpg",
      "viaje tres",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    ],
  ];

  arrayCards.forEach((item) => {
    const card = document.createElement("article");
    const img = document.createElement("img");
    img.src = item[0];
    const titulo = document.createElement("h3");
    titulo.textContent = item[1];
    const parrafo = document.createElement("p");
    parrafo.textContent = item[2];
    card.append(img, titulo, parrafo);

    recomendados.append(card);
  });
}

banner();
opciones();
pintarRecomendados()
