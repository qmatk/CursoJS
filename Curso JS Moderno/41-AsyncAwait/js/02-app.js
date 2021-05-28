function descargarCliente() {

    return new Promise((resulve, reject) => {
        const error = false;

        setTimeout(() => {
            if (!error) {
                resolve('Listado correctamente');
            } else {
                resolve('Error con la conexión');
            }
        }, 3000);
    })
}

//Async Await

function ejecutar() {

}
ejecutar();