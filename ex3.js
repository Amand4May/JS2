let soma = function(num){
    let a = 0;

    for(let i = 0; i < num.length; i++){
        a += num[i];
    }

    return a;
}

let numeros = [10, 20, 30, 40, 50];
console.log(soma(numeros));