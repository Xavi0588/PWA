// Adahir Osorio Lopez
fetch('no-encontrado.html')
.then( reso => reso.text() )
.then( html => {
    let body = document.querySelector('body');
    body.innerHTML = html;
})

.catch( error => {
    console.log('Error en la petición');
    console.log(error);
});