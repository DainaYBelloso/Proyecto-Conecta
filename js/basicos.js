const familia = document.getElementById("familia");
const colores = document.getElementById("colores");
const comida = document.getElementById("comida");
const tiempo = document.getElementById("tiempo");
const lugares = document.getElementById("lugares");

const imagenes = document.getElementById("imagenes");

familia.addEventListener("click", function () {
    const imagen = document.createElement("img");
    imagen.src = "../img/basicos/familia.gif";
    imagen.width = "1000"
    imagen.className = "mt-8 ml-14 p-4"
    imagenes.innerHTML = "";
    imagenes.appendChild(imagen);
});
colores.addEventListener("click", function () {
    const imagen = document.createElement("img");
    imagen.src = "../img/basicos/colores.gif";
    imagen.width = "1000"
    imagen.className = "mt-8 ml-14 p-4"
    imagenes.innerHTML = "";
    imagenes.appendChild(imagen);
});

comida.addEventListener("click", function () {
    const imagen = document.createElement("img");
    imagen.src = "../img/basicos/comida.gif";
    imagen.width = "1000"
    imagen.className = "mt-8 ml-14 p-4"
    imagenes.innerHTML = "";
    imagenes.appendChild(imagen);
});

tiempo.addEventListener("click", function () {
    const imagen = document.createElement("img");
    imagen.src = "../img/basicos/tiempo.gif";
    imagen.width = "1000"
    imagen.className = "mt-8 ml-14 p-4"
    imagenes.innerHTML = "";
    imagenes.appendChild(imagen);
});

lugares.addEventListener("click", function () {
    const imagen = document.createElement("img");
    imagen.src = "../img/basicos/lugares.gif";
    imagen.width = "1000"
    imagen.className = "mt-8 ml-14 p-4"
    imagenes.innerHTML = "";
    imagenes.appendChild(imagen);
});

const nombre = document.getElementById('volver');
nombre.addEventListener('click', () => {

    window.location.href = 'index.html';
});

