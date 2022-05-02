programa {
	funcao inicio() {
		real nota1,nota2,nota3,nota4,media
		cadeia aluno 
		
		escreva("Digite o nome do aluno:")
		leia(aluno)
		escreva("Digite a 1°Nota: ")
		leia(nota1)
		escreva("Digite a 2°Nota: ")
		leia(nota2)
		escreva("Digite a 3°Nota: ")
		leia(nota3)
		escreva("Digite a 4°Nota: ")
		leia(nota4)
		
		media = (nota1+nota2+nota3+nota4)/4
		
		escreva("O aluno " + aluno + " Obteve a média : " + media )
	}
}
