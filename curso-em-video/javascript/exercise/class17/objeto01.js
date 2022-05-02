//let amigo = []
//console.log(typeof amigo)

let paciente = { nome: "Kleber", sexo: "M", peso: "90.5", engordar(p=0) {
    console.log('Engordou')
    this.peso += p
} };


paciente.engordar(2)
console.log(`${paciente.nome} pesa ${paciente.peso}Kg`)
