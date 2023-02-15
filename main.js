
// const cartas=document.getElementsByClassName("gridcontainer")

// const selector=document.getElementsByTagName("select")
// document.addEventListener('DOMContentLoaded'),()=>{
    

function banner(){

    const banner = document.getElementById("banner") //todo Por que si la declaro fuera no funciona

    let img = document.createElement("img")

     let arrayFotos=["img/banner/2.jpg","img/banner/1.jpg","img/banner/3.jpg","img/banner/4.jpg","img/banner/5.jpg","img/banner/6.jpg","img/banner/7.jpg","img/banner/8.jpg"]

        let aleatorio= arrayFotos[Math.floor(Math.random()*arrayFotos.length)];
        
        img.src=aleatorio
    
    banner.append(img)

} 
banner()


const cartas = document.getElementsByClassName






