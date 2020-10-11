let readlineSync = require('readline-sync');

console.log( "Welcome to Batman: Arkham Asylum!" );
console.log("************************************");
console.log("Menu options:");
let menu = readlineSync.question( "SELECT A NUMBER \n 1) Play Game \n 2) Quit \n: " );

do { //loop to stay in the game 
    if (menu == 1){
    console.log( "What do you want to do?" ); //start game
    let option = readlineSync.question( "Pick a number: \n 1)look around\n 2)smack a prisoner \n 3)run away:   \n" );

    if (option == 1){ // 1st option menu
    console.log( "You see a bunch of angry prisoners and the Joker! \n" );
          console.log( "What do you want to do next?" );
          let option = readlineSync.question( "Pick a number: 1) make friends with prisoners, \n 2) start a fight with the meanest prisoner, \n3)run away   \n" );
            if (option == 1){ //1st option submenu
              console.log( "Prisoners kick your butt under Joker's order. Joker: \"Pansy!.\" \n");
              }
            else if (option == 2){
              console.log("Punch the biggest dude in the room, he goes down. Joker claps \n" );
            }  
            else if (option == 3){
              console.log("Batman: \"Bats can't run.\" \n" );
            }
            else {
              console.log( "A prisoner punches you in the face." );
              console.log( "Prisoner: \"Quit messin' around.\"" )
            }
            
    }
    else if (option == 2){ //2n option menu
      console.log( "Ouch! What did I ever do to you, man?");
          console.log( "What do you want to do next?" );
          let option = readlineSync.question( "Pick a number: 1) Apologize , \n 2) Knock him out  , \n3) Random pick  " );
          if (option == 1){
            console.log("Gets punched in the face and knocked out \n");
          }
          else if (option == 2){
            console.log("Joker invites you to his gang \n");
          }
          else if (option == 3){
            console.log("SURPRISE \n");
          }
          else {
            console.log( "A prisoner punches you in the face." );
            console.log( "Prisoner: \"Quit messin' around.\"" )
          }
    }
    else if (option == 3){ //option 3 menu
      console.log( "Batman: \"Bats can't run.\"" );
    }
    else {
      console.log( "A prisoner punches you in the face." );
      console.log( "Prisoner: \"Quit messin' around.\"" )
    }
  }  
}while (menu != 2);
console.log("Bye");
