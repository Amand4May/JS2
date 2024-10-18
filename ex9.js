var endereco = {
    "rua": "Rua Juscelino Kubitschek",
    "numero": 2001,
    "bairro": "Santa Helena",
    "cidade": "Sorocaba"
};

let mostra = function(){
    for(let prop in endereco){
        console.log(prop + " "+endereco[prop]);
    }
}

mostra();