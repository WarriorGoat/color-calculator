const prompt = require('prompt-sync')({sigint: true});


console.log("This program will combine two primary colors to make a secondary color, or break a secondary color into it's two primary color components.");
console.log("Please enter the color or colors you would like us to work with.");
let color1 = (prompt(">> "));
let blue = color1.includes("blue")
let red = color1.includes ("red")
let yellow = color1.includes("yellow")
let purple = color1.includes ("purple")
let orange = color1.includes ("orange")
let green = color1.includes("green")

if (green === true || orange === true || purple === true){
    if (green === true){
        console.log("Green is made up of Yellow and Blue.");
    } else if (orange === true) {
        console.log("Orange is made up of Yellow and Red.");
    } else if (purple === true) {
        console.log("Purple is made up of Red and Blue.");
    }
}else if (blue === true || red === true || yellow === true) {
    if (blue === true && red === true) {
        console.log("Blue and Red make Purple");
    } else if (blue === true && yellow === true) {
        console.log("Blue and Yellow make Green");
    } else if (yelow === true && red === true) {
        console.log("Yellow and Red make Orange");
    }
} else {
    console.log("Please try valid primary or secondary colors!!");
}








