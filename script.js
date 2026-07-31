
const gameCollection = document.getElementById("gamecollection");

const originalCards = [...gameCollection.children];

function sortGames(category){

    if(category === "all"){

        gameCollection.innerHTML = "";

        originalCards.forEach(card=>{
            gameCollection.appendChild(card);
        });

        return;
    }

    const cards = [...gameCollection.children];

    cards.sort((a,b)=>{

        if(a.dataset.category === category && b.dataset.category !== category){
            return -1;
        }

        if(a.dataset.category !== category && b.dataset.category === category){
            return 1;
        }

        return 0;

    });

    gameCollection.innerHTML="";

    cards.forEach(card=>{
        gameCollection.appendChild(card);
    });

}

function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}