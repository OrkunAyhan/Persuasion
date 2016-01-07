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
    document.getElementById("scr-home").style.visibility = "hidden";
    document.getElementById("changeNameDiv").style.visibility = "visible";
    writeNames();
}

function hide2(){
    console.log("Volgende2");
    document.getElementById("changeNameDiv").style.visibility = "hidden";
    document.getElementById("speldiv").style.visibility = "visible";
    if(playerNumber.length == 2){
        // REMOVE PLAYER 3 & 4 FROM GAME
        players.splice(2,2);
        document.getElementById("p3div").remove();
        document.getElementById("p4div").remove();
        document.getElementById("p3position").remove();
        document.getElementById("p4position").remove();
        console.log("De lengte hiervan is " + playerNumber.length);
    }else if(playerNumber.length == 3){
        players.splice(3,1);
        document.getElementById("p4div").remove();
        document.getElementById("p4position").remove();
        console.log("De lengte hiervan is " + playerNumber.length);
    }else if(playerNumber.length == 4){
        console.log("De lengte hiervan is " + playerNumber.length);
    };
    console.log(players);
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
    {
        name: "Player 1",
        positie: 0
    },
    {
        name: "Player 2",
        positie: 0
    },
    {
        name: "Player 3",
        positie: 0
    },
    {
        name: "Player 4",
        positie: 0
    }
];

var position = 0;
var currentPlayer = null;

function rolClick(){

    if (position >= players.length){
        position = 0;
        //currentPlayer = players[position];
    }
    currentPlayer = players[position++];

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
    document.getElementById("p1position").innerHTML = players[0].positie;
    document.getElementById("p2position").innerHTML = players[1].positie;
    document.getElementById("p3position").innerHTML = players[2].positie;
    document.getElementById("p4position").innerHTML = players[3].positie;

    console.log(currentPlayer);
};


