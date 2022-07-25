/* 
   Prototype 
   *prototype-based language
   * prototype chain 
   * __proto__
   
*/

/*
   type conversion (typecasting) vs type coersion 

   *alteracao de um tipo de dado para outro
   
*/

console.log('9'+ 5)
console.log(Nummber('9') + 5)

// Manipulando Strings e Numeros 
// Transformar String em Numero e Numero em String 

let String = "123"
console.log(Number(string))

let number = 321
console.log(String(number))

// Manipulando Strings e Numeros 
// Contar quantos caracteres tem uma palavra e quantos digitos tem um numero 

let word = "Paralelepipedo"
console.log(word.length)
let number = 1234 
console.log(String(number).length)



// Manipulando Strings e Numeros 
// Transformar um numero quebrado com 2 casas decimais e trocar ponto pro virgula 

let number = 345.333426256
console.log(number.toFixed(2).replace(".", ","))


// Transforme letras minusculas em maiusculas. faca o contrario disso tambem

let word = "Programar e muito bacana!"

console.log(word.toLowerCase())

console.log(word.toUpperCase())

// Verificar se o texto contem a palavra Amor 
// .includes = Case sensitive 

let phrase = "Eu quero pegar um tubo!"
console.log(phrase.includes("Tubo"))

// Manipulando Strings e Arrays 
// Separe um texto que contem espacoes, em um novo Array onde cada texto e uma posicao do Array. Depois disso, transforme o array em um texto e onde eram espacos, coloque _

let phrase = "Eu quero pegar um tubo"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

// Manipualando Arrays 
// Criar Array com construtor 
 
let myArray = new Array('a', 'b', 'c')
console.log(myArray)

// Contar elementos de um Array  

console.log(["a","b","c"].length)

// Transformar uma cadeia de caracteres em elementos de um Array 

let word = "Manipulando"
console.log(Array.from(word))

// Manipulando Arrys 

let techs = ["html", "css", "js"]

// adicionar um item no fim
console.log(techs.push("node.js"))
// adicionar no comeco 
techs.unshift('sql')
// remover do fim 
techs.pop()
// remover do comeco 
techs.shift()
// pegar somente alguns elementos do array 
console.log(techs.slice(1, 3))
// remover 1 ou mais items em qualquer posicao do array 
techs.splice(1, 1)
// encontrar a posicao de um elemento no array 
let index = techs.indexOf('css')

console.log(techs)


/* Expressoes e Operadores 

-Expressions
-Operators
   Binary 
   Unary 
   Ternary
*/

let number = 1 // isso e uma expressao 
let number // expressao e qualuer linha de codigo c


console.log(number + 1) // isso e um operador binario 
console.log(++number) // isso e um operador Unary 
console.log(true ? 'alo : nada') // isso e um operador ternary

/* 
   New 
   *Left-hand-side expression 
   * criar um novo objeto
*/

let name = new String('Julio')
name.surName = 'Mota'
let age = new Number(23)
console.log(name, age)

/* 
   Operadores unarios
   typeof 
   delete
*/
const person = (
    name = 'julio',
    age = 25 
)

delete person.age
console.log(typeof 'julio')

// Operadores Aritimeticos 

// Multiplicacao *
console.log(3.2 * 5)
// Divisao /
console.log(12 / 2)
// Soma +
console.log(20 + 40)
// Subtracao  -
console.log(50 - 90)

// Resto da divisao %
let remainder 
remainder = 11 % 10
console.log(remainder)

// Incremento ++
  let Increment = 0
  Increment++
  console.log(Increment)
// Decremento --
let decrement = 0
console.log(--decrement) // o incremento e o decremeto podem ser escritos desses dois jeitos 
// Exponencial **
console.log(3 ** 3)

// Grouping operator ( )
let total = (2 + 5) * 6 
console.log(total)

// Operadores de comparação 

// Ira comparar valore e retornar um Boolean como respota a comparacao 

let one = 1 
let two = 2 

// =      let recebe 1 

// ==       igual a 
// console.log( two == 1)
// console.log( one == "1")

// !=      diferente de
// console.log(one != two)
// console.log(one != 1)
// console.log(one != "1" 

// ===    Estritamente igual a 
// console.log(one === "1")
// console.log(one === 1)

// !==    Estritamente diferente de 
// console.log(two !=== "2")
// console.log(two !=== 2)

// >  Maior que 
// console.log(one > two)

// >=  Maior igual a 
// console.log(one >= 1)
// console.log(two >= 1)

// <   Menor que 
// console.log(one < two)

// <=  Menor igual a 
// console.log(one <= two)
// console.log(one <= 1)
// console.log(oen <= 0)

// Operadores de atribuicao (Assignment)
let x 

console.log(x)

// assignment 
// x = 1 

// addition assignment 
// x = x + 2 
// x += 2 

// subtracion assignment 
// x = x - 1
// x -= 1 

// multiplication assignment 
// x = x * 2 
// x *= 2 

// division assignment 
// x = x / 2 
// x /= 2 

// Remaninder, Exponetiaion
// x %= 2 
// x **= 2

// Operadores logicos (logical operators)

// -2 valores booleanos, quando verificados,
// resultara em verdadeiro ou falso 

let pao = true 
let queijo = true 

// AND &&
console.log(pao && queijo)

// OR ||
console.log(pao || queijo)

// NOT !
console.log(!pao)

// Operador Condicional (ternario)

// Dependendo da condicao, nos receberemos valores diferentes 

// condicao entao valor 1 se nao valor 2 
// condition ? value1 : value2 

// Exemplos 
// cafe da manha top
let leite  = true 
let nescau = true

const niceBreakFast = leite && queijo ? // se tiver os dois && cafe top, se nao tiver os dois cafe ruim 
'cafe top' : 'cafe da manha ruim'

const niceBreakFast = leite || queijo ?
'cafe top' : 'cafe da manha ruim'

// Maior de 18 

let age = 16 
const canDrive = age >= 18 ? 'Can Drive' : "Can't Drive"

// Operador de string (String operator)

// comparison (comparacao)
console.log('A' == "A")

// concatenation (concatenacao)

// Retorna a uniao de duas Strings 
let alpha = 'alpha'
console.log(alpha + 'bet' + 's')

console.log(alpha += 'bet') // outro jeito de fazer 

/* 
    FALSY
    Quando um valor e considerado false em contextos onde um booleano e obrigatorio (condicionais e loops)

      false 
      0
      -0 
      ""
      null
      undefined
      NaN
  
*/

  console.log( ? 'verdadeiro': 'falso')

/* 
 TRUTHY 
 Quando um valor e considerado true em contextos onde um booleano e obrigatorio (condicionais e loops)
 
   true 
   {}
   []
   1 
   3.23
   "0"
   "false"
   -1 
   Infinity 
   -Infinity
 
*/

console.log( ? 'verdadeiro': 'falso')

/* Operator precedence 
   Precedencia de operadores 

   * Grouping                                      ()
   * Negacao e incremento                          ! ++ --
   * Multiplicacao e divisao                       * /
   * Adicao e subtracao                            + - 
   * Relacional                                    < <= > >=c
   * Igualdade                                     == != === !==
   * AND                                           &&
   * OR                                            ||
   * Condicional                                   ?:
   * Assignment (atribuicao)                       = += -= *= 

*/
