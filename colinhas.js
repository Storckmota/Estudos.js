/*

<script type: text/javascript src="script.js"></script>
Para chamar o arquivo JS no head do código HTML:

alert("assunto do alerta");
Serve para fazer aparecer algum alerta na tela do usuário.

document.write = algumacoisa;
Serve para escrever algo no HTML.

onclick= window.location.href= ' ';
Pode-se colocar isso dentro de um button para redirecionar para algum lugar ao clicar.

document.getElementByID('nomedoID').innerHTML =;
Serve para modificar o Elemento de ID dentro do HTML, serve também para Classes.

This (dentro de alguma função ou entre parênteses após algum evento)
Ex: dentro de um Button por this.innerHTML = alguma coisa para mudar o próprio texto do button, o This mais é um indicador contextual.

setInterval(function(){

}, 500)
Serve para criar uma função ou qualquer outra coisa a cada tempo.
Tipo, a cada 500 milisegundos X coisa acontece.


parseInt
Serve para transformar uma String num Number.
Ex:
parseInt(document.getElementById('campo1').value);

nomedoarray.indexOf("nomedovalor");
Serve para varrer um Array especifico e encontrar aquele determinado item do Array.
Exemplo:

If(nomedoarray.indexOf("nomedovalor") > -1){

alert(achou)

}Else{
 	alert(‘não achou’)
}

nomedoarray.push("nomedaadicao");
Para adicionar um novo item ao Array especificado.

nomedoarray.join("/ ou ,");
Para separar o Array em string separados pelo valor colocado entre parenteses, seja barras, vírgulas ou até mesmo palavras.

nomedoarray.pop; // Serve para remover o último item do Array.

nomedoarray.shift;
Serve para remover o primeiro item de um array.

var nomedacoisa = document.createElement("div");
Serve para criar um elemento na página HTML, no caso do exemplo é uma div.

nomedacoisa.setAttribute("class", "nomedaclass");
Serve para atribuir uma class e o nome dela ao elemento criado, usando sua variável como identificação.

Tipos de dados:

Boolean = quando a var é declarada em true ou false.

Null = se declara a var usando Null.

Undefined = Quando não tenho Variavel definida.

Number = Número (se declara a var apenas com números, sem aspas)

String = Letras (Se declara a var com palavras entre aspas)

== (Comparação se é igual) se colocar 2 == 3 vai dar false no console.

=== Comparação de número e tipo

!= não é igual (diferente)

!== Diferente em tipo

> Maior que

< Menor que 

>= Maior e igual 

<= Menor e igual

-------------

&& E
|| Ou

--------------

If (idade < 10)
9 anos

If else (idade >65)
66 anos

Else {

Entre essas idades

}

switch (conceito)

case (COPIAR FALA E DAR DESCRIÇÃO)

for() é usado para repetir coisas num certo número de vezes, um while otimizado, dentro da própria parênteses.
Ex: for(x = 0; x < 10; $x++)

Math.floor(Math.random() * 500)
Math floor faz o número virar decimal, por isso o math.random fica dentro dele e o 500 é o número limite pro random chegar.

while (número < 10){

console log "Número" + número

*SEMPRE incremente número++ no while no fim do print senão irá ficar imprimindo valores eternamente.

Array são "agrupamentos"
Exemplo:

var alunos = new Array("A", "B", "C")

Para eu ver apenas o A, devo me referir a à variavel e fora dela entre couchetes o 0 e sucessivamente para outros "objetos"

function nomefuncao () {

function novoAluno (nome, idade){
	return {nome, idade}
}

Let alunos = [
novoAluno(“Alexandre”, “19”)
]

Essa função serve para criar alunos num Array (a chave que está no return faz esse trabalho)

Function temMenosDe30(aluno){
	return aluno.idade < 30
}

Let alunosComMenosde30 = alunos.filter(temMenosDe30)

Console.log(alucomMenosde30)

Essa função serve para filtrar alunos mais jovens do que trinta anos, similar ao PHP.

Function nomeIdade(nome){
Return aluno.nome + “ tem “ + aluno.idade “ anos”

}
Console.log(aluno.map(nomeIdade))
Essa função cria repetições no Array com as informações retornadas.


Conta de matemática 

}

nomeobjeto.forEach(function (elemento){
console.log(elemento)
}) 
Para varrer todo o conteúdo do objeto com For.

Essa função retorna um cálculo do total de alunos:

function novoAluno (nome, idade) {
    return {nome, idade };

}

let alunos = [
    novoAluno("Mario", 19),
    novoAluno("José", 25),
    novoAluno("Lucas", 18),
    novoAluno("Caio", 20),
    novoAluno("Biro", 23)
]

function idadedaTurma(total, alunos){
    return total + alunos.idade;
}

console.log(alunos.reduce(idadedaTurma, 0));

//Esse 0 é um ponto de partida pro calculo. */
