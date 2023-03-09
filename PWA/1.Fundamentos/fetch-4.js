//Adahir Osorio Lopez

let img = document.querySelector('img'); //el codigo src me indica que la toma de el index

fetch('batman.jpg') //El archivo que voy a indicar que cambie
.then( resp => resp.blob() ) // Vamos a leer la imagen con un .blob
.then( image =>
{

var imgPath = URL.createObjectURL(image); //crea un URL para vizualizar la imagen
img.src = imgPath; //fuente de la imagen
});