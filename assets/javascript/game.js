$(document).ready(function(){

//declare global variables
    
    //Define character array with character objects that includes names, attackPower, counterAttackPower, and healthPoints
    characters = [
        {"name": "Ron", "attackPower": 6, "counterAttackPower": 6, "healthPoints": 100},
        {"name": "Harry", "attackPower": 8, "counterAttackPower": 12, "healthPoints": 110},
        {"name": "Hermione", "attackPower": 10, "counterAttackPower": 18, "healthPoints": 120},
        {"name": "Draco", "attackPower": 5, "counterAttackPower": 15, "healthPoints": 100},
        {"name": "Bellatrix", "attackPower": 8, "counterAttackPower": 20, "healthPoints": 150},
        {"name": "Voldemort", "attackPower": 10, "counterAttackPower": 25, "healthPoints": 180},
    ]
        
    //Create variables myCharacter and defender.  Set value to empty string.
    var myCharacter = "";
    var defender = "";
        
        //Define variable isMyCharacter = true;
        //Define variable isDefender = false;
        //charGameHP
        //defenderGameHP
        //charGameAP
        //defenderGameCAP
    

//function to clear display and reset variables when "Restart" button is clicked


//Define conditions for when selection of "Your Character" and "Enemy" are allowed

    //click function for selection of "Your Character"

        //if isMyCharacter == true;  then myCharacter = "character name"    
        //define game attackPower and healthPoint values for myCharacter
        //set isMyCharacter=false;, isDefender=true;

        //move character to "Your Character" section
        //move remaining characters to "Enemies Available to Attack" section
        //change div box background to red and border to black

    //click function for selection of "Enemy"

        //if isDefender == true;  then defender = "character name"
        //define game counterAttackPower and healthPoint values for Defender
        //set isDefender=false;

        //move Enemy to "Defender" section
        //change div box background to black and border to green
        //Initiate "Counter Attack Power" and "Health Point" values for "Defender"


    //click function for attack button

    //conditional statement for end of battle  if(charGameHP <= 0 ) then game is over
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
























}