# Mastermind Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Description

Mastermind is a simple guessing game where you need to find a correct pattern. Players try to figure out an unknown pattern by guessing colors. Try to guess the pattern in both order and color within ten turns. After submitting a row, a small green square is shown for each circle in the correct position and color. A yellow square indicates the existence of a correct color in an incorrect position.

The benefit of this program is primarily that it allows someone to play it without requiring another person to participate.

## Project Features:

- Game: Contains main logic of the game (keeps track of selected color, game status, active row and colors in the row. It passes all props to other components)
- Board: Simple component used for displaying rows
- Row: Used for displaying one row and colors inside it. Also compares the current row with secrete row so it can give guess hints
- Peg: Simple components for displaying one peg and color
- Endgame: Displaying game status(winner, loser) and resets game
- Header: Shows title and rules of the game 

## Build with

- HTML 
- CSS (pure CSS no libraries used)
- JS 
- ReactJS 

## To get a local copy up and running follow these simple steps:

1. Clone the repo using the link from [GitHub](https://github.com/shile88/mastermind.git)

2. Install NPM packages using `npm install`

3. Start the project using `npm start` (open `https://localhost:3000` to view in browser)



