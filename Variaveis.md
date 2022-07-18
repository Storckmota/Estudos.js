# Variaveis 

* Nomes simbolicos para receber algum valor 
* Atalhos de codigo 
* Identificadores 

* 3 palavras reservadas para criar uma variavel 
      * var 
      * let 
      * const 


O JS é uma linguagem fracamente tipada e dinamica 

- Variáveis não precisam de ter um tipo previamente definido 

- Podemos mudar o conteúdo da variável 

# Scope 

*  Escopo determina a visibilidade de alguma variável no JS escopo = {}

# Block statement 
```js 
//  vamos inicar um bloco 

{
    // aqui dentro é um bloco e posso colocar qualquer codigo 

    // aqui fechamos o bloco
}
```

O bloco, também criará um novo escopo. Chamamos de ` block-scope` 


## Var

```js 

// var é global e poderá funcionar dentro de um escopo de bloco 
// hoisting

console.log('> existe x antes do bloco?', x)

{
    var x = 0 
}

console.log('> existe x depois do bloco?', x)
```

```js

// const e let sao locais e so funcionam no escopo onde foi criada 

console.log('> existe y antes do bloco?', y) // nao funciona

{
    ley y = 0 // nao funciona 
}


{
    ley y = 0 
    console.log('> existe y', y)
}
console.log('> existe y depois do bloco?', y) // nao funciona tbm 
```
## Nomeando Variaveis 

* JS é case-sensitive (sensível ao caso)
* JS aceita a cadeia de caracteres Unicode 

- Posso
   * Iniciar com esses caracteres especiais $ _
   * Iniciar com letras 
   * Colocar acentos 
   * Letras maísculas e minúsculas fazem diferença 

- Não Posso 
   * Iniciar com números 
   * Colocar espaços vazios no nome 

- Ideal 
   * Criar nomes que fazem sentido 
   * Que explique o que a variável é ou faz 
   * CamelCase 
   * snake_case 
   * Escrever em ingles 

   