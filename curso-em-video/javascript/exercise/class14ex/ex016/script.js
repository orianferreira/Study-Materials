function contar() {
  let num = document.getElementById("numero");
  let fim = document.getElementById("fim");
  let pas = document.getElementById("passo");
  let res = document.getElementById("res");

  if (num.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
    //window.alert("[ERRO] Faltam dados!");
    res.innerHTML = "Impossivel contar \u{1F975}";
  } else {
    res.innerHTML = "Contando: ";
    let n = Number(num.value);
    let f = Number(fim.value);
    let p = Number(pas.value);
    if (p <= 0) {
      window.alert("Passo invalido, valor minímo aceito: 1");
      p = 1;
    }
    if (n < f) {
      //Contagem crescente
      for (let c = n; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F976}`;
      }
    } else {
      //Contagem decrescente
      for (let c = n; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F976}`;
      }
    }
  }
}
