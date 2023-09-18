/*------------------------------------------------------------------

# Instrutor (Felipe/Felipão)



Instruções para entrega

<------------------------------------------------------------------>

 #  2° Desafio Calculadora de partidas Rankeadas



**O Que deve ser utilizado**



- Variáveis

- Operadores

- Laços de repetição

- Estruturas de decisões

- Funções

<------------------------------------------------------------------>

## Objetivo:



Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,

depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)



Se vitórias for menor do que 10 = Ferro

Se vitórias for entre 11 e 20 = Bronze

Se vitórias for entre 21 e 50 = Prata

Se vitórias for entre 51 e 80 = Ouro

Se vitórias for entre 81 e 90 = Diamante

Se vitórias for entre 91 e 100= Lendário

Se vitórias for maior ou igual a 101 = Imortal

<------------------------------------------------------------------>

## Saída



Ao final deve se exibir uma mensagem:

"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

------------------------------------------------------------------*/

/*---------------------------------------------------------------*/

/*------------[DECLARA-VARIAVEIS]----------------*/

let nome = prompt("Por Favor Digite seu nome")



let xp = prompt("Por Favor Digite sua XP")



let ganhos = prompt("Por Favor Digite seus Ganhos")



let perdas = prompt("Por Favor Digite suas Perdas")



var  result = calc()



let nivel = niveis()



let heroi = herois()

/*------------[DECLARA-VARIAVEIS]----------------*/

/*---------------------------------------------------------------*/

/*------------[DECLARA-FUNCOES]-----------------*/

/*---------------------------------------------------------------*/

/*------------------[FUNCAO-CALC]--------------------*/

function calc(){

return ganhos - perdas

}

/*------------------[FUNCAO-CALC]--------------------*/

/*---------------------------------------------------------------*/

/*------------------[FUNCAO-NIVEIS]------------------*/

function niveis(){



let iniciante = "[Iniciante]" 

let ferro = "[Ferro]" 

let bronze = "[Bronze]"

let prata = "[Prata]"

let ouro = "[Ouro]"

let diamante = "[Diamante]"

let lendario = "[Lendario]"

let imortal = "[Imortal]"

let deus = "[Deus]"

let deusSupremo = "[DeusSupremo]"



if((result > 0) && (result <= 5)){

return iniciante
}


else if((result > 0) && (result <= 10)){

return ferro

}



else if((result >10) && (result <= 20)){

return bronze

}



else if((result >20) && (result <= 50)){

return prata

}



else if((result >50) && (result <= 80)){

return ouro

}



else if((result >80) && (result <= 90)){

return diamante

}



else if((result >90) && (result <= 100)){

return lendario

}



else if((result >100) && (result <= 500)){

return imortal
}


else if((result >1000) && (result <= 5000)){

return deus
}


else if((result > 30000)){
return deusSupremo
}



}

/*------------------[FUNCAO-NIVEIS]------------------*/

/*---------------------------------------------------------------*/

/*---------------[FUNCAO-HEROIS]-------------------*/

function herois(){

if((result > 0) && (result <= 5)){

console.log(`O Herói de nome 

${nome} XP=(${xp}) possui o saldo de (${result}) Vitórias, e está no nível de ${nivel} Não desista, você ainda vai conseguir se tornar um surper Heroi`)

}


else if((result > 0) && (result <= 10)){

console.log(`O Herói de nome 

${nome} XP=(${xp}) possui o saldo de (${result}) Vitórias, e está no nível de ${nivel}`)


}



else if((result >10) && (result <= 20)){

console.log(`O Herói de nome 

${nome} XP=(${xp}) possui o saldo de (${result}) Vitórias, e está no nível de ${nivel}`)



}



else if((result >20) && (result <= 50)){

console.log(`O Herói de nome 

${nome} XP=(${xp}) possui o saldo de (${result}) Vitórias, e está no nível de ${nivel}`)



}



else if((result >50) && (result <= 80)){

console.log(`O Herói de nome 

${nome} XP=(${xp}) possui o saldo de (${result}) Vitórias, e está no nível de ${nivel}`)



}



else if((result >80) && (result <= 90)){

console.log(`O Herói de nome 

${nome} XP=(${xp}) possui o saldo de (${result}) Vitórias, e está no nível de ${nivel}`)



}



else if((result >90) && (result <= 100)){

console.log(`O Herói de nome 

${nome} XP=(${xp}) possui o saldo de (${result}) Vitórias, e está no nível de ${nivel}`)



}



else if((result >100) && (result <= 500)){

console.log(`O Herói de nome 

${nome} XP=(${xp}) possui o saldo de (${result}) Vitórias, e está no nível de ${nivel}`)


}


else if((result >1000) && (result <= 5000)){

console.log(`O Herói de nome 

${nome} XP=(${xp}) possui o saldo de (${result}) Vitórias, e está no nível de ${nivel} a dificildade diminui mas os inimigos se miltiplicam`)


}


else if(result > 30000){

console.log(`O Herói de nome 

${nome} XP=(${xp}) possui o saldo de (${result}) Vitórias, e está no nível de ${nivel} Cuidado os inimigos eatão de olho em você`)

}


}

/*---------------[FUNCAO-HEROIS]-------------------*/

/*---------------------------------------------------------------*/

/*------------[DECLARA-FUNCOES]-----------------*/

/*---------------------------------------------------------------*/
