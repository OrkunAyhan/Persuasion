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

// ==========================================
// =================ANIMATIES================
// ==========================================
var pijlen = document.querySelectorAll("#spelpijl1, #spelpijl2, #spelpijl3, #spelpijl4");
var tlPijlen = new TimelineMax

function spelerPijl() {
    tlPijlen.to(pijlen, 1, {
        repeat: -1, 
        yoyo: true, 
        ease: Power1.easeInOut, 
        x: 10
    })
};

// var beker = document.querySelectorAll("#d-beker");
// var tlBeker = new TimelineMax

// function bekerShake() {
//     tlBeker.to(beker, 0.5, {
//         transformOrigin: "50% 40%",
//         yoyo: true,
//         rotation: 8,
//         repeat: -1,
//         ease: Power1.easeInOut
//     })
// };

// var diceButton = document.querySelectorAll("#click");
// var tlDice = new TimelineMax

// function bekerDice() {
//     tlDice.to(diceButton, 0.5, {
//         opacity: 0
//     }, 3),
//     tlDice.to(beker, 1, {
//         rotation: 180
//     }, 3.5),
//     tlDice.to(beker, 1.5, {
//         y: -500
//     }, 4.7),
//     tlDice.to(beker, 1.5, {
//         y: 0
//     }, 11.2),
//     tlDice.to(beker, 1, {
//         rotation: 0
//     }, 12.7),
//     tlDice.to(diceButton, 0.5, {
//         opacity: 1
//     })
// };

// function restartAnim() {
//     tlDice.play();
// };

spelerPijl();
// bekerShake();
// bekerDice();

// ==========================================
// ===============DRAG 'N DROP===============
// ==========================================

// =================SUPPORT==================
// http://jsfiddle.net/hf27hn0c/6/
// http://interactjs.io/
// http://jsfiddle.net/hf27hn0c/6/
function taskOne() {
var finished = document.querySelectorAll("#scr-task-1");

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
        dropzoneElement.classList.add('resultaat');
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
//BAD  .on('drop', function(event) {
    //     event.relatedTarget.classList.add('dropped');
    // });
    
    .on('drop', function stopOpdracht(finished) {
        setTimeout(function() {
            document.getElementById('scr-task-1').classList.remove('beginTask');  
            // document.getElementById('scr-task-1').classList.add('eindigTask');
        }, 5000);
    });

//BAD  .on('drop', setTimeout(function stopOpdracht(finished) {
    //     document.getElementById('scr-task-1').classList.remove('beginTask');
    //     // document.getElementById('scr-task-1').classList.add('eindigTask');
    // }, 5000));

// Hiermee kunnen we elementen "drap 'n drop" baar maken
// Door de class="drag-drop" toe te voegen kan je dit doen.
interact('.drag-drop')
    .draggable({
        // Dit zorgt er allemaal voor dat je het kan rondbewegen 
        // en dat het blijft staan op de plek waar je het loslaat
        onmove: function (event) {
            var target = event.target,
            x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
            y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
    
            target.style.webkitTransform =
            target.style.transform =
                'translate(' + x + 'px, ' + y + 'px)';
    
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
        },
    })

// Dit laat het drap 'n drop gebeure vloeiend lopen
    .inertia(true)
    .restrict({
        drag: 'parent'
    });
};
// ==========================================
// =============END DRAG 'N DROP=============
// ==========================================

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
        document.getElementById("spelpijl3").remove();
        document.getElementById("spelpijl4").remove();
        players.splice(2,2);
        document.getElementById("p3div").remove();
        document.getElementById("p4div").remove();
    }else if(playerNumber.length == 3){
        document.getElementById("spelpijl4").remove();
        players.splice(3,1);
        document.getElementById("p4div").remove();
    }else if(playerNumber.length == 4){
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
        name: "Speler 1",
        positie: 0,
        overslaan:0
    },
    {
        name: "Speler 2",
        positie: 0,
        overslaan:0
    },
    {
        name: "Speler 3",
        positie: 0,
        overslaan:0
    },
    {
        name: "Speler 4",
        positie: 0,
        overslaan:0
    }
];

//============================== KIJKT WAAR JE STAAT OP HET BORD, CODE VOOR DE OPDRACHTEN =============================

function locForTest(){
    if(currentPlayer.positie === 5){
        console.log(currentPlayer.name, " staat op vakje 5")
        taskOne()
        document.getElementById('scr-task-1').classList.add('beginTask')
    }else if(currentPlayer.positie === 9){
        console.log(currentPlayer.name, " staat op vakje 9")
        taskOne()
        document.getElementById('scr-task-1').classList.add('beginTask')
        // document.getElementById('scr-task-1').classList.remove('eindigTask')
    }else if(currentPlayer.positie === 14){
        console.log(currentPlayer.name, " staat op vakje 14")
        taskOne()
        document.getElementById('scr-task-1').classList.add('beginTask')
        // document.getElementById('scr-task-1').classList.remove('eindigTask')
    }else if(currentPlayer.positie === 18){
        console.log(currentPlayer.name, " staat op vakje 18")
        taskOne()
        document.getElementById('scr-task-1').classList.add('beginTask')
        // document.getElementById('scr-task-1').classList.remove('eindigTask')
    }else if(currentPlayer.positie === 23){
        console.log(currentPlayer.name, " staat op vakje 23")
        taskOne()
        document.getElementById('scr-task-1').classList.add('beginTask')
        // document.getElementById('scr-task-1').classList.remove('eindigTask')
    }else if(currentPlayer.positie === 27){
        console.log(currentPlayer.name, " staat op vakje 27")
        taskOne()
        document.getElementById('scr-task-1').classList.add('beginTask')
        // document.getElementById('scr-task-1').classList.remove('eindigTask')
    }else if(currentPlayer.positie === 32){
        console.log(currentPlayer.name, " staat op vakje 32")
        taskOne()
        document.getElementById('scr-task-1').classList.add('beginTask')
        // document.getElementById('scr-task-1').classList.remove('eindigTask')
    }else if(currentPlayer.positie === 36){
        console.log(currentPlayer.name, " staat op vakje 36")
        taskOne()
        document.getElementById('scr-task-1').classList.add('beginTask')
    }else if(currentPlayer.positie === 41){
        console.log(currentPlayer.name, " staat op vakje 41")
        taskOne()
        document.getElementById('scr-task-1').classList.add('beginTask')
        // document.getElementById('scr-task-1').classList.remove('eindigTask')
    }else if(currentPlayer.positie === 45){
        console.log(currentPlayer.name, " staat op vakje 45")
        taskOne()
        document.getElementById('scr-task-1').classList.add('beginTask')
        // document.getElementById('scr-task-1').classList.remove('eindigTask')
    }else if(currentPlayer.positie === 50){
        console.log(currentPlayer.name, " staat op vakje 50")
        taskOne()
        document.getElementById('scr-task-1').classList.add('beginTask')
        // document.getElementById('scr-task-1').classList.remove('eindigTask')
    }else if(currentPlayer.positie === 54){
        console.log(currentPlayer.name, " staat op vakje 54")
        taskOne()
        document.getElementById('scr-task-1').classList.add('beginTask')
        // document.getElementById('scr-task-1').classList.remove('eindigTask')
    }else if(currentPlayer.positie === 58){
        console.log(currentPlayer.name, " staat op vakje 58")
        taskOne()
        document.getElementById('scr-task-1').classList.add('beginTask')
        // document.getElementById('scr-task-1').classList.remove('eindigTask')
    }
};



//==================================== ROLLEN MET DOBBELSTENEN EN POSITIE AANPASSEN =================================


//function arrows3(){
//    if(position === 0){
//        document.getElementById("scr-home").style.visibility = "hidden";
//        document.getElementById("scr-intro").style.visibility = "visible";
//    }
//};
//function arrows4(){
//    if(position === 0){
//        document.getElementById("scr-home").style.visibility = "hidden";
//        document.getElementById("scr-intro").style.visibility = "visible";
//    }
//};

var highest = 63;
var position = 0;
var currentPlayer = players[position];

function pijl4play(){
    if(position == 4){
        arrowPos.style.top = '170px';
    }else if(position == 1){
        arrowPos.style.top = '337px';
    }else if(position == 2){
        arrowPos.style.top = '497px';
    }else if(position == 3){
        arrowPos.style.top = '664px';
    };
}
function pijl3play(){
    if(position == 3){
        arrowPos.style.top = '170px';
    }else if(position == 1){
        arrowPos.style.top = '337px';
    }else if(position == 2){
        arrowPos.style.top = '497px';
    };
}
function pijl2play(){
    if(position == 2){
        arrowPos.style.top = '170px';
    }else if(position == 1){
        arrowPos.style.top = '337px';
    };
}

function writePlayerPos(){
    if(players.length === 1) {
        document.getElementById("p1position").innerHTML = players[0].positie;
    }else if(players.length === 2){
        document.getElementById("p1position").innerHTML = players[0].positie;
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

var arrowPos = document.getElementById("spelpijl1");
var skipTurn = currentPlayer.overslaan;

function rolClick(){
    document.getElementById("nogeenkeer").style.visibility = "hidden";
    if (position >= players.length){
        position = 0;
    };
    currentPlayer = players[position++];
    if(currentPlayer.overslaan > 0){
        currentPlayer.overslaan--;
        if(players.length === 4){
            pijl4play();
        }else if(players.length === 3){
            pijl3play();
        }else if(players.length === 2){
            pijl2play();
        }
        return;
    };


    var rollen = Math.floor(Math.random() * 6) + 1;
    if (rollen === 1){
        currentPlayer.positie += 1;
        document.getElementById("rolloutcome").innerHTML = currentPlayer.name + " heeft 1 gegooid!";
    }else if(rollen === 2){
        currentPlayer.positie += 2;
        document.getElementById("rolloutcome").innerHTML = currentPlayer.name + " heeft 2 gegooid!";
    }else if(rollen === 3){
        currentPlayer.positie += 3;
        document.getElementById("rolloutcome").innerHTML = currentPlayer.name + " heeft 3 gegooid!";
    }else if(rollen === 4){
        currentPlayer.positie += 4;
        document.getElementById("rolloutcome").innerHTML = currentPlayer.name + " heeft 4 gegooid!";
    }else if(rollen === 5){
        currentPlayer.positie += 5;
        document.getElementById("rolloutcome").innerHTML = currentPlayer.name + " heeft 5 gegooid!";
    }else if(rollen === 6){
        currentPlayer.positie += 6;
        document.getElementById("rolloutcome").innerHTML = currentPlayer.name + " heeft 6 gegooid!";
    }else {};
    //writePlayerPos();
    locForTest();
    var resterend = currentPlayer.positie - highest;
    if(currentPlayer.positie === 6){
        players[position--];
        document.getElementById("nogeenkeer").style.visibility = "visible";
    }else if(currentPlayer.positie === 26){
        players[position--];
        document.getElementById("nogeenkeer").style.visibility = "visible";
    }else if(currentPlayer.positie === 53){
        players[position--];
        document.getElementById("nogeenkeer").style.visibility = "visible";
    }else if(currentPlayer.positie === 19){
        currentPlayer.overslaan++;
    }else if(currentPlayer.positie === 31){
        currentPlayer.overslaan += 3;
    }else if(currentPlayer.positie === 52){
        currentPlayer.overslaan += 3;
    }else if(currentPlayer.positie === 42){
        console.log("je stond op 42");
        setTimeout(function(){currentPlayer.positie = 39;}, 3000);
        writePlayerPos();
    }else if(currentPlayer.positie === 59){
        currentPlayer.positie = 0;
    }else if(currentPlayer.positie > highest){
        console.log(currentPlayer.positie -= resterend);
        currentPlayer.positie -= resterend;
    }else if(currentPlayer.positie === 63){
        document.getElementById("f-gewonnen").style.visibility = "visible";
        document.getElementById("dobbelsteen").remove();
        console.log("WIN");
    };
    writePlayerPos();
    console.log(currentPlayer);
    if(players.length === 4){
        pijl4play();
    }else if(players.length === 3){
        pijl3play();
    }else if(players.length === 2){
        pijl2play();
    }
};
