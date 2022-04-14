// //////////////////////////////////////////////////////
// ///                                                ///
// ///           JS BEGINNER GROUP PROJECT            ///
// ///                                                ///
// ///              TEXT ADVENTURE GAME               ///
// ///                                                ///
// //////////////////////////////////////////////////////

const messages = { //Adreana
    M1: "Do you want escape from the Empire?",
    C1: "Wise choice! Let's begin!", //if user chooses yes
    C2: "Understandable. Have a nice day.", // if user chooses no
    M2: "The guard is sleeping. His dongle knocks the keys to the ground You can use the force to grab them: \n\nWhich key, out of three different keys, do you select? \n\n1: small key\n2: medium key\n3: big key",
    C3: "You rock! You chose the right key. Doors open and you grab your lightsaber!", //right key 
    C4: "Aw, bummer! That was the wrong key, Jedi. Click OK to try again!",
    // wrong key 
    M3: "You run into Darth Vader! Do you want to fight him? \n\nSelect OK to continue.",
    C5: "Your feet mysteriously lift off the ground, you cannot breathe. What's your next move? (Enter 1, 2, 3, or 4). \n \n1: You use the force to throw a toaster at the back of his head and escape. \n \n2: You manage to grab your lighsaber. He doesn't know your blade is 50 ft long and you stick it to him! \n \n3: You can make one international call. You call Granny. Granny gives you the wisdom to defeat Darth Vader! You do so and escape! \n \n4: You do nothing and die...", //if player chooses yes
    C6: "You have escaped by the skin of your teeth! Nicely done Jedi. \n\nSelect OK to continue.",
    // if player chooses no
    M4: "You run down the cooridor, pass Sandie's Stellar Sandwhich Shop, take the elevator to the hanger. Time to make your escape! Which ship do you want to steal? \n \n1: TIE Interceptor \n2: Naboo N-1 Starfighter \n3: Millennium Falcon \n4: Hop in with Rick and Morty",
    C7: "Excellent! Where would you like to go?",
    C8: 'You pass by a small cell. Looks like there is a resistance soldier and his poor soul died a long time ago. There is also a piece of paper with a coordinate on it: "333999" . You might need to remember this! \n\n(!!) Obtained key item: Paper with coordinate (!!)',//A coordinate player need later for escape!
    M5: 'You just found the Empire War Ship Hangar!',
    C9: 'Nothing happens when you turn on the master switch. Looks like the battery died long time ago.',//When player choose ship 1
    C10: 'The power is on, but the fuel indicator says "LOW". There is no time to find fuel now! Darth Vader is closing in. You can hear his breath!', //When player choose ship 2. 
    C11: 'You sit on the pilot seat, and there\'s a password pad. What do you type in?',
    C12: 'You wasted too much time to test this game. You\'ve been caught by Darth Vader! You\'ve been put back in your cell with a frim slap on the wrist, Jedi! Bad Jedi!',//when player don't choose any ship
    M6: 'The ship is on and you ride it out from the Death Star!', //When player type in the right password. 
    M7: 'The pad shows "Password incorrect".',//When player type in the wrong password. 
    C13: "The force is not strong in you. GAME OVER, loser.",
    C14: "Really, you chose Rick and Morty? They're here visiting Sandie's Steller Sandwhich Shop. They don't care about you. They hand you over to the Darth Vader in exchnage for a Globknocker. Back to your cell, Jedi.",
    M8: "You sit in the pilot seat and turn the seat warmer on. Space is cold! You flip the master switch to the ON position. Nothing happenes. A prompt appears on the sceen in front of you: \n\n'Welcome Operator. You must defeat the computer in a game of Rock, Paper, Scissors for your spacecraft to turn on. Do you wish to proceed?' \n\nSelect OK to continue",
    C15: "'Looks like you're running out of time. Think you can beat me? Let's tango! What do you choose?'\n\n Rock, Paper, Scissors",
    C16: "Really? The oldest game in the galaxy and you're too scared to play... get back to your cell!",
    M9: "You're amazing you little punk! Let's keep the momentum going! Let's get you out of here! \n\nSelect OK to start the Interstellar Hyperspace Engine.",
    M10: "'Please input your coordinates, Jedi.'\n\nThe paper with the coordinates on it! What was that number again? You need to enter some type of destination coordinate: ",
    M11: "Invalid Coordinate!",
    M12: "Maybe the coordinate is recorded somewhere?\n\nYou obtained that piece of paper with 333999 on it, remember. Maybe that will help!",
    M13: "Interstellar Hyperspace Engine start up successful. Destination coordinate confirmed. Click OK to initiate time space jumping.",
    M14: "Congratulations Jedi! \n\nYou\'ve successfully escaped back into to the galaxy far far away ... \n\n GAME OVER. YOU WON.",

}

const beatTheComputerPrompts = {
    R1: "Paper beats rock! Congratulations, you may proceed.",
    R2: "Scissors beats paper! Congratulations, you may proceed.",
    R3: "Rock beats scissors! Congratulations, you may proceed.",
    R4: "Argh! You tied with the computer! Try again?",
    R5: "Error. Invalid response. Try again.",
    R6: "Computer threw rock and you threw scissors. You lose. Try again!",
    R7: "Computer threw scissors and you threw paper. You lose. Try again!",
    R8: "Computer threw paper and you threw rock. You lose. Try again!"
};

function beginGame() {
    const response = confirm(messages.M1);
    if (response) {
        alert(messages.C1);
        questionTwo();
    }
    else alert(messages.C2);
};

function questionTwo() {
    const response = prompt(messages.M2);
    if (response === "small key" || response === '1') { // player can type 1 or small key both are truthy.
        alert(messages.C3);
        alert(messages.C8);
        questionThree();
    }
    else if (response !== "small key") {
        if (confirm(messages.C4)) {
            questionTwo(); // I just invoked the function within itself, here, to take us back to choosing the right option - Ryan P.
        }
    }
}

function questionThree() {//This is the step you meet Darth Vader
    const response = confirm(messages.M3);
    const makeDecision = prompt(messages.C5)
    if (makeDecision == 1 || makeDecision == 2 || makeDecision == 3) {
        alert(messages.C6);
        questionFour();
    } else alert(messages.C13)
} // I wrote this code and tested it. Changed / added some wording in our messages object - Ryan P.  

function questionFour() {
    const response = prompt(messages.M4);

    if (response === '1' || response === 'TIE Interceptor') {
        alert(messages.C9);
        questionFour();
    } else if (response === '2' || response === 'Naboo N-1 Starfighter') {
        alert(messages.C10);
        questionFour();
    } else if (response === '3' || response === 'Millennium Falcon') {
        alert(messages.M8);
        confirm;
        beatTheComputer();
    } else if (response === '4' || response === 'Hop in with Rick and Morty') {
        alert(messages.C14)
        beginGame();
    } else {
        alert(messages.C12);
        beginGame();
    }
};

function beatTheComputer() {
    let response = prompt(messages.C15)
    if (!response) {
        alert(messages.C16);
        return;
    } else {
        response = response.toLowerCase();
        const computerInput = ['rock', 'paper', 'scissors'];
        let i = Math.floor(Math.random() * 3)
        if (computerInput[i] == 'rock' && response == 'paper') {
            confirm(beatTheComputerPrompts.R1)
            questionSix()
        } else if (computerInput[i] == 'rock' && response == 'scissors') {
            alert(beatTheComputerPrompts.R6)
            beatTheComputer();
        } else if (computerInput[i] == 'scissors' && response == 'rock') {
            confirm(beatTheComputerPrompts.R3)
            questionSix()
        } else if (computerInput[i] == 'scissors' && response == 'paper') {
            alert(beatTheComputerPrompts.R7)
            beatTheComputer();
        } else if (computerInput[i] == 'paper' && response == 'scissors') {
            confirm(beatTheComputerPrompts.R2)
            questionSix()
        } else if (computerInput[i] == 'paper' && response == 'rock') {
            alert(beatTheComputerPrompts.R8)
            beatTheComputer();
        } else if (computerInput[i] == response) {
            alert(beatTheComputerPrompts.R4)
            beatTheComputer();
        } else if (!computerInput.includes(response)) {
            alert(beatTheComputerPrompts.R5)
            beatTheComputer();
        }
    }
};

function questionSix() { //Player needs to enter coordinate here - Jingbo 
    const response = confirm(messages.M9)
    const coordinate = prompt(messages.M10)
    if (coordinate === '333999') {
        endGame();
    } else {
        alert(messages.M11);
        alert(messages.M12);
        questionSix();
    }
};

function endGame() {//Was gonna write a auto count down but not possible only with JS. - Jingbo
    let timeRemain = 10;
    alert(messages.M13);
    countDown();

    function countDown() {// An count dwon within the endGame. - Jingbo 
        if (timeRemain <= 0) {
            finish();
        } else {
            timeRemain--;
            alert(timeRemain);
            countDown()
        }
    }
}

function finish() {// Final step. - Jingbo 
    alert(messages.M14);
}

beginGame();
