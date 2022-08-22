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

function insertCards(){
    const game = document.querySelector('.game');
     game.innerHTML = "";

     for ( let i = 0; i < qtdeCards; i++){
        game.innerHTML += `
        <div class="card">
            <div class="front">
                <img src="./images/front.png" alt="Parrot image">                
            </div>
            <div class="back"><img src="${card[i]}" alt=""></div>
        </div>
        `;
     }
};

insertCards();

