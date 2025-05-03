const trabajo = sessionStorage.getItem('trabajo');
const intervalos = sessionStorage.getItem('cantPomo');

document.getElementById('tr').textContent = trabajo;

//---------------------------------------------------------
  const mostrar = document.querySelectorAll('.temporizador'); // Esto es un NodeList
  const boton = document.getElementById("iniciar");
  const botonPausar = document.querySelector(".pause");
  const botonContinuar = document.querySelector(".play");
  const cuerpo = document.querySelector("body");
  const texto = document.querySelector("h3");
  const saltar = document.querySelector("#saltar")
  
  let tiempo = 1500; 
  let intervalosHechos = 0;
  let pause = false;
  let esDia = true;
  
  boton.addEventListener("click", pausar)
  saltar.addEventListener("click", cambiar)
  
  const cuentaRegresiva = setInterval(() => {
  
    const minutos = Math.floor(tiempo / 60);
    const segundos = tiempo % 60;
  
    const formatoMinutos = minutos.toString().padStart(2, '0');
    const formatoSegundos = segundos.toString().padStart(2, '0');
  
    if(pause == false){
      tiempo--;
      mostrar.forEach(element => {
        element.textContent = `${formatoMinutos}:${formatoSegundos}`;
      });
    }
    if (tiempo < 0)
        cambiar();
  }, 1000);
  
    
  
  function pausar(){
    botonContinuar.classList.toggle('desaparecer');
    botonPausar.classList.toggle('desaparecer');
    pause = !pause;
  }
  function cambiar(){
    cuerpo.classList.toggle('descanso');
    if(esDia == true){
      tiempo = 300;
      texto.innerHTML = "Descanso";
    }
    else{
      tiempo = 1500;
      texto.innerHTML = "Pomodoro";
      intervalosHechos++;
      if(intervalosHechos >= intervalos){
        clearInterval(cuentaRegresiva);
        window.location.href = 'terminaste.html';
      }
    }
    esDia = !esDia
  }
  
  