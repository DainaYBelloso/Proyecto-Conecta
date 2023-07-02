let arrayApi = null
let diccionarioLetras = []

let requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("http://localhost:1337/api/abcs?pagination[pageSize]=100", requestOptions)
    .then(response => response.json())
    .then(result => {

        console.log(result.data);
        arrayApi = result.data;
        result.data.forEach(d => {
            diccionarioLetras.push(d.attributes.letra)
        });
        console.log(diccionarioLetras);
    })
    .catch(error => console.log('error', error));



document.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {

        const escribe = document.getElementById("escribe");
        const output = document.getElementById("output");
        const letra = document.getElementById("signo");
        const inputValue = escribe.value;

        output.innerHTML = ""

        for (let i = 0; i < inputValue.length; i++) {
            let caracter = inputValue[i];
            if (caracter === "c" && i !== inputValue.length - 1 && inputValue[i + 1] === "h") {
                caracter = "ch";
                i++;
            }
            if (caracter === "l" && i !== inputValue.length - 1 && inputValue[i + 1] === "l") {
                caracter = "ll";
                i++;
            }
            if (caracter === "r" && i !== inputValue.length - 1 && inputValue[i + 1] === "r") {
                caracter = "rr";
                i++;
            }

            let divPadre = document.createElement("div");
            let divHijo = document.createElement("div");
            let img = document.createElement("img");
            let letra = document.createElement("div");
            let imgLetra = document.createElement("img")

            for (let b = 0; b < diccionarioLetras.length; b++) {
                if (caracter == diccionarioLetras[b]) {
                    imgLetra.src = arrayApi[b].attributes.imagen
                }
            }

            divPadre.appendChild(letra)
            letra.appendChild(imgLetra)


            divHijo.textContent = caracter
            divPadre.classList = " flex justify-around "
            divHijo.classList = " pt-7 text-3xl  "
            img.classList = "m-8 w-12 h-10 "
            img.src = "img/flecha.webp"
            imgLetra.classList = "pt-6 w-14"

            output.appendChild(divPadre)
            divPadre.appendChild(divHijo)
            divPadre.appendChild(img)
            divPadre.appendChild(letra)


        }

    }
}
);
const nombre = document.getElementById('volver');
nombre.addEventListener('click', () => {

    window.location.href = 'index.html';
});




