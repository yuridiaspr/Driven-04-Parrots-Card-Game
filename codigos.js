let numerocartas = "";
let ArrayDeCartas =[]; // Tinha declarado como string e não como array
let NumeroCartasPermitidoCima
let NumeroCartasCima
let NumeroCartasRestantes
let NumeroJogadas;
let RESPOSTA_DE_JOGO = 'sim'
let TodasCartas

function NumCartas(){
    numerocartas = prompt("Com quantas cartas quer jogar? (Opções pares 4 a 14)");
    ArrayDeCartas = [];
    if (numerocartas == '4' || numerocartas == '6' || numerocartas == '8' || numerocartas == '10' || numerocartas == '12' || numerocartas == '14'){
        const LarguraCartas = document.querySelector(".bottom .conjunto-cartas");
        let classeLargura = 'Largura' + numerocartas;
        LarguraCartas.classList.add(classeLargura);

        for (let i = 0; i < Number(numerocartas); i++){
            LarguraCartas.children[i].classList.remove('escondido');
            ArrayDeCartas.push(LarguraCartas.children[i]);
        }

    } else {
        alert("Você não digitou um número válido. As opções são 4, 6, 8, 10, 12 ou 14");
        NumCartas();
    }
}


// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}

function DistribuiCartas (Array){
    for (let i = 0; i < Number(numerocartas); i++){
        if (i < 2){
            Array[i].innerHTML =  '<div class="desactive"><img class="front" src="./Imagens/front.png"/></div>' + '<div class="desactive"><img class="back" src="./Imagens/fiestaparrot.gif"/></div>'
        } else if (i < 4){
            Array[i].innerHTML =  '<div class="desactive"><img class="front" src="./Imagens/front.png"/></div>' + '<div class="desactive"><img class="back" src="./Imagens/metalparrot.gif"/></div>'
        } else if (i < 6){
            Array[i].innerHTML =  '<div class="desactive"><img class="front" src="./Imagens/front.png"/></div>' + '<div class="desactive"><img class="back" src="./Imagens/bobrossparrot.gif"/></div>'
        } else if (i < 8){
            Array[i].innerHTML =  '<div class="desactive"><img class="front" src="./Imagens/front.png"/></div>' + '<div class="desactive"><img class="back" src="./Imagens/explodyparrot.gif"/></div>'
        } else if (i < 10){
            Array[i].innerHTML =  '<div class="desactive"><img class="front" src="./Imagens/front.png"/></div>' + '<div class="desactive"><img class="back" src="./Imagens/revertitparrot.gif"/></div>'
        } else if (i < 12){
            Array[i].innerHTML =  '<div class="desactive"><img class="front" src="./Imagens/front.png"/></div>' + '<div class="desactive"><img class="back" src="./Imagens/tripletsparrot.gif"/></div>'
        } else if (i < 14){
            Array[i].innerHTML =  '<div class="desactive"><img class="front" src="./Imagens/front.png"/></div>' + '<div class="desactive"><img class="back" src="./Imagens/unicornparrot.gif"/></div>'
        }
    }
}

//function IniciaJogo(){
//}

function ativar(Carta){
    if (!(Carta.children[0].classList.contains("achado"))){
        Carta.children[0].classList.toggle("active");
        Carta.children[0].classList.toggle("desactive");
        Carta.children[1].classList.toggle("active");
        Carta.children[1].classList.toggle("desactive");

        NumeroJogadas++;
    }

    function voltarCartas(){
        TodasCartas[comparação[1]].children[0].classList.toggle("active");
        TodasCartas[comparação[1]].children[0].classList.toggle("desactive");
        TodasCartas[comparação[1]].children[1].classList.toggle("active");
        TodasCartas[comparação[1]].children[1].classList.toggle("desactive");

        TodasCartas[comparação[0]].children[0].classList.toggle("active");
        TodasCartas[comparação[0]].children[0].classList.toggle("desactive");
        TodasCartas[comparação[0]].children[1].classList.toggle("active");
        TodasCartas[comparação[0]].children[1].classList.toggle("desactive");
    }


    function acabarjogo(){
        alert(`Você Ganhou o jogo em ${NumeroJogadas} jogadas`)
    }


    function PERGUNTAR_NOVAMENTE(){
        RESPOSTA_DE_JOGO = prompt("Deseja jogar novamente? (sim/não)")
        if (RESPOSTA_DE_JOGO != 'sim' && RESPOSTA_DE_JOGO != 'não'){
            alert ('As únicas opções possíveis são "sim" e "não"');
            setTimeout(PERGUNTAR_NOVAMENTE, 200);
        }
        if (RESPOSTA_DE_JOGO == "sim"){
            for (let i = 0; i < Number(numerocartas); i++){
                if (TodasCartas[i].children[0].classList.contains("achado")){
                    TodasCartas[i].children[0].classList.remove("achado");
                }
            }
            JogarNovamente()
        }
        else {
            alert('Obrigado por jogar! Volte Sempre!');
            window.close();
        }
    }

    NumeroCartasCima = 0;
    let comparação = [];

    for (let i = 0; i < Number(numerocartas); i++){
        if (TodasCartas[i].children[0].classList.contains("active") && !(TodasCartas[i].children[0].classList.contains("achado"))){
            NumeroCartasCima++;
            comparação.push(i);
        }
    }
    if (NumeroCartasCima == 2){
        if (TodasCartas[comparação[0]].children[1].innerHTML === TodasCartas[comparação[1]].children[1].innerHTML){
            TodasCartas[comparação[0]].children[0].classList.add('achado');
            TodasCartas[comparação[1]].children[0].classList.add('achado');
            NumeroCartasRestantes = NumeroCartasRestantes - 2;

        }
        else {
            setTimeout(voltarCartas, 1000);
        }
    }
    if (NumeroCartasRestantes == 0){
        setTimeout(acabarjogo, 100);
        setTimeout(MostrarTodasAsCartas, 200);
        setTimeout(PERGUNTAR_NOVAMENTE, 1000);
    }
}

function MostrarTodasAsCartas(){
    for (let i = 0; i < Number(numerocartas); i++){
        TodasCartas[i].children[0].classList.toggle("active");
        TodasCartas[i].children[0].classList.toggle("desactive");
        TodasCartas[i].children[1].classList.toggle("active");
        TodasCartas[i].children[1].classList.toggle("desactive");
    }
}


function JogarNovamente(){  

// Define o número de Cartas
NumCartas()
NumeroCartasRestantes = Number(numerocartas);




// Embaralha as Cartas
ArrayDeCartas.sort(comparador); // Após esta linha, a ArrayDeCartas estará embaralhada

// Cartas aleatórias são distribuidas
DistribuiCartas(ArrayDeCartas)

TodasCartas = document.querySelectorAll(".carta")
NumeroJogadas = 0;

setTimeout(MostrarTodasAsCartas, 200);

setTimeout(MostrarTodasAsCartas, 1200);
}

setTimeout(JogarNovamente, 1000);