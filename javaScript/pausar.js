let tiempo = 300; 
let intervalo;
let pause = false;
const mostrar = document.getElementById("temporizador");
const boton = document.getElementById("iniciar");
const botonPausar = document.querySelector(".pause");
const botonContinuar = document.querySelector(".play");


  const cuentaRegresiva = setInterval(() => {

    const minutos = Math.floor(tiempo / 60);
    const segundos = tiempo % 60;

    const formatoMinutos = minutos.toString().padStart(2, '0');
    const formatoSegundos = segundos.toString().padStart(2, '0');

    mostrar.textContent = `${formatoMinutos}:${formatoSegundos}`;

    if (tiempo === 0) {
      clearInterval(cuentaRegresiva);
      mostrar.textContent = "¡Tiempo terminado!";
    }
    if(pause == false){
      tiempo--;
    }
  }, 1000);

  boton.addEventListener("click", pausar)

  function pausar(){
    if(pause == false){
      pause = true;
      botonContinuar.className = "play"
      botonPausar.className = "pause desaparecer"
    }
    else{
      pause = false
      botonContinuar.className = "play desaparecer"
      botonPausar.className = "pause"
    }
  }
