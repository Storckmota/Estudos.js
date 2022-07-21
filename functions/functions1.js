// funcao expression 
// funtion amonymous

//paramentros (parameters)
const sum = function(number1, number2){
    console.log(number1 + number2)

}

sum(2,3) //arguments - argumentos


//function scope 
let subject = 'create video'

function createThink(subject){
    subject = 'study'
    return subject 
}

console.log(crateThink(subject))
console.log(subject)


//function hoisting 

sayMyName()

function sayMyName(){
    console.log('Julio')
}

//Arrow function 

 const sayMyName = (name) => {
    console.log(name)
 }

 sayMyName('Julio')

 //Callback Function 

 function sayMyName(name) {
    console.log('antes de executar uma callback')

    name()

    console.log('depois de executar uma callback')
 }

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)


/* 
    function() constructor 

    *expressao new 
    * criar um novo objeto
    * this keyword
  
*/ 

function Person(name){
    this.name = name 
    this.walk = function(){
        return this.name + "esta andando"
    }
}

const mayk = new Person("Mayk")
const joao = new Person("joao")
console.log(Mayk.walk())
console.log(joao.walk())





