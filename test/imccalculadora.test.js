const IMCCalculadora = require('../lib/imccalculadora')
const IMCStatus = require('../lib/imcstatus')
const Pessoa = require('../lib/pessoa')

describe('IMCCalculadora' , () => {
    
    test('Lançamento da Exceção' , () => {
        expect(() => {
            this.pessoa = new Pessoa("Joao Gabriel", 0, 0);
            this.imccalc = new IMCCalculadora();
            this.imccalc.calcular(this.pessoa);
        }).toThrow('Pessoa nao pode ter peso = 0 ou altura = 0');
    });

    test('classificacao = abaixo do peso' , () => {
        this.pessoa = new Pessoa("Joao Gabriel", 58, 1.78);
        this.imccalc = new IMCCalculadora();
        expect(this.imccalc.calcular(this.pessoa).classificacao).toBe("abaixo do peso");
    });

    test('classificacao = normal' , () => {
        this.pessoa = new Pessoa("Joao Gabriel", 78, 1.78);
        this.imccalc = new IMCCalculadora();
        expect(this.imccalc.calcular(this.pessoa).classificacao).toBe("normal");
    });

    test('classificacao = acima do peso' , () => {
        this.pessoa = new Pessoa("Joao Gabriel", 80, 1.78);
        this.imccalc = new IMCCalculadora();
        expect(this.imccalc.calcular(this.pessoa).classificacao).toBe("acima do peso");
    });

    test('classificacao = obeso' , () => {
        this.pessoa = new Pessoa("Joao Gabriel", 96, 1.78);
        this.imccalc = new IMCCalculadora();
        expect(this.imccalc.calcular(this.pessoa).classificacao).toBe("obeso");
    });
});