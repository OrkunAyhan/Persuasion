//========================================  PLAYER FUNCTIONS EN VARS  =============================================
var playerNumber = ["P1", "P2", "P3", "P4"];

function changePlayers(){
    document.getElementById("innerText").innerHTML = playerNumber.length + " Players selected";
}

function twoPlayer(){
    if(playerNumber.length <= 0){
        playerNumber.push("Player 1", "Player 2");
        console.log(playerNumber);
        changePlayers();
    }else{
        playerNumber.splice(0,4);
        playerNumber.push("Player 1", "Player 2");
        console.log(playerNumber);
        changePlayers();
    }
}

function threePlayer(){
    if(playerNumber.length <= 0){
        playerNumber.push("Player 1", "Player 2", "Player 3");
        console.log(playerNumber);
        changePlayers();
    }else{
        playerNumber.splice(0,4);
        playerNumber.push("Player 1", "Player 2", "Player 3");
        console.log(playerNumber);
        changePlayers();
    }
}

function fourPlayer(){
    if(playerNumber.length <= 0){
        playerNumber.push("Player 1", "player 2", "player 3", "Player 4");
        console.log(playerNumber);
        changePlayers();
    }else{
        playerNumber.splice(0,4);
        playerNumber.push("Player 1", "Player 2", "player 3", "Player 4");
        console.log(playerNumber);
        changePlayers();
    }
}
console.log(playerNumber.length);

function hide1(){
    console.log("Volgende1");
    document.getElementById("selectdiv").style.visibility = "hidden";
    document.getElementById("changeNameDiv").style.visibility = "visible";
    writeNames();
}

function hide2(){
    console.log("Volgende2");
    document.getElementById("changeNameDiv").style.visibility = "hidden";
    document.getElementById("speldiv").style.visibility = "visible";
}

//=================================== SPELERS GEDEELTE EN NAAM AANPASSEN ==============================

function writeNames(){
    if (playerNumber.length == 1){
        console.log("Het is 1")
        document.getElementById("changeYellow").remove();
        document.getElementById("changeRed").remove();
        document.getElementById("changeBlue").remove();
    }else if(playerNumber.length == 2){
        console.log("Het is 2")
        document.getElementById("changeYellow").remove();
        document.getElementById("changeBlue").remove();
    }else if(playerNumber.length == 3){
        console.log("Het is 3")
        document.getElementById("changeYellow").remove();
    }else{
        console.log("Het is 4")
    }
};

//========================================== ROLLEN EN PLEK BEPALEN =================================


var players = [
    {name: "Player 1", positie: 0},
    {name: "Player 2", positie: 0},
    {name: "Player 3", positie: 0},
    {name: "Player 4", positie: 0}
];
var position = 0;
var currentPlayer = players[position];

function rolClick(){
    currentPlayer = players[position++];
    if (position > players.length){
        position = 0;
        currentPlayer = players[position];
    }
    var rollen = Math.floor(Math.random() * 6) + 1;
    if (rollen === 1){
        currentPlayer.positie += 1;
        console.log("het is 1")
    }else if(rollen === 2){
        currentPlayer.positie += 2;
        console.log("het is 2")
    }else if(rollen === 3){
        currentPlayer.positie += 3;
        console.log("het is 3")
    }else if(rollen === 4){
        currentPlayer.positie += 4;
        console.log("het is 4")
    }else if(rollen === 5){
        currentPlayer.positie += 5;
        console.log("het is 5")
    }else if(rollen === 6){
        currentPlayer.positie += 6;
        console.log("het is 6")
    }else {
        console.log("Oops, er is iets fout gegaan.")
    };
    console.log(players.length);

    console.log(currentPlayer);
};

