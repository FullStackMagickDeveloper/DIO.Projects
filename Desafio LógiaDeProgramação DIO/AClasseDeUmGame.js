 /*
Instruções para entrega
# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada

*/
/*-------------------[CLASS-HERO]---------------------*/
class hero{
/*---------------------------------------------------------------*/
/*------------[CONSTRUCTOR-CLASS]-------------*/
constructor (nome, idade, typeHero){
this.nome = nome
this.idade = idade
this.typeHero = typeHero
}
/*------------[CONSTRUCTOR-CLASS]-------------*/
/*---------------------------------------------------------------*/
/*----------[FUNCTIONS-TYPE-POWER]----------*/

power(){

let powerAttacking = 
prompt("Ataque com seu Poder [1] Magia -> [Mago] [2] EspadaShin -> [Gerreiro] [3] KungFu -> [Monge] [4] Shuriken -> [Ninja]")

if(powerAttacking == 1){
return "[Magia]"
}

else if(powerAttacking == 2){
return "[EspadaShin]"
}

else if(powerAttacking == 3){
return "[KungFu]"
}

else if(powerAttacking == 4){
return "[Shuriken]"
}
}

/*----------[FUNCTIONS-TYPE-POWER]----------*/
/*---------------------------------------------------------------*/
/*--------[FUNCTIONS-TYPE-TECHNICS]-------*/

powerTechniques(){

let occultArt = 
prompt(" Escolha sua Técnica Secreta [1] MagiaNegraKaotica -> [Mago] [2] EspadEspadaFlamejanteaShin -> [Guerreiro] [3] PunhosInfernais -> [Monge] [4] TempestadeShuriken -> [Ninja]")


if(occultArt == 1){
return "[MagiaNegraKaotica]"
}

else if(occultArt == 2){
return "[EspadaFlamejante]"
}

else if(occultArt == 3){
return "[PunhosInfernais]"
}

else if(occultArt == 4){
return "[TempestadeShuriken]"
}

}

/*--------[FUNCTIONS-TYPE-TECHNICS]-------*/
/*---------------------------------------------------------------*/
/*----------[FUNCTIONS-TYPE-ATTACK]---------*/
atacar(){

let atacando = prompt("Quem solicita o ataque -> [1] Mago [2] Gierreiro [3] Monge [4] Ninja Digite o Numero correspondente ao Heroi que você é")

if(atacando == 1){
   console.log(`O Heroi ${magoHero.nome} do tipo ${this.typeHero}  atacou usando o ataque de ${magoHero.power()} ele usou como tecnica a ${magoHero.powerTechniques()}`)
}

else if(atacando == 2){
   console.log(`O Heroi ${warriorHero.nome} do tipo ${this.typeHero}  atacou usando o ataque de ${warriorHero.power()} ele usou como tecnica a ${warriorHero.powerTechniques()}`)
}

else if(atacando == 3){
   console.log(`O Heroi ${mongeHero.nome} do tipo ${this.typeHero}  atacou usando o ataque de ${mongeHero.power()} ele usou como tecnica a ${mongeHero.powerTechniques()}`)
}

else if((atacando == 4) && ( atacando == 2)){
   console.log(`O Heroi ${ninjaHero.nome} do tipo ${this.typeHero}  atacou usando o ataque de ${ninjaHero.power()} ele usou como tecnica a ${ninjaHero.powerTechniques()}`)
}

}

/*----------[FUNCTIONS-TYPE-ATTACK]---------*/
/*---------------------------------------------------------------*/
}
/*-------------------[CLASS-HERO]---------------------*/
/*---------------------------------------------------------------*/
/*------------[OBJECTS-CLASS-HERO]------------*/

let magoHero = new hero("Wagner", 40, "[Mago]")

let warriorHero = new hero("Roberts", 30, "[Guerreiro]")

let mongeHero = new hero("YangAong", 23, "[Monge]")

let ninjaHero = new hero("ShingYu", 35, "[Ninja]")
/*------------[OBJETOS-CLASS-HEROI]-----------*/
/*---------------------------------------------------------------*/
/*--------------[CHAMADA-OBJETOS]--------------*/

console.log(magoHero)

console.log(warriorHero)

console.log(mongeHero)

console.log(ninjaHero)


magoHero.atacar()

/*warriorHero.atacar()

mongeHero.atacar()

ninjaHero.atacar()
*/


/*--------------[CHAMADA-OBJETOS]--------------*/
/*---------------------------------------------------------------*/