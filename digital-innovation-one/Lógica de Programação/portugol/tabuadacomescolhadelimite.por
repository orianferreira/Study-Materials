programa {
	funcao inicio() {
		inteiro contador,limite,resultado,num
		
		contador = 1
		
		escreva("Qual será o multiplicador? ")
		leia(num)
		
		escreva("Até qual numero sera Multiplicado ?")
		leia(limite)
		
		faca { 
		    resultado = num * contador
		    escreva(num + " x " + contador + " = " + resultado + "\n")
		    contador++
		} enquanto (contador<=limite)
	}
}
