function somaDivisiveisPorTresOuCinco(numero) {

    let soma = 0;

    if (typeof numero !== 'number' || !Number.isInteger(numero) || arguments.length !== 1) {
        return 'Número inválido. Informe um número inteiro e positivo!';
    }

    if (numero <= 0) {

        return 'Número inválido. Informe um número inteiro e positivo!'

    } else {

        for (let i = 1; i < numero; i++) {

            if (i % 3 === 0 || i % 5 === 0)
                soma += i;

        }
        return soma;
    }

}

function atualizarResultado() {
    numeroInformado = Number(document.getElementById('num').value);
    document.getElementById('result').innerHTML = '<b>' + somaDivisiveisPorTresOuCinco(numeroInformado) + '<b>';
}


