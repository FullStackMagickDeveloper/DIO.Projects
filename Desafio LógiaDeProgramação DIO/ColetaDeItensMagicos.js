//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:

//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;

//- "print": imprime um texto de saída (output), pulando linha.



// Definição da classe ItemMagico

class itemMagico{

//TODO: Crie adequadamente um construtor que receba todos os atributos referente ao item mágico:

  constructor(tipoItem, danoItem, itemResist){
this.tipoItem = tipoItem
this.danoItem = danoItem
this.itemResist = itemResist
  }


  calcularDanoItem(){
if(this.tipoItem === 'arma'){
return this.danoItem *= 2 
console.log(`[${this.danoItem}]`);
}
else if(this.tipoItem != 'arma'){
return this.danoItem = this.danoItem
console.log(`[${this.danoItem}]`);
}

}


danoTotal(){
return itemPersonalizado.calcularDanoItem() * 3
console.log(`[${danoTotal()}]`);
}

// Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
itensMagicos(){
this.tipoItem = prompt("Digite o nome do tipo de item que você achou");

this.danoItem = prompt("Digite um numero referente ao dano causado pelo item");

this.itemResist = prompt("Digite um numero referente a (resistencia/durabilidade) do item");

console.log(`Você coletou o Item [${this.tipoItem}] que possui dano de [${this.danoItem}] e resistencia de  [${this.itemResist}] o dano total em combate é de [${itemPersonalizado.calcularDanoItem()}]`)
}

}

//TODO: Crie o de um objeto ItemMagico personalizado com base no tipo escolhido
let itemPersonalizado = new itemMagico( )

// TODO: Imprima os atributos do item personalizado

console.log(` [${itemPersonalizado.itensMagicos()}]`)

console.log(`Tipo Item: [${itemPersonalizado.tipoItem}]`);

console.log(`Dano Item: [${itemPersonalizado.danoItem}]`);

console.log(`Resistencia: [${itemPersonalizado.itemResist}]`);

// Calcula e imprime o dano causado pelo item personalizado em um combate simulado
console.log(`Dano Combate: [${itemPersonalizado.calcularDanoItem()}]`);

//print("Dano em combate: " + danoTotal);
console.log(`Dano Total: [${itemPersonalizado.danoTotal()}]`);


