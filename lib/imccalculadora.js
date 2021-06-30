const IMCStatus = require("./imcstatus");

class IMCCalculadora {

    validate(pessoa) {
        
        if (pessoa.peso <= 0 || pessoa.altura <= 0)
            throw 'Pessoa nao pode ter peso = 0 ou altura = 0';
    }

    calcular(pessoa) {
        
        this.validate(pessoa);

        this.imc = pessoa.peso / (pessoa.altura * pessoa.altura);
        this.classificacao = "";

        if (this.imc < 18.5)
            this.classificacao = "abaixo do peso";
        else if (this.imc < 25)
            this.classificacao = "normal";
        else if (this.imc < 30)
            this.classificacao = "acima do peso";
        else
            this.classificacao = "obeso";
        
        return new IMCStatus(this.imc, this.classificacao);
    }
}

module.exports = IMCCalculadora;