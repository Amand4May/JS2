let numeros = [1,2,3,5,10,50,40,60];

let maior = function (num) {
    let num_maior;

    for(let i = 0; i < num.length; i++){
        if(i == 0){
            num_maior = num[i];
        }
        if(num[i] > num_maior){
            num_maior = num[i];
        }
    }

    return num_maior;
}

console.log(maior(numeros));