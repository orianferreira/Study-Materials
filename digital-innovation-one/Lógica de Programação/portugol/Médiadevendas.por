programa {
	funcao inicio() {
		real janeiro,fevereiro,marco,abril,media
		cadeia vendedor
		
		escreva("Digite o nome do Vendedor:")
		leia(vendedor)
		escreva("DIgite o valor arrecadado em Janeiro")
		leia (janeiro)
		escreva("DIgite o valor arrecadado em Fevereiro")
		leia(fevereiro)
		escreva("DIgite o valor arrecadado em Março")
		leia(marco)
		escreva("DIgite o valor arrecadado em Abril")
		leia(abril)
		
		media = (janeiro+fevereiro+marco+abril)/4
		
		escreva("O vendedor " + vendedor + " Obteve a Média de " + media + "R$ em vendas!")
	}
}
