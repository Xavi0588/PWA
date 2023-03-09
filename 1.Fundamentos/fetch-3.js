//Adahir Osorio Lopez
//Peticion POST
//https://regres.in/api/users

let usuario = {
    nombre: 'Adahir Osorio', //En esta linea de codigo introduci mi nombre y edad
    edad: 21            //el usuario tiene que ser igual a Adahir y debe tener 21 años
};

fetch('https://reqres.in/api/users/',{
    method:'POST',
    body: JSON.stringify( usuario ),
    headers:{
        'Content-Type':'application/json'
    }
}
)
.then( resp=> resp.json() )
.then( console.log )
.catch( error => {
    console.log('Error en la peticion');
    console.log(error);
}
    );