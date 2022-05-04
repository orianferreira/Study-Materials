function funcaoUm() {
  var a = 5; 
  var b = 10;
  funcaoDois();
  var c = a + b;
}

function funcaoDois() {
  var mensagem;
  mensagem = "Olá!";
  funcaoTres();
}

function funcaoTres() {
  var i = 0;
  var total = 0;

  while (i < 100) {
    total = total + 100;
    i++;
  }

  funcaoQuatro();
}

function funcaoQuatro() {
  meuTitulo.innerHTML = "Esse é um novo titulo!";  
}

var meuTitulo = document.getElementById("tituloPrincipal");

meuTitulo.onclick = function () {
  funcaoUm();
} 

