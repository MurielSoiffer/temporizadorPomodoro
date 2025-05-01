const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    const nombre = formulario.trabajo.value;
    const cantPomo = formulario.cantPomo.value;

    sessionStorage.setItem('trabajo', nombre);
    sessionStorage.setItem('cantPomo', cantPomo);

    window.location.href = 'pomodoro.html';
}