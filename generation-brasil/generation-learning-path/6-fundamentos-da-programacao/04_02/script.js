var saldo = 0; 
var mensagem = "x";

if (saldo > 0) {
   mensagem = "Saldo positivo!";
} else if (saldo == 0) {
   mensagem = "Saldo zero!";
} 
else {
   mensagem = "Saldo negativo!";
}

alert(mensagem);