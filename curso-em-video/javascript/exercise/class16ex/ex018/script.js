let num = document.getElementById("num");
let list = document.getElementById("list");
let res = document.querySelector("div#res");
let values = [];

function isNum(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNum(num.value) && !inList(num.value, values)) {
    values.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado`;
    list.appendChild(item);
    res.innerHTML = "";
  } else {
    window.alert("Valor inválido ou já encontrado na lista.");
  }
  num.value = "";
  num.focus();
}

function finalizar() {
  if (values.length == 0) {
    window.alert("Adicione valores antes de finalizar!");
  } else {
    let tt = values.length;
    let higher = values[0];
    let smallest = values[0];
    let sum = 0;
    let medium = 0;
    for (let pos in values) {
      sum += values[pos];
      if (values[pos] > higher) higher = values[pos];
      if (values[pos] < smallest) smallest = values[pos];
    }
    medium = sum / tt;
    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo, temos ${tt} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${higher}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${smallest}.</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${sum}.</p>`;
    res.innerHTML += `<p>A média dos valores digitados é ${medium}.</p>`;
  }
}
