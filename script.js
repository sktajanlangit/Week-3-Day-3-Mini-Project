// define variable
var userChoice = window.prompt("Enter Rock, Paper, or Scissors")

// Auto-capitalization of first letter 
let userChoice[0] = userChoice.toUppercase();

// Ranom opponent generator
var index = Math.floor(Math.random() * options.length);
// define computer choice variable
var computerChoice = options[index]
// Display computer option choice
    window.alert("The computer chose " + computerChoice)

