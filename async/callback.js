function soma(x, callback){

    return setTimeout(()=>{

         return callback(null, x + 5000);

    }, 3000);
}


//function de callback

function resolverSoma(err, resultado) {
    if(err) throw err;

    console.log(resultado);
}

soma(750, resolverSoma)