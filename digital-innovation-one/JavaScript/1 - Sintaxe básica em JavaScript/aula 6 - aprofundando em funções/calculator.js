function calculadora() {
  const operacao = Number(
    prompt(
      "Escolha uma operação:\n\n 1 - Soma (+)\n 2 - subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)\n"
    )
  );

  if (!operacao || operacao >= 7) {
    alert("Erro - operação inválida!");
    calculadora();
  } else {
    let n1 = Number(prompt("Primeiro valor: "));
    let n2 = Number(prompt("Segundo valor: "));
    let res;

    if (!n1 || !n2) {
      alert("Erro - parâmetros inválidos!");
      calculadora();
    } else {
      function soma() {
        res = n1 + n2;
        alert(`${n1} + ${n2} = ${res}`);
        novaOperação();
      }

      function subtracao() {
        res = n1 - n2;
        alert(`${n1} - ${n2} = ${res}`);
        novaOperação();
      }

      function multiplicacao() {
        res = n1 * n2;
        alert(`${n1} x ${n2} = ${res}`);
        novaOperação();
      }

      function divisaoReal() {
        res = n1 / n2;
        alert(`${n1} / ${n2} = ${res}`);
        novaOperação();
      }

      function divisaoInteira() {
        res = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${res}`);
        novaOperação();
      }

      function potenciacao() {
        res = n1 ** n2;
        alert(`${n1} elevado a ${n2}ª é igual a ${res}`);
        novaOperação();
      }

      function novaOperação() {
        let opcao = prompt(
          "Deseja fazer outra operação?,\n\n 1 -Sim\n 2 - Não"
        );

        if (opcao == 1) {
          calculadora();
        } else if (opcao == 2) {
          alert("Até mais");
        } else {
          alert("Digite uma opção válida!");
          novaOperação();
        }
      }
    }

    /* 
    if (operacao == 1) {
      soma();
    } else if (operacao == 2) {
      subtracao();
    } else if (operacao == 3) {
      multiplicacao();
    } else if (operacao == 4) {
      divisaoReal();
    } else if (operacao == 5) {
      divisaoInteira();
    } else if (operacao == 6) {
      potenciacao();
    }
 */

    switch (operacao) {
      case 1:
        soma();
        break;

      case 2:
        subtracao();
        break;

      case 3:
        multiplicacao();
        break;

      case 4:
        divisaoReal();
        break;

      case 5:
        divisaoInteira();
        break;

      case 6:
        potenciacao();
        break;
    }
  }
}

calculadora();
