function realizarOperacao(n1, n2, operacao) {
    let resultado;
    
    switch (operacao) {
        case '1':
            resultado = n1 + n2;
            break;
        case '2':
            resultado = n1 - n2;
            break;
        case '3':
            resultado = n1 * n2;
            break;
        case '4':
            resultado = n1 / n2;
            break;
        case '5':
            resultado = n1 % n2;
            break;
        case '6':
            resultado = n1 ** n2;
            break;
        default:
            return 'Operação Inválida';
    }

    return `${n1} ${resultado} ${n2} = ${resultado}`;
}

function novaOperacao() {
    let opcao = prompt('Deseja fazer outra operação? \n 1 - Sim \n 2 - Não');

    if (opcao == '1') {
        calculadora();
    } else if (opcao == '2') {
        alert('Até mais!');
    } else {
        alert('Digite uma opção válida!');
        novaOperacao();
    }
}

function pedirValor(mensagem) {
    let valor;

    do {
        valor = Number(prompt(mensagem));
        if (isNaN(valor)) {
            alert('Parâmetro Inválido. Insira um número válido.');
        }
    } while (isNaN(valor));

    return valor;
}

function calculadora() {
    const operacao = prompt('Faça sua Operação:\n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão Real (/) \n 5 - Divisão Inteira (%) \n 6 - Potenciação (**)');

    if (isNaN(operacao) || operacao < 1 || operacao > 6) {
        alert('Operação Inválida!');
        calculadora();
        return;
    }

    let numero1 = pedirValor('Insira o primeiro valor: ');
    let numero2 = pedirValor('Insira o segundo valor: ');

    const resultado = realizarOperacao(numero1, numero2, operacao);

    if (resultado !== 'Operação Inválida') {
        alert(resultado);
    }

    novaOperacao();
}

calculadora();