const football_players = ["Eden Hazard", "Kevin De Bruyne", "Romelu Lukaku", "Thibault Courtois", "Dries Mertens"];
let tempStr = "";

for(player in football_players){
    tempStr += `Player ${player}: ${football_players[player]} \n`;
}

console.log(tempStr);