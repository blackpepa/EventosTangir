let h1 = document.getElementById("tituloUno");
h1.textContent = "¿Cuál es tu fortuna?";

let h2 = document.getElementById("tituloDos");
h2.textContent = "Elige tu signo y Madame LeFortune te contará qué te espera ";

let p = document.getElementById ("disclaimer")
p.textContent = "Disclaimer: Este sitio es sólo diversión, ningún signo del zodíaco fue maltratado durante su construcción."

let arraySignos = [aries, tauro, geminis, cancer, leo, virgo, libra, escorpio, sagitario, capricornio, acuario, piscis];
let arrayHoroscopo =[horoscopoAries, horoscopoTauro, horoscopoGeminis, horoscopoCancer, horoscopoLeo, horoscopoVirgo, horoscopoLibra, horoscopoEscorpio, horoscopoSagitario, horoscopoCarpricornio, horoscopoAcuario, horocopoPiscis];


function signoCaja(horoscopoElegido, destino){
  let stn = document.getElementById("signo")
  stn.innerHTML= ''
  let img = document.createElement("img");
  img.setAttribute("src", horoscopoElegido.img);

    let ctn = document.createElement("div");
    ctn.className = 'divHoroscopo'
    ctn.innerHTML=`<p>Signo: ${horoscopoElegido.signo}</p>
                    <p>Fortuna: ${horoscopoElegido.horoscopo}</p>
                    <p>Elemento: ${destino.elemento}</p>
                    <p>Son de este signo los nacidos entre: ${destino.fechas}</p>
                    <p>Sus principales características son: ${destino.rasgos}</p>
                    `
    ctn.appendChild(img);

    stn.appendChild(ctn);
  }

let seleccionar = document.getElementById("seleccionar");  

  seleccionar.addEventListener("change", () => {

    let horoscopoElegido = arrayHoroscopo.find(item => item.signo == seleccionar.value)
    let destino = arraySignos.find(dest=> dest.nombre == seleccionar.value)
    signoCaja(horoscopoElegido,destino);
    
  });
