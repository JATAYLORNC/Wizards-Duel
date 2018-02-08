$(document).ready(function(){

//declare global variables
    
    //Define character array with character objects that includes names, attackPower, counterAttackPower, and healthPoints
    characters = [
        {name: "Ron", attackPower: 6, counterAttackPower: 6, healthPoints: 100},
        {name: "Harry", attackPower: 8, counterAttackPower: 12, healthPoints: 110},
        {name: "Hermione", attackPower: 10, counterAttackPower: 18, healthPoints: 120},
        {name: "Draco", attackPower: 5, counterAttackPower: 15, healthPoints: 100},
        {name: "Bellatrix", attackPower: 8, counterAttackPower: 20, healthPoints: 150},
        {name: "Voldemort", attackPower: 10, counterAttackPower: 25, healthPoints: 180},
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

    //for derement of HP on display
    var defHPID;
    
//function to clear display and reset variables when "Restart" button is clicked


//Define conditions for when selection of "Your Character" and "Enemy" are allowed

    //click function for selection of "Your Character"

    $("#pron").click(function() {

        //if isMyCharacter == true;  then myCharacter = "character name"  
        if(isMyCharacter == true && isDefender == false) {

            //assign value "name" to myCharacter
            myCharacter= characters[0].name;

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
                defender = characters[0].name;

                //assign value to defHPID
                defHPID = "#p2";

                //assign game counterAttackPower and healthPoint values for Defender
                defenderGameHP = characters[0].healthPoints;
                defenderGameCAP = characters[0].counterAttackPower;

                var $pron = $("#pron").detach();
                $("#defender").append($pron);

                //change div box background to black and border to green
                $("#pron").css({"background-color": "black", "border-color": "green"});

                isDefender = false;
            }
        }
    });

    $("#pharry").click(function() {  

        if(isMyCharacter == true && isDefender == false) {
            
            //assign value "name" to myCharacter
            myCharacter= characters[1].name;

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
                defender = characters[1].name;

                //assign value to defHPID
                defHPID = "#p4";

                //define game counterAttackPower and healthPoint values for Defender
                defenderGameHP = characters[1].healthPoints;
                defenderGameCAP = characters[1].counterAttackPower;

                var $pharry = $("#pharry").detach();
                $("#defender").append($pharry);

                //change div box background to black and border to green
                $("#pharry").css({"background-color": "black", "border-color": "green"});

                isDefender = false;
            }         
        }
    });

    $("#phermione").click(function() {
 
        if(isMyCharacter == true && isDefender == false) {

            //assign value "name" to myCharacter
            myCharacter= characters[2].name;

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
                defender = characters[2].name;

                //assign value to defHPID
                defHPID = "#p6";

                //define game counterAttackPower and healthPoint values for Defender
                defenderGameHP = characters[2].healthPoints;
                defenderGameCAP = characters[2].counterAttackPower;

                var $phermione = $("#phermione").detach();
                $("#defender").append($phermione);

                //change div box background to black and border to green
                $("#phermione").css({"background-color": "black", "border-color": "green"});

                isDefender = false;
            }
        }
    });

    $("#pdraco").click(function() {
 
        if(isMyCharacter == true && isDefender == false) {

            //assign value "name" to myCharacter
            myCharacter= characters[3].name;

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
                defender = characters[3].name;

                //assign value to defHPID
                defHPID = "#p8";

                //define game counterAttackPower and healthPoint values for Defender
                defenderGameHP = characters[3].healthPoints;
                defenderGameCAP = characters[3].counterAttackPower;

                var $pdraco = $("#pdraco").detach();
                $("#defender").append($pdraco);

                //change div box background to black and border to green
                $("#pdraco").css({"background-color": "black", "border-color": "green"});

                isDefender = false;
            }
        }
    });

    $("#pbellatrix").click(function() {
  
        if(isMyCharacter == true && isDefender == false) {

            //assign value "name" to myCharacter
            myCharacter= characters[4].name;

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
                defender = characters[4].name;

                //assign value to defHPID
                defHPID = "#p10";

                //define game counterAttackPower and healthPoint values for Defender
                defenderGameHP = characters[4].healthPoints;
                defenderGameCAP = characters[4].counterAttackPower;

                var $pbellatrix = $("#pbellatrix").detach();
                $("#defender").append($pbellatrix);

                //change div box background to black and border to green
                $("#pbellatrix").css({"background-color": "black", "border-color": "green"});

                isDefender = false;
            }
        }
    });

    $("#pvoldemort").click(function() {
  
        if(isMyCharacter == true && isDefender == false) {

            //assign value "name" to myCharacter
            myCharacter= characters[5].name;

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
                defender = characters[5].name;

                //assign value to defHPID
                defHPID = "#p12";

                //define game counterAttackPower and healthPoint values for Defender
                defenderGameHP = characters[5].healthPoints;
                defenderGameCAP = characters[5].counterAttackPower;

                var $pvoldemort = $("#pvoldemort").detach();
                $("#defender").append($pvoldemort);

                //change div box background to black and border to green
                $("#pvoldemort").css({"background-color": "black", "border-color": "green"});

                isDefender = false;
            }
        }
    });
        

    //click function for attack button
    $("#attack").click(function (){

        $("#msg1").text("You attacked " + defender  + " for " + charGameAP + " damage.");
        $("#msg2").text(defender + " attacked you back for " + defenderGameCAP + " damage.");

        if(charGameHP > 0 && defenderGameHP > 0) {

            console.log(charGameAP)
            charGameHP = charGameHP - defenderGameCAP;

            console.log(charGameHP);

            $(charHPID).text(charGameHP);

            defenderGameHP = defenderGameHP - charGameAP;
            $(defHPID).text(defenderGameHP);
            charGameAP = charGameAP + charAP;

            

            //conditional statement for end of battle  if(charGameHP <= 0 ) then game is over
            if(charGameHP <= 0) {

            }







        }




    });



    

    
        //message:  You have been defeated...GAME OVER!!!
        //display Restart button

    //conditional statement for end of battle  if(defemderGameHP <= 0 ) then attack is over
        //message:  You have defeated "charName", you can choose to fight another enemy.
        //remove defender image from display
        //set isDefender=true; to enable click function to select another defender

    //conditional statement

    //decrement defender game health point value based on game attackPower    
    //decrement myCharacter game health point value based on defender counterAttackPower
    //increment game attackPower for myCharacter

    //display damage inflicted on defender
    //display damage inflicted on myCharacter
























});