// Code Along Norms: 
// 1. Only be on Repl.it/classroom resources
// 2. Actively follow along and engage
// 3. Ask questions and flag if you get stuck
// 4. Take notes as needed!
let name = prompt("What's your name?")

console.log("Welcome to my game, " + name)

console.log("Welcome to my game,", name)

console.log(`Welcome to my game, ${name}`)

let role =  prompt("What role do you want?(Magician, fighter, peasant)")
console.log(`Okay, ${name}, your role is now ${role}.`)

let powerLevel = prompt("What is your power level?")
powerLevel = parseInt(powerLevel)
console.log(typeof powerLevel)
