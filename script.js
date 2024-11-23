let cantidadelementos = document.querySelector(".cantidad");
let precioinicial = document.querySelector(".precio-inicial");
let valorTotalElement = document.querySelector('.valor-total');
let sumarbutton = document.querySelector(".sumar");
let restarbutton = document.querySelector(".restar");

const precioBase = parseFloat (precioinicial.innerHTML);

sumarbutton.addEventListener('click', () =>{
    let cantidad = parseInt(cantidadelementos.innerHTML);
    cantidad++;
    cantidadelementos.innerHTML = cantidad;

    const total = cantidad * precioBase;
    valorTotalElement.innerHTML = total.toFixed(2);
});

restarbutton.addEventListener('click', () => {
    let cantidad = parseInt(cantidadelementos.innerHTML);
    if (cantidad > 0) {
        cantidad--;
        cantidadelementos.innerHTML = cantidad;
    }
        const total = cantidad * precioBase;
        valorTotalElement.innerHTML = total.toFixed(2); 
    });
