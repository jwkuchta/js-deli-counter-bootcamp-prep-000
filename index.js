var line = ["Buffy", "Willow", "Xander", "Anya"];
var currentNumber = 0;

function takeANumber(currentLine) {
  currentNumber++;
  currentLine.push(currentNumber);
  return "Welcome! You are number " + currentNumber + " in line."
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine.shift() +".";
  }
}

function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty."
  } else {
    var currently = "The line is currently: "
    return currently + line.join(", ");
  }
}

console.log(takeANumber(line));
console.log(takeANumber(line));
console.log(takeANumber(line));
console.log(takeANumber(line));
console.log(takeANumber(line));
console.log(takeANumber(line));
console.log(takeANumber(line));
console.log(nowServing(line));
console.log(currentLine(line));
console.log(nowServing(line));
