# 21 Games

Creating mathematical games (and bots to play them) with functional programming.

**Unless Specified Otherwise, all games are 2-Player**

## Checklist 
Impartial Games:
- [ ] Nim (multi stack)
- [ ] Sprouts
- [ ] Cram
- [ ] Hackenbush
  - [ ] Original
  - [ ] Blue-Red
  - [ ] Blue-Red-Green
- [ ] Dots and Boxes

Partisan Games
- [ ] Tic-tac-toe
- [ ] Blockbusting
- [ ] Connect Four

Larger Partisan Games
- [ ] Chess
- [ ] Go
- [ ] Reversi

Games of Chance 
- [ ] Monopoly

Games of Chance and Imperfect Information
- [ ] Dominoes
  - [ ] Draw
  - [ ] Block
  - [ ] All fives
  - [ ] All threes
- [ ] Poker
- [ ] Figgie
- [ ] Bridge

Solitaire Games
- [ ] Brainvita
- [ ] Sudoku
- [ ] Kakuro
- [ ] Loop the Loop
- [ ] Nonograms

## Functional Programming Notes
- Try to return changes of state to the world from your functions. Functions that modify the world should be unit, and try to make one function perform only one unit operation
- Algebraic Data Types are useful, so is pattern matching. 
- Keep functions small and self-contained

## Combinatorial Game Theory Notes
- **Combinatorial Game** - 
- Partisan and Impartial Combinatorial Games
- Concepts
  - Cooling and Heating
  - Game tree
    - Ply
	- Branching Factor (b) and Depth (d)
  - Game tree search
    - minimax
	- alpha-beta pruning

## Resources

- [Sp.268 The Theory of Toys and Games (MIT)](http://web.mit.edu/sp.268/www/)
- [Shisuko's CodeForces blog on nimbers and Sprague-Grundy Theory](https://codeforces.com/blog/entry/66040)
- [Introduction to _On Numbers and Games_](https://www.cs.cmu.edu/afs/cs/academic/class/15859-s05/www/lecture-notes/comb-games-notes.pdf)
- _On Numbers and Games_ - Conway
- _Winning ways for your mathematical plays_ - Conway, Berlekamp, Guy
- _The Dots and Boxes Game_ - Berlekamp
- _Mathematical Go_ - Berlekamp
