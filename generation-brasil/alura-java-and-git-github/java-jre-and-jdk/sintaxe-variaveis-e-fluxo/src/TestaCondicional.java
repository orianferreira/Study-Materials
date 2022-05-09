
public class TestaCondicional {

	public static void main(String[] args) {

		System.out.println("Testando condicionais...");

		int idade = 18;
		int acompanhante = 1;

		if (idade >= 18) {
			System.out.println("Condicional Completa! \n" + "Acesso permitido!");
		} else {
			if (acompanhante >= 1) {
				System.out.println(
						"Condicional Completa! \n" + "Permaneca perto de seu responsavel para evitar transtornos...");
			} else {
				System.out.println("Condicional Incompleta! \n"
						+ "Idade minima 18, ou esteja acompanhado de um responsavel de maior...");
			}
		}

		/*
		 * System.out.println("Compra aprovada!");
		 * System.out.println("A condicional Falhou! \n Compra negada!"); }
		 */
	}

}
