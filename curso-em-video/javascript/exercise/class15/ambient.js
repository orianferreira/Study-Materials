let num = [5, 8, 2, 9, 3];

num.push(1); //Adiciona o valor definido como ultimo dos elementos

num.sort(); //Alinha os valores em ordem crescente

//num[3] = 6 //Cria um elemento com o valor instruido

//num.push(7) //Cria um elemento no ultimo lugar do array com um valor instruido

//console.log(num)
console.log(`Nosso vetor é o ${num}`);
//console.log(num[0])
console.log(`O vetor tem ${num.length} posições`);
//console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8);

if (pos == -1) {
  console.log("O valor não foi encontrado!");
} else {
  console.log(`O valor esta na posição ${pos}`);
}
