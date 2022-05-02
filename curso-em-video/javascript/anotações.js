/* 

Windows: window.alert() | window.confirm() |  window.prompt()

    Comentários: HTML <!-- --> | JS // | JS & CSS ('barra e asterisco e depois asterisco e barra')

    Identificadores: Podem começar com letra, $ ou _ | Não podem começar com números | É possível usar letras ou números | É possível usar acentos e símbolos não podem conter espaços |  Não podem ser palavras reservadas

    Dicas: Maiúsculas e minúsculas fazem diferença | Tente escolher nomes coerentes para as variáveis | Evite se tornar um ´programador alfabeto´ ou um ´programador contador´

    Data Types: number - Infinity - NaN | string | boolean | null | undefined | object - Array | function

    Formatando Strings: var s = ´JavaScript´ | ´Eu estou aprendendo s´ //não faz interpolaçãp | ´Eu estou aprendendo´ + s //usa concatenação | `Eu estou aprendendo ${s}` //usa templace string | s.length //quantos caracteres a string tem | s.toUpperCase() //tudo para 'Maiúsculas' | s.toLowerCase() //tudo para 'minúsculas'

    Formatando Números: > var n1 = 1545.5
    undefined
    > n1
    1545.5
    > n1.toFixed(2)
    '1545.50'
    > n1.toFixed(2).replace('.', ',')
    '1545,50'
    > n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
    'US$ 1.545,50'
    
    Operadores: aritméticos | atribuição | relacionais | lógicos | ternários

    Aritméticos: + | - | * | / | % | **

    Precedencia:

        ()

        **

        * | / | %

        + | -

    Atribuição simples: var a = 5 + 3 | var b = a % 5 | var c = 5 * b ** 2 | var d = 10 - a / 2 | var e = 6 * 2 / d | var f = b % e + 4 / e 

    > var a = 5 + 3
    undefined
    > a
    8
    > var b = a % 5
    undefined
    > b
    3
    > var c = 5 * b ** 2
    undefined
    > c
    45
    > var d = 10 - a / 2
    undefined
    > d
    6
    > var e = 6 * 2 / d
    undefined
    > e
    2
    > var f = b % e + 4 / e
    undefined
    > f
    3
    >

    Auto-atribuição: var n = 3 | n = n + 4 | n = n - 5 | n = n * 4 | n = n / 2 | n = n ** 2 | n = n % 5

    Simplificando: n += 4 | n -= 5 | n *= 4 | n /= 2 | n **= 2 | n %= 5

    Incremento e decremento: var x = 5 | x = x + 1 | x = x -1

    Simplificando: x ++ | x --

    Relacionais: > | < | >= | <= | == | != 

    5 > 2 = true
    7 < 4 = false
    8 >= 8 = true
    9 <= 7 = false
    5 == 5 = true
    4 != 4 = false

    preço >= 200.50 //o preço é maior ou igual a 200.50?
    idade < 18 //a idade é menor do que 18?
    curso == 'JavaScript' //o curso é JavaScript
    n1 != n2 //o primeiro número é diferente do segundo?

    Identidade: 5 == 5 = true | 5 == '5' = true | 5 === '5' = false | 5 === 5 = true

    Lógicos: ! negação | && conjunção | || disjunção

            true = false
        ! 
            false = true


        true        true = true
        true        false = false
               &&
        false       true = false
        false       false = false


        true        true =true
        true        false = true
               ||
        false       true = true
        false       false = false

    idade >= 15 && idade <= 17 //a idade está entre 15 e 17 ?
    estado == 'RJ' || estado == 'SP' //o estado é RJ ou SP?
    salário > 1500 && sexo != 'M' //o salário é acima de 1500 e não é homem?

    Precedência: Aritméticos, Relacionais, Lógicos

        () ** / ... 

        > < >= ... 

        ! 

        && 

        ||

    
    Ternários: ? | :

        teste   ?   true    :   false

        média >= 7.0    ?   "Aprovado"  :   "Reprovado"

    DOM: Document Object Model

                            Árvore DOM
                                |
                              windows
                                |
                 location----document----history
                                |
                               html 
                              /   \
                           head    body_______
                          /   \      |\   \   \
                      meta    title  | \   \   \
                                     |  \   \   \
                                     |   \   \   \
                                     |    \   \   \
                                    h1     p   p   div
                                               |
                                             strong

    Selecionando: 

            por Marca = getElementsByTagName() | exemplo: getElementsByTagName('p')[0] | window.document.write()

            por ID = getElementsById() | exemplo 

            por Nome = getElementsByName() | 

            por Classe = getElementsByClassName() | 

            por Seletor = querySelector() | querySelectorAll() |

    Tecnicas: 

            TagName 

            ID 

            Name 

            ClassName 

            querySelector 


    Eventos DOM:

            mouseenter      mousemove

            mousedown       mouseup

            click           mouseout

    Funções: function ação(param) {}

            
    sequencias:
    
            var n = 3

            n += 2

            window.document(n)

            .

    Condições:

            ()

        true    false

            ()

            .
            

        if (condição) {
            true
        }

        else {
            false
        }

    Tipos de Condição: 

        Condição simples:

            if (condição) {
                true
            }

        Condição composta:

            if (condição) {
                true
            }

            else {
                false
            }

    Condições Aninhadas:

            if (cond1) {
                bloco1
            }

            else {
                if (cond2) {
                    bloco2
                }

                else {
                    bloco3
                }
            }

    Condição Múltipla:

            switch (expressão) {
                case valor 1:

                    break

                case valor 2:

                    break
    
                case valor 3:

                    break
        
                default:
                    
                    break
            }

    Variáveis : Variáveis simples só conseguem armazenar um valor por vez. | Variáveis compostas devem ser capazes de armazenar vários valores em uma mesma estrutura.    
    
    Array : é uma variável que tem varios elementos, cada elemento é composto por seu valor e por uma chave de indentificação
    
    Funções : São ações executadas assim que são chamadas ou em decorrência de algum evento. | Uma função pode receber parâmetros e retornar um resultado.
    
    Nossa rota até aqui... : fundamentos | variáveis e dados | operadores | condições | repetições | arrays | functions | DOM

    Nossa Rota daqui pra frente... : functions | objetos | modularização | RegEx | JSON | AJAX | NodeJS

    Introdução a objetos :

    Array :
            let num = [5, 8, 4]
            num
                °5 ¹8 ²4

    Objetos :
            let amigo = {nome:'', sexo:'', cor:'', função(p){}}
            amigo
                nome = |sexo = |cor = |[function]

    */
