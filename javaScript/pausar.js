let tiempo = 5; 
let intervalo;
let pause = false;
let dia = true;
const mostrar = document.getElementById("temporizador");
const boton = document.getElementById("iniciar");
const botonPausar = document.querySelector(".pause");
const botonContinuar = document.querySelector(".play");
const cuerpo = document.querySelector("body");
const texto = document.querySelector("h3");

  const cuentaRegresiva = setInterval(() => {

    const minutos = Math.floor(tiempo / 60);
    const segundos = tiempo % 60;

    const formatoMinutos = minutos.toString().padStart(2, '0');
    const formatoSegundos = segundos.toString().padStart(2, '0');

    if(pause == false){
      tiempo--;
    }
    mostrar.textContent = `${formatoMinutos}:${formatoSegundos}`;
    if (tiempo < 0) {
      if(dia == true){
        dia = false;
        tiempo = 10;
        cuerpo.className ="descanso";
        texto.innerHTML = "Descanso";
      }
      else{
        dia = true
        tiempo = 20;
        cuerpo.className ="";
        texto.innerHTML = "Pomodoro";
      }
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
