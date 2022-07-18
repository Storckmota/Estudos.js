//Declare uma variavel de nome weight 
let weight;

//Declare tipo de dado e a variavel acima?
console.log(typeof weight)

/*
    3. Declare uma variavel e atribua valores para cada um dos dados:
      *name: String 
      *age: Number (integer)
      * stars: Number (float = numero quebrado)
      * isSubscribed: Boolean
*/

let name = "Jhon"
let age = 23 
let stars = 4.5 
let isSubscribed = True 


/* 
    4. A variavel student abaixo e de que tipo de dados?

    4.1 Atribua a ela as memas propriedades e valores do exercicio 3.

    4.2 Mostre no console a seguinte mensagem: 
     
            <name> de idade <age> pesa <weight> kg. 

            Atencao, substitua <name> <age> <weight> pelos 
            valores de cada propriedade do objeto

*/

let student = {
        name: "Jhon",
        age: 23 ,
        weight: 84.5 ,
        isSubscribed: True 

};
 
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/* 
 
    5. Declare uma variavel do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, 
       somente o Array vazio
*/

let students = {}

/*
    6. Reatribua valor para a variavel acima, colocando dentro dela o objeto student da questao 4. (nao copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

students = [
    student 
]

console.log(students)

/*
    7. Coloque no console o valor da posicao zero do array acima 
*/

console.log(students[0])

/* 
    8. Crie um novo student e coloque na posicao 1 do Array students
*/

const jhon = {
    name: "jhon",
    age: 23,
    weight: 74.8,
    isSubscribed: True
}

students[1] = jhon 
console.log(students)
   

/* 
   9. Sem rodar o codigo responda qual e a resposta do codigo abaixo e porque ? 
   Apos sua resposta, rode o codigo e veja se voce acertou 

*/

   console.log(a)
   var a = 1

