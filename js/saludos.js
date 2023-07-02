function saludo() {
    const select = document.getElementById("option");
    const image = document.getElementById("saludo");
    const optionComosedice = select.value;
    if (optionComosedice === "Hola") {
        image.src = "img/saludos/hola.gif";
    }
    else if (optionComosedice === "Encantado") {
        image.src = "img/saludos/encantado.gif";
    }
    else if (optionComosedice === "Buenos dias") {
        image.src = "img/saludos/buenosd.gif";
    }
    else if (optionComosedice === "Buenas tardes") {
        image.src = "img/saludos/buenast.gif";
    }
    else if (optionComosedice === "Buenas noches") {
        image.src = "img/saludos/buenasn.gif";
    }
    else if (optionComosedice === "Hasta la vista") {
        image.src = "img/saludos/hastalv.gif";
    }
    else if (optionComosedice === "Hasta luego") {
        image.src = "img/saludos/hastalg.gif";
    }
    else if (optionComosedice === "Adios") {
        image.src = "img/saludos/adios.gif";
    }
    else if (optionComosedice === "Saludar") {
        image.src = "img/saludos/saludo.gif";
    }
    else if (optionComosedice === "vacio") {
        image.src = null;
    }
    console.log("Select Option");
}
saludo();

const nombre = document.getElementById('volver');
nombre.addEventListener('click', () => {

    window.location.href = 'index.html';
});