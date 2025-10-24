let pokemons = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];
let yPos;

function setup(){
    createCanvas(200, 300);
    fill("pink");
    textAlign(CENTER,CENTER)
    textSize(20)
    yPos = 100;
}
function draw(){
    for (let y = 0;y < 10; y++){
        yPos = yPos + y * 19
        text(pokemons[y],150,yPos)
        
    }
}
