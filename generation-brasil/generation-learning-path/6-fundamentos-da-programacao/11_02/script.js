function funcaoUm() {
  // alert("funcaoDois vais ser chamada");
  funcaoDois();  
}

function funcaoDois() {
  // alert("funcaoTres vais ser chamada");
  funcaoTres();
}

function funcaoTres() {
  // alert("funcaoQuatro vais ser chamada");
  funcaoQuatro();
}

function funcaoQuatro() {
  // alert("Vou mudar o titulo");
  meuTitulo.innerHTML = "Esse é um novo titulo!";  
}

// alert("Documento JavaScript carregado");

var meuTitulo = document.getElementById("tituloPrincipal");

meuTitulo.onclick = function () {
  // alert("funcaoUm vai ser chamada");
  funcaoUm();
  // alert("funcaoUm foi chamada");
} 

