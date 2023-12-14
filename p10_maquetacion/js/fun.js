// capturar elementos
const circle = document.querySelector ('#circulo');
const rectangulos = document.querySelectorAll ('#rectangulos__shape')

// crear evento
circle.addEventListener('click', ocultarcuadrados);

// definir funcion
function ocultarcuadrados () {

    rectangulos.forEach(rectangulo => { 
        rectangulo.style.opacity= "0";
    })
}