var aluno = {
    "nome":"Amanda",
    "sobrenome":"Mayumi",
    "idade":19,
    "matricula":"243342",

    mostraInformacoes : function() {
        return `Nome: ${this.nome} \nSobrenome: ${this.sobrenome} \nIdade: ${this.idade} \nMatricula: ${this.matricula};`
    }
};

console.log(aluno.mostraInformacoes());