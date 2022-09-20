const prompt = require('prompt-sync')({sigint: true});

console.log("Would you like to combine two colors or break a color apart?  Please enter either 'combine' or 'break':");
let action = (prompt(">> "));
let color1 = "white"
let color2 = "white"
let action1 = false

if (action === "combine") {
    action1 = true;
    console.log("Please enter two colors to combine: ");
let color1 = (prompt("Color 1 >> "));
let color2 = (prompt("Color 2 >> "));
if ((color1 === "red" && color2 === "blue") || (color1 === "blue" && color2 === "red")) {
    console.log("Combining red and blue makes purple");
}else if ((color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red")) {
    console.log("Combining red and yellow makes orange");
} else if ((color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue")) {
    console.log("Combining blue and yellow makes green");
} else {
    console.log("Error, try two different primary colors!");
}}


if (action === "break") {
    action1 = true
    console.log("Please enter the color to break apart: ");
let color3 = (prompt("Color >> "));

if (color3 === "purple") {
    console.log("Combining red and blue makes purple");
}else if (color3 === "orange") {
    console.log("Combining red and yellow makes orange");
}else if (color3 === "green") {
    console.log("Combining blue and yellow makes green");
} else {
    console.log("Error, please try again with a different secondary color!");
}}

if (action1 === false) {
    console.log("Please try again and enter a valid action!");
}



