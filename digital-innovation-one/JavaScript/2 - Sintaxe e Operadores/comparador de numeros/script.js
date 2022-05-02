function comparacao() {
  let n1 = Number(prompt("Digite o primeiro valor: "));
  let n2 = Number(prompt("Digite o segundo valor: "));
  let res;

  res = n1 + n2;

  if (n1 == n2) {
    alert(`Os números ${n1} e ${n2} são iguais, e sua soma é ${res}`);
    novaOperaçao();
  } else {
    alert(`Os números ${n1} e ${n2} não são iguais, e sua soma é ${res}`);
    novaOperaçao();
  }

  function novaOperaçao() {
    let opcao = prompt("Deseja fazer outra operação?\n\n 1 - Sim\n 2 - Não");

    if (opcao == 1) {
      comparacao();
    } else if (opcao == 2) {
      alert("Até mais");
    } else {
      alert("Digite uma opção válida!");
    }
  }
}

comparacao();

/* 
function comparaNumeros(num1, num2) {
  if (!num1 || !num2) return "Defina dois números!";

  const primeiroFrase = criaPrimeiraFrase(num1, num2);
  const segundaFrase = criaSegundaFrase(num1, num2);

  return `${primeiroFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
  let saoIguais = "";

  if (num1 !== num2) {
    saoIguais = "Não";
  }

  return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
  const soma = num1 + num2;

  let resultado10 = "menor";
  let resultado20 = "menor";

  const compara10 = soma > 10;
  const compara20 = soma > 20;

  if (compara10) {
    resultado10 = "maior";
  }

  if (compara20) {
    resultado20 = "maior";
  }

  return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
}

console.log(comparaNumeros(20, 20));
 */