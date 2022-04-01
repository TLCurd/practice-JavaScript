// # 1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

function combineName() {
  let firstName = "Travis";
  let lastName = "Curd";
  return `${firstName}` +  " " + `${lastName}`;
}
// console.log(combineName());

// # 2. Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

function combineName2() {
  let firstName = "Travis";
  let lastName = "Curd";
  return `${firstName} ${lastName}`;
}
// console.log(combineName2());

// # 3. Write a program that asks the user to input a word. If the word is "marco", print "polo".

function marco(word) {
  if (word === "marco") {
    return "polo";
  } else {
    return "try again";
  }
}
// console.log(marco("marco"));

// # 4. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

function colorSentence() {
  let color1 = "red";
  let color2 = "white";
  let color3 = "blue";
  let text1 = "The American flag has the colors of ";
  var text2 = `${color1}, ` + `${color2}, ` + "and " + `${color3}` + ".";
  return text1.concat(text2);
}
// console.log(colorSentence());

// # 5. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

function colorSentence2() {
  let color1 = "red";
  let color2 = "white";
  let color3 = "blue";
  return "The American flag has the colors of " + `${color1}, ` + `${color2}, ` + "and " + `${color3}` + ".";
}
// console.log(colorSentence());

// # 6. Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

function santa(name) {
  if (name !== "Santa") {
    return "You're not Santa!";
  } else {
    return "Hi Santa!!!";
  }
}
// console.log(santa("Santa"));

// # 7. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

function bookTitleAuthor(title, author) { 
  var text1 = "The book, ";
  var text2 = ", was written by ";
  var text3 = ".";
  return text1.concat(title, text2, author, text3);
}
console.log(bookTitleAuthor("The Call of The Wild", "Jack London"));

// # 8. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the #{} operator).

function bookTitleAuthor2(title, author) {
  return "The book," + ` ${title}, ` + "was written by" + ` ${author}.`;   
}
console.log(bookTitleAuthor2("All the Pretty Horses", "Cormac McCarthy"));

// # 9. Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

function password(word) {
  if (word === "Joshua") {
    return "Shall we play a game?";
  } else {
    return "No games for you.";
  }
}
console.log(password("Joshua"));

// # 10. Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).

function cities(city1, city2, city3) {
  return "Can you imagine flying from " + `${city1}` + " to " + `${city2}` + ", and then flying straight to " + `${city3}?!`; 
}
console.log(cities("Tokyo", "New York", "Los Angeles"));









// # SOLUTIONS: https://gist.github.com/peterxjang/79ba5acc912a86cce2a18c2f14b1c712