// This program calculates the base area and volume of a cylinder

// Require needed packages
const prompt = require("prompt-sync")({ sigint: true });

// Prompts
const radius = prompt("What is the radius? ");
const length = prompt("What is the length? ");

// Calculations
const area = Math.pow(radius, 2) * 3.14159;
const volume = area * length;

// Output the calculations
console.log(`The area is ${area} and the volume is ${volume}`);
