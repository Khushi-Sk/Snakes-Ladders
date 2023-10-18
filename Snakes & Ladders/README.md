# Snakes and Ladders in Javscript


1. Start the game, Assuming 3 players are playing.
2. Dice rolls a random number from 1 to 6.
3. Move according to the dice.
4. Rules:
    -If snake bites go to number respecting its tail.
    -If reached Ladder, move up respecting its number.
    -If dice rolls 6, roll the dice again.
    -If dice rolls 6 thrice,nulify the move and next player's chance.
    -To win, need to reach exact 100, else remain at same position.


## Emerging Requirements

1. Store player's names
2. Store each player's position during each play.
3. Turns: currentPlayer, nextPlayer
4. Snake and Ladder's position.
5. 10 x 10 grid  
6. Game status:
    Win
    Lose (if last player left)
    Continue playing.
