var aluno = {
    "produto":"Blohsh",
    "qtd":5,
    "valor":19,

    calcularTotal : function() {
        return `Produto: ${this.produto} \nPreço: R$${this.qtd * this.valor}`
    }
};

console.log(aluno.calcularTotal());