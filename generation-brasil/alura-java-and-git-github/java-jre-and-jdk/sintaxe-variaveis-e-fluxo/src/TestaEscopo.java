
public class TestaEscopo {

	public static void main(String[] args) {

		System.out.println("Testando condicionais...");

		int idade = 18;
		int quantidadePessoas = 3;
		
		//boolean acompanhante = quantidadePessoas >= 2;
		//boolean acompanhante = true;

		boolean acompanhado;
		
		if (quantidadePessoas >= 2) {
			acompanhado = true;
		} else {
			acompanhado = false;
		}
		
		/*
		 * if (idade >= 18 || Acompanhante >= 2) {
		 * System.out.println("Condicional Completa! \n" + "Acesso permitido!"); } else
		 * { System.out.println("Condicional Incompleta! \n" +
		 * "Idade minima 18, ou esteja acompanhado de um responsavel de maior..."); }
		 */

		System.out.println("valor do boolean = " + acompanhado + " | Numero de acompanhantes = " + quantidadePessoas);
		
		if (idade >= 18 && acompanhado /*== true*/) {
			System.out.println("Condicional Completa! \n" + "Acesso permitido!");
		} else {
			System.out.println(
					"Condicional Incompleta! \n" + "Idade minima 18, ou esteja acompanhado de mais de duas pessoas...");
		}

	}

	// || significa ou

	// && significa e

	// == significa igual
}
