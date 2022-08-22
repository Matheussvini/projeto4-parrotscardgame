const gifs =[    
    "./gifs/3parrots.gif",
    "./gifs/birthdayparrot.gif",
    "./gifs/brazilparrot.gif",
    "./gifs/detectiveparrot.gif",
    "./gifs/devilparrot.gif",
    "./gifs/dogeparrot.gif",
    "./gifs/drinkingparrot.gif",
    "./gifs/footballparrot.gif",
    "./gifs/headbangingparrot.gif",
    "./gifs/lsdparrot.gif",
    "./gifs/mustacheparrot.gif",
    "./gifs/negativeparrot.gif",
    "./gifs/pirateparrot.gif",
    "./gifs/policeparrot.gif",
    "./gifs/popcornparrot.gif",
    "./gifs/scientistparrot.gif",
    "./gifs/soccerparrot.gif",
    "./gifs/sunglassparrot.gif",
    "./gifs/tenisparrot.gif"
];

const card = [];

let qtdeCards = prompt('Com quantas cartas você deseja jogar? Somente números pares de 4 a 14');

while(qtdeCards < 4 || qtdeCards > 14 || qtdeCards % 2 !== 0 ){
    qtdeCards = prompt('Com quantas cartas você deseja jogar? Somente números pares de 4 a 14');
};

function shuffleCards(){
    gifs.sort(comparator);
    for ( let i = 0; i < qtdeCards/2; i++){        
        card.push(gifs[i]);
        card.push(gifs[i]);
    }

    card.sort(comparator);
};

function comparator() { 
	return Math.random() - 0.5; 
};

shuffleCards();
const ids = [];

function insertCards(){
    const game = document.querySelector('.game');
     game.innerHTML = "";

     for ( let i = 0; i < qtdeCards; i++){
        game.innerHTML += `
        <div onclick="turnCard(this)" class="card"" >
            <div class="front">
                <img src="./images/front.png" alt="Parrot image">                
            </div>
            <div class="back escondido"><img src="${card[i]}" alt=""></div>
        </div>
        `;
        ids.push(i);
     }
};

let firstCard; 
let secondCard;
let count = 0;

insertCards();

 function turnCard (element){

    if( firstCard !== undefined && secondCard !== undefined){
        return
    };
    count ++;
    const front = element.children[0];
    front.classList.add('escondido');   

    const back = element.children[1];
    back.classList.remove('escondido');
    if(firstCard === undefined){
        firstCard = element;
    } else{
        secondCard = element;
        compareCard();
    };
 };

let wins = 0;
 function compareCard(){

    if(firstCard === secondCard){
        secondCard = undefined;
    }else if( firstCard.children[1].innerHTML === secondCard.children[1].innerHTML){
        firstCard.setAttribute("onclick","");
        secondCard.setAttribute("onclick","");
        firstCard = undefined;
        secondCard = undefined;
        wins ++;
        setTimeout(winner, 500);
    } else {
      setTimeout(unTurnCard, 1000);
          };
 };

 function unTurnCard(){
    
    firstCard.children[0].classList.remove('escondido');
    firstCard.children[1].classList.add('escondido');
    
    secondCard.children[0].classList.remove('escondido');
    secondCard.children[1].classList.add('escondido');

    firstCard = undefined;
    secondCard = undefined;
 };

 function winner(){
    if( wins === qtdeCards/2){
        clearInterval(id);
        alert(`Você ganhou em ${count} jogadas e em ${time} segundos!`);

        let playAgain = prompt('Você gostaria de reiniciar a partida? Responda com "sim" ou "não"!');
        while ( playAgain !== 'sim' && playAgain !== 'não'){
            playAgain = prompt('Você gostaria de reiniciar a partida? Responda com "sim" ou "não"!');
        };
        if( playAgain === 'sim'){
            window.location.reload();
        }else if( playAgain === 'não'){
            alert('Obrigado pela preferência!');
        };
    };
 };

 let time = 0;

 function timer(){
    time++
    const clock = document.querySelector('.timer');
    clock.innerHTML = `${time} seconds`;
 };

 let id = setInterval(timer, 1000);