
/*  preguntas*/
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const boton5 = document.getElementById("boton5");
const boton6 = document.getElementById("boton6");
const boton7 = document.getElementById("boton7");
const boton8 = document.getElementById("boton8");
const boton9 = document.getElementById("boton9");
const boton10 = document.getElementById("boton10");
const boton11 = document.getElementById("boton11");

/*respuestas*/
const boton1r = document.getElementById("boton1r");
const boton2r = document.getElementById("boton2r");
const boton3r = document.getElementById("boton3r");
const boton4r = document.getElementById("boton4r");
const boton5r = document.getElementById("boton5r");
const boton6r = document.getElementById("boton6r");
const boton7r = document.getElementById("boton7r");

const sig = document.getElementById("sig");
/*¿?*/
boton1.addEventListener("click", function () {
    const imagen = document.createElement("img");
    imagen.src = "../img/preguntas/que_tal.gif";
    imagen.className = "w-[235px] h-[235px]"
    sig.innerHTML = "";
    sig.appendChild(imagen);
});

boton2.addEventListener("click", function () {
    const imagen = document.createElement("img");
    imagen.src = "../img/preguntas/comosignar.gif";
    imagen.className = "w-[235px] h-[235px]"
    sig.innerHTML = "";
    sig.appendChild(imagen);
});

boton3.addEventListener("click", function () {
    const imagen = document.createElement("img");
    imagen.src = "../img/preguntas/paraque.gif";
    imagen.className = "w-[235px] h-[235px]"
    sig.innerHTML = "";
    sig.appendChild(imagen);
});
boton4.addEventListener("click", function () {
    const imagen = document.createElement("img");
    imagen.src = "../img/preguntas/que.gif";
    imagen.className = "w-[235px] h-[235px]"
    sig.innerHTML = "";
    sig.appendChild(imagen);
});
boton5.addEventListener("click", function () {
    const imagen = document.createElement("img");
    imagen.src = "../img/preguntas/porque.gif";
    imagen.className = "w-[235px] h-[235px]"
    sig.innerHTML = "";
    sig.appendChild(imagen);
});

boton6.addEventListener("click", function () {
    const imagen = document.createElement("img");
    imagen.src = "../img/preguntas/cual.gif";
    imagen.className = "w-[235px] h-[235px]"
    sig.innerHTML = "";
    sig.appendChild(imagen);
});

boton7.addEventListener("click", function () {
    const imagen = document.createElement("img");
    imagen.src = "../img/preguntas/quien.gif";
    imagen.className = "w-[235px] h-[235px]"
    sig.innerHTML = "";
    sig.appendChild(imagen);
});
boton8.addEventListener("click", function () {
    const imagen = document.createElement("img");
    imagen.src = "../img/preguntas/donde.gif";
    imagen.className = "w-[235px] h-[235px]"
    sig.innerHTML = "";
    sig.appendChild(imagen);
});
boton9.addEventListener("click", function () {
    const imagen = document.createElement("img");
    imagen.src = "../img/preguntas/quedice.gif";
    imagen.className = "w-[235px] h-[235px]"
    sig.innerHTML = "";
    sig.appendChild(imagen);
});
boton10.addEventListener("click", function () {
    const imagen = document.createElement("img");
    imagen.src = "../img/preguntas/como.gif";
    imagen.className = "w-[235px] h-[235px]"
    sig.innerHTML = "";
    sig.appendChild(imagen);
});
boton11.addEventListener("click", function () {
    const imagen = document.createElement("img");
    imagen.src = "../img/preguntas/siono.gif";
    imagen.className = "w-[235px] h-[235px]"
    sig.innerHTML = "";
    sig.appendChild(imagen);
});

/*respuestas*/
boton1r.addEventListener("click", function () {
    const imagen = document.createElement("img");
    imagen.src = "../img/preguntas/bien.gif";
    imagen.className = "w-[235px] h-[235px]"
    sig.innerHTML = "";
    sig.appendChild(imagen);
});
boton2r.addEventListener("click", function () {
    const imagen = document.createElement("img");
    imagen.src = "../img/preguntas/mal.gif";
    imagen.className = "w-[235px] h-[235px]"
    sig.innerHTML = "";
    sig.appendChild(imagen);
});
boton3r.addEventListener("click", function () {
    const imagen = document.createElement("img");
    imagen.src = "../img/preguntas/regular.gif";
    imagen.className = "w-[235px] h-[235px]"
    sig.innerHTML = "";
    sig.appendChild(imagen);
});
boton4r.addEventListener("click", function () {
    const imagen = document.createElement("img");
    imagen.src = "../img/preguntas/si.gif";
    imagen.className = "w-[235px] h-[235px]"
    sig.innerHTML = "";
    sig.appendChild(imagen);
});
boton5r.addEventListener("click", function () {
    const imagen = document.createElement("img");
    imagen.src = "../img/preguntas/no.gif";
    imagen.className = "w-[235px] h-[235px]"
    sig.innerHTML = "";
    sig.appendChild(imagen);
});
boton6r.addEventListener("click", function () {
    const imagen = document.createElement("img");
    imagen.src = "../img/preguntas/Gracias.gif";
    imagen.className = "w-[235px] h-[235px]"
    sig.innerHTML = "";
    sig.appendChild(imagen);
});
boton7r.addEventListener("click", function () {
    const imagen = document.createElement("img");
    imagen.src = "../img/preguntas/denada.gif";
    imagen.className = "w-[235px] h-[235px]"
    sig.innerHTML = "";
    sig.appendChild(imagen);
});
const nombre = document.getElementById('volver');
nombre.addEventListener('click', () => {

    window.location.href = 'index.html';
});