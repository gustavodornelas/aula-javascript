function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
}

function redirecionar(){
    //window.open("https:\\www.google.com");
    window.location.href = "https:\\www.google.com";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!";
}

function load(){
    alert ("Pagina Carregada.");
}

function troca(elemento){
    console.log(elemento.value);
}

/* Funções

function validaIdade (idade){
    if(idade>=18){
        return true;
    }
    return false;
}

var idade = prompt("Qual a sua idade");
console.log(validaIdade(idade));

function soma(n1, n2){
    return n1+n2;
}
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(soma(5,10) + " " + setReplace("Vai Japão", "Japão", "Brasil"));*/

/*Data

var d = new Date;
console.log(d.getUTCDate());
console.log(d.getUTCMonth()+1);
console.log(d.getFullYear());*/

/* Repetição (for)

for (var count=0;count<=5;count++){
    console.log(count);
}*/

/* Repetição (While)
var count = 0;

while(count<=5){
    console.log(count++);
}*/

/* Condição (if)

var idade=prompt("Qual a sua idade");
if(idade>=18){
    alert("Maior de idade!");
}else{
    alert("Menor de idade!");
}
*/


/* Dicionario

var fruta = [{nome: "Maça", cor: "Vermelha"}, {nome:"Uva", cor: "Roxa"}]
console.log(fruta[0].nome);
console.log(fruta[0].cor);
console.log(fruta[1].nome);
console.log(fruta[1].cor);


var fruta = {nome: "Maça", cor: "Vermelha"}
console.log(fruta.nome);
console.log(fruta.cor);
*/

/* Listas 

var lista = ["maça", "pera", "laranja"];
console.log(lista);
lista.push("uva");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.join(" - "));
console.log(lista.toString());
*/


/* Variaveis

var nome = "Gustavo Dornelas";
var idade = 29;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos");
alert (idade+idade2);
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão", "Brasil"));
*/