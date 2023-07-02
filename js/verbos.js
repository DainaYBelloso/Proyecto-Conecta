// Creo dos variables para alamaccer la Api y el dicccionario de los verbos
let arrayApi = null
let diccionarioVerbos = []

const urlApi = "http://localhost:1337/api/verbos?imagen=text&letra=text&pagination[pageSize]=100";
fetch(urlApi)
    .then(response => response.json())
    .then(result => {
        // Asigno el resultado entero de la api a mi variable arrayApi, para manejarla luego
        arrayApi = result.data

        // Creo un bucle con los datos de la api para crear el diccionario y asignar a cada posicion del array un verbo
        result.data.forEach(d => {
            diccionarioVerbos.push(d.attributes.verbo)
        });

    })
    .catch(error => console.log('error', error));



const inputVerbo = document.getElementById("escribe");
const divOutput = document.getElementById("output");
const divSigno = document.getElementById("signo");



inputVerbo.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        const verbo = escribe.value;

        divOutput.innerHTML = "";

        // Creo un bucle que recorre el diccionario de verbos y compara el resultado escribo por el usuario a 
        // cada elemento del diccionario, y cuando coincidan, se asigna la url de la imagen de mi variable arrayApi al src de la imagen
        for (let i = 0; i < diccionarioVerbos.length; i++) {
            if (verbo == diccionarioVerbos[i]) {
                const urlImagen = arrayApi[i].attributes.imagen
                const imagen = document.createElement("img");
                imagen.src = urlImagen;
                imagen.height = "300"
                imagen.width = "300"
                imagen.classList = "m-auto"
                divOutput.appendChild(imagen);
                break;
            }
        }
        divSigno.innerHTML = "";

    }
});
const nombre = document.getElementById('volver');
nombre.addEventListener('click', () => {

    window.location.href = 'index.html';
});