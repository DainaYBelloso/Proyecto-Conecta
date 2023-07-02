function conect() {



    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("username", document.getElementById("name").value);
    urlencoded.append("email", document.getElementById("email").value);
    urlencoded.append("cuentanos", document.getElementById("cuentanos").value);
    urlencoded.append("name", document.getElementById("name").value);
    urlencoded.append("password", document.getElementById("name").value);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch("http://localhost:1337/api/auth/local/register", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

const nombre = document.getElementById('volver');
nombre.addEventListener('click', () => {

    window.location.href = 'index.html';
});