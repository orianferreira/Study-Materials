// Parte 1 - Início

var combustivel = "Elétrico"; 

switch (combustivel) {
    case "Álcool":
        alert("Preço: R$3.00");
    case "Gasolina": 
        alert("Preço: R$3.30");
    default:
        alert("Tipo de combustível desconhecido");
}

// Parte 1 - Fim

var combustivel = "Elétrico"; 

switch (combustivel) {
    case "Álcool":
        alert("Preço: R$3.00");
        break;
    case "Gasolina": 
        alert("Preço: R$3.30");
        break;
    default:
        alert("Tipo de combustível desconhecido");
}

// Parte 2 - Início

var combustivel = "Elétrico"; 

switch (combustivel) {
    case "Elétrico":
    case "Álcool":
        alert("Preço: R$3.00");
        break;
    case "Gasolina": 
        alert("Preço: R$3.30");
        break;
    default:
        alert("Tipo de combustível desconhecido");
}

