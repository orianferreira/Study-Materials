programa {
	funcao inicio() {
		inteiro contador,limite,resultado,num
		
		contador = 1
		limite = 10
		
		escreva("Qual será o multiplicador? ")
		leia(num)
		
		faca { 
		    resultado = num * contador
		    escreva(num + " x " + contador + " = " + resultado + "\n")
		    contador++
		} enquanto (contador<=limite)
	}
}
