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

