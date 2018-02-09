$(document).ready(function(){

//declare global variables
    
    //Define character array with character objects that includes names, attackPower, counterAttackPower, and healthPoints
    characters = [
        {
            charName: "Ron", 
            attackPower: 7, 
            counterAttackPower: 12, 
            healthPoints: 115
        },

        {
            charName: "Harry", 
            attackPower: 8, 
            counterAttackPower: 12, 
            healthPoints: 125
        },

        {
            charName: "Hermione", 
            attackPower: 8, 
            counterAttackPower: 12, 
            healthPoints: 110
        },

        {
            charName: "Draco", 
            attackPower: 5, 
            counterAttackPower: 5, 
            healthPoints: 100
        },

        {
            charName: "Bellatrix", 
            attackPower: 8, 
            counterAttackPower: 25, 
            healthPoints: 150
        },

        {
            charName: "Voldemort", 
            attackPower: 10, 
            counterAttackPower: 30, 
            healthPoints: 180
        }
    ]
        
    //Create variables myCharacter and defender.  Set value to empty string.
    var myCharacter = "";
    var defender = "";
        
    //Define variable isMyCharacter = true;
    var isMyCharacter = true;

    //Define variable isDefender = false;
    var isDefender = false;

    //charGameHP
    var charGameHP;
    
    //defenderGameHP
    var defenderGameHP;

    //charGameAP
    var charGameAP;

    //charAP
    var charAP;

    //defenderGameCAP
    var defenderGameCAP;

    //for decrement of defender HP on display
    var charHPID;

    //for decrement of HP on display
    var defHPID;

    //for removal of defeated enemy from display
    var charID;

    //for keeping track of whether or not an enemy has been chosen
    var enemy;

    //for keeping track of how many enemies have been defeated
    var enemyCount = characters.length - 1;
    
//function to clear display and reset variables when "Restart" button is clicked


//Define conditions for when selection of "Your Character" and "Enemy" are allowed

    //click function for selection of "Your Character"

    $("#pron").click(function() {

        charID = "#pron";

        //if isMyCharacter == true;  then myCharacter = "character name"  
        if(isMyCharacter == true && isDefender == false) {

            //assign value "name" to myCharacter
            myCharacter= characters[0].charName;

            //assign value to charHPID
            charHPID = "#p2";

            //assign game attackPower and healthPoint values for myCharacter
            charGameHP = characters[0].healthPoints;
            charGameAP = characters[0].attackPower;
            charAP = characters[0].attackPower;

            //move character to "Your Character" section
            var $pron = $("#pron").detach();
            $("#myChar").append($pron);

            isMyCharacter = false;
            isDefender = true;
        }

        if(isDefender == true && isMyCharacter == false) {

            //move remaining characters to "Enemies Available to Attack" section
            var $characters = $("#characters").detach();
            $("#enemy").append($characters);

            //change div box background to red and border to black
            $("#characters").children().css({"background-color": "red", "border-color": "black"});
            
            if(myCharacter != "Ron") {

                //assign value "name" to defender
                defender = characters[0].charName;

                //assign value to defHPID
                defHPID = "#p2";

                //Note presence of enemy in "Defender" area of display
                enemy = true;

                //assign game counterAttackPower and healthPoint values for Defender
                defenderGameCAP = characters[0].counterAttackPower;
                defenderGameHP = characters[0].healthPoints;

                var $pron = $("#pron").detach();
                $("#defender").prepend($pron);

                //change div box background to black and border to green
                $("#pron").css({"background-color": "black", "border-color": "green", "color": "white"});

                isDefender = false;
            }
        }
    });

    $("#pharry").click(function() {  

        charID = "#pharry";   

        if(isMyCharacter == true && isDefender == false) {
            
            //assign value "name" to myCharacter
            myCharacter= characters[1].charName;

            //assign value to charHPID
            charHPID = "#p4";

            //assign game attackPower and healthPoint values for myCharacter
            charGameHP = characters[1].healthPoints;
            charGameAP = characters[1].attackPower;
            charAP = characters[1].attackPower;

            //move character to "Your Character" section
            var $pharry = $("#pharry").detach();
            $("#myChar").append($pharry);

            isMyCharacter = false;
            isDefender = true;
        }

        if(isDefender == true && isMyCharacter == false) {

            //move remaining characters to "Enemies Available to Attack" section
            var $characters = $("#characters").detach();
            $("#enemy").append($characters);

            //change div box background to red and border to black
            $("#characters").children().css({"background-color": "red", "border-color": "black"});
            
            if(myCharacter != "Harry") {

                //assign value "name" to defender
                defender = characters[1].charName;

                //assign value to defHPID
                defHPID = "#p4";

                //Note presence of enemy in "Defender" area of display
                enemy = true;

                //define game counterAttackPower and healthPoint values for Defender
                defenderGameHP = characters[1].healthPoints;
                defenderGameCAP = characters[1].counterAttackPower;

                var $pharry = $("#pharry").detach();
                $("#defender").prepend($pharry);

                //change div box background to black and border to green
                $("#pharry").css({"background-color": "black", "border-color": "green", "color": "white"});

                isDefender = false;
            }         
        }
    });

    $("#phermione").click(function() {

        charID = "#phermione";
 
        if(isMyCharacter == true && isDefender == false) {

            //assign value "name" to myCharacter
            myCharacter= characters[2].charName;

            //assign value to charHPID
            charHPID = "#p6";

            //assign game attackPower and healthPoint values for myCharacter
            charGameHP = characters[2].healthPoints;
            charGameAP = characters[2].attackPower;
            charAP = characters[2].attackPower;

            //move character to "Your Character" section
            var $phermione = $("#phermione").detach();
            $("#myChar").append($phermione);

            isMyCharacter = false;
            isDefender = true;
        }

        if(isDefender == true && isMyCharacter == false) {

            //move remaining characters to "Enemies Available to Attack" section
            var $characters = $("#characters").detach();
            $("#enemy").append($characters);

            //change div box background to red and border to black
            $("#characters").children().css({"background-color": "red", "border-color": "black"});
            
            if(myCharacter != "Hermione") {

                //assign value "name" to defender
                defender = characters[2].charName;

                //assign value to defHPID
                defHPID = "#p6";

                //Note presence of enemy in "Defender" area of display
                enemy = true;

                //define game counterAttackPower and healthPoint values for Defender
                defenderGameHP = characters[2].healthPoints;
                defenderGameCAP = characters[2].counterAttackPower;

                var $phermione = $("#phermione").detach();
                $("#defender").prepend($phermione);

                //change div box background to black and border to green
                $("#phermione").css({"background-color": "black", "border-color": "green", "color": "white"});

                isDefender = false;
            }
        }
    });

    $("#pdraco").click(function() {

        charID = "#pdraco";
 
        if(isMyCharacter == true && isDefender == false) {

            //assign value "name" to myCharacter
            myCharacter= characters[3].charName;

            //assign value to charHPID
            charHPID = "#p8";

            //assign game attackPower and healthPoint values for myCharacter
            charGameHP = characters[3].healthPoints;
            charGameAP = characters[3].attackPower;
            charAP = characters[3].attackPower;

            //move character to "Your Character" section
            var $pdraco = $("#pdraco").detach();
            $("#myChar").append($pdraco);
            
            isMyCharacter = false;
            isDefender = true;
        }

        if(isDefender == true && isMyCharacter == false) {

            //move remaining characters to "Enemies Available to Attack" section
            var $characters = $("#characters").detach();
            $("#enemy").append($characters);

            //change div box background to red and border to black
            $("#characters").children().css({"background-color": "red", "border-color": "black"});
            
            if(myCharacter != "Draco") {

                //assign value "name" to defender
                defender = characters[3].charName;

                //assign value to defHPID
                defHPID = "#p8";

                //Note presence of enemy in "Defender" area of display
                enemy = true;

                //define game counterAttackPower and healthPoint values for Defender
                defenderGameHP = characters[3].healthPoints;
                defenderGameCAP = characters[3].counterAttackPower;

                var $pdraco = $("#pdraco").detach();
                $("#defender").prepend($pdraco);

                //change div box background to black and border to green
                $("#pdraco").css({"background-color": "black", "border-color": "green", "color": "white"});

                isDefender = false;
            }
        }
    });

    $("#pbellatrix").click(function() {

        charID = "#pbellatrix";
  
        if(isMyCharacter == true && isDefender == false) {

            //assign value "name" to myCharacter
            myCharacter= characters[4].charName;

            //assign value to charHPID
            charHPID = "#p10";

            //assign game attackPower and healthPoint values for myCharacter
            charGameHP = characters[4].healthPoints;
            charGameAP = characters[4].attackPower;
            charAP = characters[4].attackPower;

            //move character to "Your Character" section
            var $pbellatrix = $("#pbellatrix").detach();
            $("#myChar").append($pbellatrix);

            isMyCharacter = false;
            isDefender = true;
        }

        if(isDefender == true && isMyCharacter == false) {

            //move remaining characters to "Enemies Available to Attack" section
            var $characters = $("#characters").detach();
            $("#enemy").append($characters);

            //change div box background to red and border to black
            $("#characters").children().css({"background-color": "red", "border-color": "black"});
            
            if(myCharacter != "Bellatrix") {

                //assign value "name" to defender
                defender = characters[4].charName;

                //assign value to defHPID
                defHPID = "#p10";

                //Note presence of enemy in "Defender" area of display
                enemy = true;

                //define game counterAttackPower and healthPoint values for Defender
                defenderGameHP = characters[4].healthPoints;
                defenderGameCAP = characters[4].counterAttackPower;

                var $pbellatrix = $("#pbellatrix").detach();
                $("#defender").prepend($pbellatrix);

                //change div box background to black and border to green
                $("#pbellatrix").css({"background-color": "black", "border-color": "green", "color": "white"});

                isDefender = false;
            }
        }
    });

    $("#pvoldemort").click(function() {

        charID = "#pvoldemort";
  
        if(isMyCharacter == true && isDefender == false) {

            //assign value "name" to myCharacter
            myCharacter= characters[5].charName;

            //assign value to charHPID
            charHPID = "#p12";

            //assign game attackPower and healthPoint values for myCharacter
            charGameHP = characters[5].healthPoints;
            charGameAP = characters[5].attackPower;
            charAP = characters[5].attackPower;

            //move character to "Your Character" section
            var $pvoldemort = $("#pvoldemort").detach();
            $("#myChar").append($pvoldemort);

            isMyCharacter = false;
            isDefender = true;
        }

        if(isDefender == true && isMyCharacter == false) {

            //move remaining characters to "Enemies Available to Attack" section
            var $characters = $("#characters").detach();
            $("#enemy").append($characters);

            //change div box background to red and border to black
            $("#characters").children().css({"background-color": "red", "border-color": "black"});
            
            if(myCharacter != "Voldemort") {

                //assign value "name" to defender
                defender = characters[5].charName;

                //assign value to defHPID
                defHPID = "#p12";

                //Note presence of enemy in "Defender" area of display
                enemy = true;

                //define game counterAttackPower and healthPoint values for Defender
                defenderGameHP = characters[5].healthPoints;
                defenderGameCAP = characters[5].counterAttackPower;

                var $pvoldemort = $("#pvoldemort").detach();
                $("#defender").prepend($pvoldemort);

                //change div box background to black and border to green
                $("#pvoldemort").css({"background-color": "black", "border-color": "green", "color": "white"});

                isDefender = false;
            }
        }
    });
        

    //click function for attack button
    $("#attack").click(function() {

        if(enemy == false) {
            $("#msg1").text("No enemy here.");
            setTimeout(clearMsg1, 1000);
        }

        if(isMyCharacter == false && isDefender == false) {

            if(charGameHP > 0) {

                defenderGameHP = defenderGameHP - charGameAP;
                $(defHPID).text(defenderGameHP);
                charGameAP = charGameAP + charAP;

                $("#msg1").text("You attacked " + defender  + " for " + charGameAP + " damage.");
                $("#msg2").text(defender + " attacked you back for " + defenderGameCAP + " damage.");

                if(defenderGameHP > 0) {
                    charGameHP = charGameHP - defenderGameCAP;
                    $(charHPID).text(charGameHP);
                }

                //conditional statement for end of battle  if(charGameHP <= 0 ) then game is over
                if(charGameHP <= 0) {
                    $("#msg1").text("You have been defeated...GAME OVER!!!");
                    $("#msg2").text("");
                }

                if(defenderGameHP <= 0 && charGameHP > 0) {

                    //decrement enemy count
                    enemyCount--;

                    if (enemyCount > 0) {
                        $("#msg1").text("You have deafeated " + defender + ", you can choose to fight another enemy.");
                        $("#msg2").text("");

                        //hide defender image 
                        $(charID).css("visibility", "hidden");

                        //set isDefender=true; to enable click function to select another defender
                        isDefender = true;

                        setTimeout(clearMsg1, 2000);
                        enemy = false;
                    }

                    
                    
                    if(enemyCount == 0) {

                        //hide defender image
                        $(charID).css("visibility", "hidden");

                        clearMsg1();
                        clearMsg2();

                        $("#msg2").text("You Won!!!!   Game Over!!!");

                        //display Restart button
                        $("<button type='button' class='btn btn:hover btn-default' id='reset'>Reset</button>").appendTo("#battle").click(function() {
                            var iwork = "I work";
                            console.log(iwork);

                            var $characters = $("#characters").detach();
                            $("#charCol").append($characters);


                            var $pron = $("#pron").detach();
                            $("#characters").append($pron);
                            $("#pron").css({"visibility": "visible", "background-color": "white", "border-color": "green", "color": "black"});
                            $("#p2").text("115");

                            var $pharry = $("#pharry").detach();
                            $("#characters").append($pharry);
                            $("#pharry").css({"visibility": "visible", "background-color": "white", "border-color": "green", "color": "black"});
                            $("#p4").text("125");

                            var $phermione = $("#phermione").detach();
                            $("#characters").append($phermione);
                            $("#phermione").css({"visibility": "visible", "background-color": "white", "border-color": "green", "color": "black"});
                            $("#p6").text("110");

                            var $pdraco = $("#pdraco").detach();
                            $("#characters").append($pdraco);
                            $("#pdraco").css({"visibility": "visible", "background-color": "white", "border-color": "green", "color": "black"});
                            $("#p8").text("100");

                            var $pbellatrix = $("#pbellatrix").detach();
                            $("#characters").append($pbellatrix);
                            $("#pbellatrix").css({"visibility": "visible", "background-color": "white", "border-color": "green", "color": "black"});
                            $("#p10").text("150");

                            var $pvoldemort = $("#pvoldemort").detach();
                            $("#characters").append($pvoldemort);
                            $("#pvoldemort").css({"visibility": "visible", "background-color": "white", "border-color": "green", "color": "black"});
                            $("#p12").text("180");

                            isMyCharacter = true;
                            enemyCount = characters.length-1;

                            setTimeout(removeResetButton, 100);

                            $("#msg2").text("");

                            function removeResetButton() {
                                $("#reset").remove();
                            }
                        });
                    }
                }
            }
        }
    });

    function clearMsg1() {
        $("#msg1").text("");
    }

    function clearMsg2() {
        $().text("");
    }

});