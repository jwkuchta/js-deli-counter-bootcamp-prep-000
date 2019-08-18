function takeANumber(line, name) {
  var number = line.length + 1
  line.push(name);
  return `Welcome, ${name}. You are number ${number} in line.`
}

function nowServing(line) {
  if(line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var firstPerson = line[0]
    line.shift();
    return `Currently serving ${firstPerson}`
  }
}

function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty."
  } else {
    var currently = "The line is currently: "
    for(var i = 0; i < line.length - 1; i++) {
      var name = line[i];
      var num = i + 1;
      currently = currently + num. + name,
      }
      return currently + num. + name.
  }
}
