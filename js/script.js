//========================================  PLAYER FUNCTIONS EN VARS  =============================================

function reloadAnimation(){
    TweenMax.to("#terugbut", 0.3, {
        ease:Back.easeIn,
        scale:0.9,
        onComplete: reloadPage,
    })
};
function reloadPage(){
    window.location.reload();
};

var playerNumber = ["P1", "P2", "P3", "P4"];

function changePlayers(){
    document.getElementById("innerText").innerHTML = playerNumber.length + " Players selected";
}

function twoPlayer(){
    if(playerNumber.length <= 0){
        playerNumber.push("Player 1", "Player 2");
        console.log(playerNumber);
        animation2player();
    }else{
        playerNumber.splice(0,4);
        playerNumber.push("Player 1", "Player 2");
        console.log(playerNumber);
        animation2player();
    }
}

function threePlayer(){
    if(playerNumber.length <= 0){
        playerNumber.push("Player 1", "Player 2", "Player 3");
        console.log(playerNumber);
        animation3player();
    }else{
        playerNumber.splice(0,4);
        playerNumber.push("Player 1", "Player 2", "Player 3");
        console.log(playerNumber);
        animation3player();
    }
}

function fourPlayer(){
    if(playerNumber.length <= 0){
        playerNumber.push("Player 1", "player 2", "player 3", "Player 4");
        console.log(playerNumber);
        animation4player();
    }else{
        playerNumber.splice(0,4);
        playerNumber.push("Player 1", "Player 2", "player 3", "Player 4");
        console.log(playerNumber);
        animation4player();
    }
}

function introPNum(){
    document.getElementById("src-intro-pnum").innerHTML = playerNumber.length + " spelers gekozen";
};

//====================================== CODE VOOR HET GAAN NAAR DE VOLGENDE SCHERMEN =================================

function animation2player(){
    TweenMax.to("#add1", 0.4, {
        ease:Back.easeIn,
        scale:0.8,
        onComplete: hide1,
    })
};
function animation3player(){
    TweenMax.to("#add2", 0.4, {
        ease:Back.easeIn,
        scale:0.8,
        onComplete: hide1,
    })
};
function animation4player(){
    TweenMax.to("#add3", 0.4, {
        ease:Back.easeIn,
        scale:0.8,
        onComplete: hide1,
    })
};


function hide1(){
    writeNames();
    introPNum();
    console.log("Volgende1");
    document.getElementById("scr-home").style.visibility = "hidden";
    document.getElementById("scr-intro").style.visibility = "visible";

}

function hide2(){
    console.log("Volgende2");
    document.getElementById("scr-intro").style.visibility = "hidden";
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

//======================================= SPELERS GEDEELTE ===================================

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

//============================== KIJKT WAAR JE STAAT OP HET BORD, CODE VOOR DE OPDRACHTEN =============================

function locForTest(){
    if(currentPlayer.positie === 5){
        console.log(currentPlayer.name, " staat op vakje 5")
    }else if(currentPlayer.positie === 9){
        console.log(currentPlayer.name, " staat op vakje 9")
    }else if(currentPlayer.positie === 14){
        console.log(currentPlayer.name, " staat op vakje 14")
    }else if(currentPlayer.positie === 18){
        console.log(currentPlayer.name, " staat op vakje 18")
    }else if(currentPlayer.positie === 23){
        console.log(currentPlayer.name, " staat op vakje 23")
    }else if(currentPlayer.positie === 27){
        console.log(currentPlayer.name, " staat op vakje 27")
    }else if(currentPlayer.positie === 32){
        console.log(currentPlayer.name, " staat op vakje 32")
    }else if(currentPlayer.positie === 36){
        console.log(currentPlayer.name, " staat op vakje 36")
    }else if(currentPlayer.positie === 41){
        console.log(currentPlayer.name, " staat op vakje 41")
    }else if(currentPlayer.positie === 45){
        console.log(currentPlayer.name, " staat op vakje 45")
    }else if(currentPlayer.positie === 50){
        console.log(currentPlayer.name, " staat op vakje 50")
    }else if(currentPlayer.positie === 54){
        console.log(currentPlayer.name, " staat op vakje 54")
    }else if(currentPlayer.positie === 58){
        console.log(currentPlayer.name, " staat op vakje 58")
    }
};



//==================================== ROLLEN MET DOBBELSTENEN EN POSITIE AANPASSEN =================================

var position = 0;
var currentPlayer = players[position];
//var value = document.getElementById("font-player1")

function writePlayerPos(){
    if(players.length === 1) {
        document.getElementById("p1position").innerHTML = players[0].positie;
    }else if(players.length === 2){
        document.getElementById("p1position").innerHTML = players[0].positie;
        //value;
        document.getElementById("p2position").innerHTML = players[1].positie;
    }else if(players.length === 3){
        document.getElementById("p1position").innerHTML = players[0].positie;
        document.getElementById("p2position").innerHTML = players[1].positie;
        document.getElementById("p3position").innerHTML = players[2].positie;
    }else if(players.length === 4){
        document.getElementById("p1position").innerHTML = players[0].positie;
        document.getElementById("p2position").innerHTML = players[1].positie;
        document.getElementById("p3position").innerHTML = players[2].positie;
        document.getElementById("p4position").innerHTML = players[3].positie;
    }else{console.log("ik snap het ook niet")}
};

function rolClick(){

    if (position >= players.length){
        position = 0;
        //currentPlayer = players[position];
    }
    currentPlayer = players[position++];

    var rollen = Math.floor(Math.random() * 6) + 1;
    if (rollen === 1){
        currentPlayer.positie += 1;
    }else if(rollen === 2){
        currentPlayer.positie += 2;
    }else if(rollen === 3){
        currentPlayer.positie += 3;
    }else if(rollen === 4){
        currentPlayer.positie += 4;
    }else if(rollen === 5){
        currentPlayer.positie += 5;
    }else if(rollen === 6){
        currentPlayer.positie += 6;
    }else {};
    writePlayerPos();
    locForTest();
    if(currentPlayer.positie === 6){
        players[position--];
    }else if(currentPlayer.positie === 26){
        players[position--];
    }else if(currentPlayer.positie === 53){
        players[position--];
    }else if(currentPlayer.positie === 42){
        console.log("je stond op 42");
        setTimeout(function(){currentPlayer.positie = 39;}, 3000);
        writePlayerPos();
    }
    console.log(currentPlayer);
};

// ===================================== DUBBEL GEKOPIEËRD ==================================================

//console.log(playerNumber.length);
//
//function hide1(){
//    console.log("Volgende1");
//    document.getElementById("scr-home").style.visibility = "hidden";
//    document.getElementById("scr-intro").style.visibility = "visible";
//    writeNames();
//}
//
//function hide2(){
//    console.log("Volgende2");
//    document.getElementById("scr-intro").style.visibility = "hidden";
//    document.getElementById("speldiv").style.visibility = "visible";
//    if(playerNumber.length == 2){
//        // REMOVE PLAYER 3 & 4 FROM GAME
//        players.splice(2,2);
//        document.getElementById("p3div").remove();
//        document.getElementById("p4div").remove();
//        document.getElementById("p3position").remove();
//        document.getElementById("p4position").remove();
//        console.log("De lengte hiervan is " + playerNumber.length);
//    }else if(playerNumber.length == 3){
//        players.splice(3,1);
//        document.getElementById("p4div").remove();
//        document.getElementById("p4position").remove();
//        console.log("De lengte hiervan is " + playerNumber.length);
//    }else if(playerNumber.length == 4){
//        console.log("De lengte hiervan is " + playerNumber.length);
//    };
//    console.log(players);
//}

//=================================== SPELERS GEDEELTE EN NAAM AANPASSEN ==============================

//function writeNames(){
//    if (playerNumber.length == 1){
//        console.log("Het is 1")
//        document.getElementById("changeYellow").remove();
//        document.getElementById("changeRed").remove();
//        document.getElementById("changeBlue").remove();
//    }else if(playerNumber.length == 2){
//        console.log("Het is 2")
//        document.getElementById("changeYellow").remove();
//        document.getElementById("changeBlue").remove();
//    }else if(playerNumber.length == 3){
//        console.log("Het is 3")
//        document.getElementById("changeYellow").remove();
//    }else{
//        console.log("Het is 4")
//    }
//};

//========================================== ROLLEN EN PLEK BEPALEN =================================


//var players = [
//    {
//        name: "Player 1",
//        positie: 0
//    },
//    {
//        name: "Player 2",
//        positie: 0
//    },
//    {
//        name: "Player 3",
//        positie: 0
//    },
//    {
//        name: "Player 4",
//        positie: 0
//    }
//];
//
//var position = 0;
//var currentPlayer = null;
//
//function rolClick(){
//
//    if (position >= players.length){
//        position = 0;
//        //currentPlayer = players[position];
//    }
//    currentPlayer = players[position++];
//
//    var rollen = Math.floor(Math.random() * 6) + 1;
//    if (rollen === 1){
//        currentPlayer.positie += 1;
//        console.log("het is 1")
//    }else if(rollen === 2){
//        currentPlayer.positie += 2;
//        console.log("het is 2")
//    }else if(rollen === 3){
//        currentPlayer.positie += 3;
//        console.log("het is 3")
//    }else if(rollen === 4){
//        currentPlayer.positie += 4;
//        console.log("het is 4")
//    }else if(rollen === 5){
//        currentPlayer.positie += 5;
//        console.log("het is 5")
//    }else if(rollen === 6){
//        currentPlayer.positie += 6;
//        console.log("het is 6")
//    }else {
//        console.log("Oops, er is iets fout gegaan.")
//    };
//    document.getElementById("p1position").innerHTML = players[0].positie;
//    document.getElementById("p2position").innerHTML = players[1].positie;
//    document.getElementById("p3position").innerHTML = players[2].positie;
//    document.getElementById("p4position").innerHTML = players[3].positie;
//
//    console.log(currentPlayer);
//};


// ==========================================
// ===============DRAG 'N DROP===============
// ===============w/ COMMENTS================
// ==========================================

// Dropzone = Waar de elementen in geslepen gaan worden
// "interact" is om aan te geven dat het genoemde element 
// interactie mogelijkheden krijgt.
interact('.dropzone')
// Enable draggables to be dropped into this
  .dropzone(true)
// only accept elements matching this CSS selector
  .accept('#yes-drop')
// listen for drop related events
// 'dragenter' zorgt ervoor dat er een interactie plaats vind 
// wanneer er wat over de dropzone komt 
  .on('dragenter', function(event) {
// event.relatedTarget is het element dat wordt gesleept.
    var draggableElement = event.relatedTarget,
// event.target is het element van de dropzone, dit wordt uit 
// de code gelezen
      dropzoneElement = event.target;

// Visuele en textuele feedback wanneer elementen 
// gesleept worden.
    dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');
// draggableElement.textContent = 'Dragged in';
  })
// 'dragleave' wordt activeerd wanneer de gerelateerde 
// elementen de dropzone verlaten
  .on('dragleave', function(event) {
// Dit haalt de visuele en textuele feedback van 
// hierboven weg
    event.target.classList.remove('drop-target');
    event.relatedTarget.classList.remove('can-drop');
// event.relatedTarget.textContent = 'Dragged out';
  })
// Dit is de textuele feedback voor wanneer het in de 
// dropzone losgelaten wordt
  // .on('drop', function(event) {
  //   event.relatedTarget.textContent = 'Dropped';
  // });

// Hiermee kunnen we elementen "drap 'n drop" baar maken
// Door de class="drag-drop" toe te voegen kan je dit doen.
interact('.drag-drop')
  .draggable({
// Dit zorgt er allemaal voor dat je het kan rondbewegen 
// en dat het blijft staan op de plek waar je het loslaat
    onmove: function(event) {
      var target = event.target;

      target.x = (target.x | 0) + event.dx;
      target.y = (target.y | 0) + event.dy;

      target.style.webkitTransform = target.style.transform =
        'translate(' + target.x + 'px, ' + target.y + 'px)';
    }
  })

// Dit laat het drap 'n drop gebeure vloeiend lopen
  .inertia(true)
  .restrict({
    drag: 'parent'
  });


// ==========================================
// ===============DRAG 'N DROP===============
// ===============w/o COMMENTS===============
// ==========================================

// interact('.dropzone').dropzone(true).accept('#yes-drop')
//     .on('dragenter', function(event) {
//         var draggableElement = event.relatedTarget,
//         dropzoneElement = event.target;
//         dropzoneElement.classList.add('drop-target');
//         draggableElement.classList.add('can-drop');
//         draggableElement.textContent = 'Dragged in';
//     })
//     .on('dragleave', function(event) {
//         event.target.classList.remove('drop-target');
//         event.relatedTarget.classList.remove('can-drop');
//         event.relatedTarget.textContent = 'Dragged out';
//     })
//     .on('drop', function(event) {
//         event.relatedTarget.textContent = 'Dropped';
//     });

// interact('.drag-drop').draggable({
//     onmove: function(event) {
//         var target = event.target;

//         target.x = (target.x | 0) + event.dx;
//         target.y = (target.y | 0) + event.dy;

//         target.style.webkitTransform = target.style.transform =
//             'translate(' + target.x + 'px, ' + target.y + 'px)';
//     }
//   })

// .inertia(true).restrict({
//     drag: 'parent'
// });