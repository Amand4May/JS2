let cidades = ["Sorocaba", "Piedade", "Votorantim"];

let troca = function(cidades){
    cidades.unshift("Itu");
    cidades.pop();

    return cidades;
}

console.log(troca(cidades));