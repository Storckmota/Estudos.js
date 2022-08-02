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


   /* ### transformar notas escolares 

   crie um algoritmo que transforme as notas do sistema numerico 
   para sistema alfabetico do tipo A B C D F 

   * de 90 para cima - A 
   * entre 80 - 89 - B
   * entre 70 - 79 - C
   * entre 60 - 69 - D
   * menor que 60
   
*/ 

let score = 90;
 
function getScore(score){
   
    let scoreA = score >= 90 && <= 100;
    let scoreB = score >= 80 && <= 89;
    let scoreC = score >= 70 && <= 79;
    let scoreD = score >= 60 && <= 69;
    let scoreF = score < 60 && score>= 0;

    let scoreFinal; 

    if(scoreA){
        scoreFinal = "A"
    } else if (scoreB){
        scoreFinal = "B"
    } else if (scoreC){
        scoreFinal = "C"
    } else if (scoreD){
        scoreFinal = "D"
    } else if (scoreF){
        scoreFinal = "F"
    } else {
        scoreFinal = "Nota Invalida"
    }

    return scoreFinal
}

console.log(getScore(101))
console.log(getScore(100))
console.log(getScore(70))
console.log(getScore(-2))


/* ### Sistema de gastos familiar 

    crie um objeto que possuira 2 propriedades, ambas do tipo array:
        * receitas: []
        * despesas: []
        
    agora, crie um funcao que ira calcular o total de receitas e despesas e ira mostrar uma mensagem se a familia esta com saldo positivo ou negatico, seguido o valor do saldo

*/

  let family = {
    incomes: [2500, 4000, 7000, 500.50],
    expenses: [320.50, 5000, 600, 700]
  }

  function sum(array){
        let total = 0;

            for(let value of array){
                total += value 
            }

    return total

  }

  function calculeteBalance(){
      const calculeteIncomes = sum(family.incomes)
      const calculteExpenses = sum(family.expenses)

    const total = calculeteIncomes - calculteExpenses

    const itsOk = total >= 0 
    
    let balanceText = "Negativo"

    if (itsOk){
      balanceText = "Positivo"

    }

    console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`)
  }


  calculeteBalance()


/*  ### Celsius em Fahrenheit 

     Crie uma funcao que receba uma string em celsius ou fahrenheit e faca a transformacao de uma unidade para outro 

     C = (f - 32) * 5/9 

     F = C * 9/5 + 32 

*/ 

// transform('50f')
function transformDegree(degree){
    const celsiusExist = degree.toUpperCase().includes('C')
    const fahrenheitExist = degree.toUpperCase().includes('F')


    if(!celsiusExist && !fahrenheitExist){
        throw new Error('degree not found ')
    }

    // fluxo ideal F -> c 
    let updateDegree = Number(degree.toUpperCase().replaced("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'


    if (celsiusExist) {
        updateDegree = Number(degree.toUpperCase().replaced("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'


    }

    return formula(updateDegree) + degreeSign
}

try {
   console.log(transformDegree('50F'))
   transformDegree('50Z')
} catch(error){
    console.log(error.message)
}


/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length

console.log(totalCategories);
for(let category of booksByCategory){
    console.log('total de livros da categoria', category.category)
    console.log(category.books.length)
}

function countAuthors(){
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    
    }
  console.log("Total de autores", authors.length)
}

countAuthors();

function booksOfAugustoCury(author){
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){
             if(book.author === author){
                books.push(book.title)
             }
            
        }
    
    }
  console.log(`Livors do autor ${author}: ${books.join(", ")} `)
}

booksOfAuthor('Augusto Cury');