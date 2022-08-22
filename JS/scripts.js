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

let primeiraCarta; 
let segundaCarta;
let count = 0;

insertCards();




 function turnCard (element){

    if( primeiraCarta !== undefined && segundaCarta !== undefined){
        return
    };
    count ++;
    const front = element.children[0];
    front.classList.add('escondido');   

    const back = element.children[1];
    back.classList.remove('escondido');  
    if(primeiraCarta === undefined){
        primeiraCarta = element;
    } else{
        segundaCarta = element;
        compararCarta();        
    };
 };

let wins = 0;
 function compararCarta(){

    if(primeiraCarta === segundaCarta){
        segundaCarta = undefined;
    }else if( primeiraCarta.children[1].innerHTML === segundaCarta.children[1].innerHTML){
        primeiraCarta.setAttribute("onclick","");
        segundaCarta.setAttribute("onclick","");
        primeiraCarta = undefined;
        segundaCarta = undefined;
        wins ++ 
        setTimeout(winer, 500);
    } else {      
      setTimeout(unTurnCard, 1000);
          }    
 };

 function unTurnCard(){
    
    primeiraCarta.children[0].classList.remove('escondido');   
    primeiraCarta.children[1].classList.add('escondido');
    
    segundaCarta.children[0].classList.remove('escondido');
    segundaCarta.children[1].classList.add('escondido');

    primeiraCarta = undefined;
    segundaCarta = undefined;
    
 }

 function winer(){
    if( wins === qtdeCards/2){
    alert(`Você ganhou em ${count} jogadas!`);
};
 }
