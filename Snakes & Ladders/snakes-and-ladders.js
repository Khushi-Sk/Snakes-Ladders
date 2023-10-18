const snakeAndLadder = () => {

    const players = [
        {name: "Player 1", position: 0},
        {name: "Player 2", position: 0},
        {name: "Player 3", position: 0}
    ]

    const rollDice = () => {
        const diceNum = Math.round((Math.random()*6) + 1);
        return diceNum
    } 
    
    // snakes
    const snakes = {
        96:42,
        94:71,
        75:32,
        48:16,
        28:10,
        37:3,
    }
    // ladders
    const ladders = {   
        54:88,
        41:79,
        22:58,
        4:56,
        14:55,
        12:50,
    }

    const board = [];
    for (let number=1; number<=100; number++) {
        let emoji =''
        // snake on the board
        for (key in snakes) {
            if (key == number) {
                emoji = "🐍";
            }
        }    

        // ladder on the board
        for (key in ladders) {
            if (key == number) {
                emoji = "🪜";
            }
        }   

        board.push(emoji || `${number}`)
        }
        console.log(board)


        movePlayer = (player) => {
            const diceRoll = rollDice()
            console.log(`${player.name} has rolled ${diceRoll}.`)
        
            let currentPosition = player.position
            let newPosition = player.position + diceRoll; // new position according to the dice number
            board[newPosition] = currentPlayer
            console.log(`${player.name}'s current position at ${newPosition}.`)
            
            // dice rolled six
            if (diceRoll===6) {
                console.log(`${player.name} has rolled ${diceRoll} again. If you roll 6 again you'll lose your move and return to the last position`)
                diceRoll;
                newPosition = newPosition + diceRoll;
                console.log(`${player.name}'s current position at ${newPosition}.`)
                // snake bite return to value respecting the key in snake dict
                if (snakes[newPosition]) {
                    player.position = snakes[newPosition]
                    console.log(`Sorry, You've encountered a Snake. Your current position at ${player.position}.`)
            }
                // ladder, return to value respecting the key in ladder dict
                else if (ladders[newPosition]) {
                    player.position = ladders[newPosition]
                    console.log(`Well done, you've moved up the ladders. Your current position is at ${player.position}.`)
            }   else {
                return player.position = newPosition;
            }
                
                    
                    // 3rd time rolled six, return to previous position
                    if (diceRoll===6) {
                        console.log(`${player.name} has rolled ${diceRoll}.`)
                        player.position = currentPosition
                        console.log(`${player.name}'s current position at ${currentPosition}.`)             
                    }
                }   
            
            // snake bite return to value respecting the key in snake dict
            if (snakes[newPosition]) {
                player.position = snakes[newPosition]
                console.log(`Sorry, You've encountered a Snake. Your current position at ${player.position}.`)
        }
            // ladder, return to value respecting the key in ladder dict
            else if (ladders[newPosition]) {
                player.position = ladders[newPosition]
                console.log(`Well done, you've moved up the ladders. Your current position is at ${player.position}.`)
        }   else {
            return player.position = newPosition;
        }
        }
        
        let currentPlayerIndex = 0 // players index in list to play next
        const maxValue = 100; // winning title
        let winner = null;
        
        while (!winner) {
            currentPlayer = players[currentPlayerIndex]
            movePlayer(currentPlayer);
        
            if (currentPlayer.position >= maxValue) {
        
                if (currentPlayer.position === 100) {
                    currentPlayer.position
                    winner != currentPlayer
                } else {
                    currentPlayer.position
                }
        
                winner = currentPlayer
                break;
            }
        
            // next player
            currentPlayerIndex =  (currentPlayerIndex + 1) % players.length;
        }
        
        
        // winner announced
        console.log(`The winner is ${winner.name}!`);
        

}

snakeAndLadder()