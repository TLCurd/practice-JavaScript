// // # 1. Write a while loop to print the numbers 1 through 10.

// function oneToTen() {
//   var x = 10;
//   var y = 1;
//   while (y <= x) { 
//     console.log(y);
//     y++; 
//   }
// }
// oneToTen();

// // # 2. Write a while loop that prints the word "hello" 5 times.

// function helloFive(word) {
//   var i = 0;
//   while (i < 5) {
//     console.log(word);
//     i++;
//   }
// }
// helloFive("hello");

// // # 3. Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".

// function forever(word) {
//   while (word !== "stop") {
//     console.log("Try again.");
//   }
//   console.log("Okay, I'll stop.");
// }
// forever("stop");

// // # 4. Write a while loop that prints the numbers 0 through 100, increasing by 5 each time.

// function hundredByFives() {
//   var x = 0;
//   while (x <= 100) {
//     console.log(x);
//     x += 5;
//   }
// }
// hundredByFives();

// // # 5. Write a while loop that prints the number 9000 ten times.

// function nineThousand() {
//   var x = 9000;
//   var y = 0;
//   while (y < 10) {
//     console.log(x);
//     y++;
//   }
// }
// nineThousand();

// # 6. Write a while loop that asks the user to enter a number and will run forever until the user enters a number greater than 10.
// function greaterThanTen() {
//   const readline = require("readline");

//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   rl.question("Enter a number:", function(answer) {
//     while (answer < 11) {
//       console.log("Try again");
//     } if (answer > 10) {
//       console.log("You nailed it!");
//       console.log("Closing the interface");
//       rl.close();
//     } 
//   });
// }
// greaterThanTen();

// # 7. Write a while loop that prints the numbers 50 to 70.

function fiftyToSeventy() {
  var x = 50;
  while (x < 71) {
    console.log(x);
    x++;
  }
}
// fiftyToSeventy();

// # 8. Write a while loop that prints the phrase "Around the world" 144 times.

function daftPunk() {
  const phrase = "[In robot voice] Around the wooorrld!";
  var x = 0;
  while (x < 143) {
    console.log(phrase);
    x++;
  }
}
// daftPunk();

// # 9. Write a while loop that asks the user to enter a word and will run forever until the user enters a word with more than 5 letters.

function atLeastFiveLetters(word) {
  while (word.length < 6) {
    console.log("Nope.");
  }
  console.log("You nailed it!");
}
// atLeastFiveLetters("hello");

// # 10. Write a while loop that prints the even numbers from 2 to 40.

function evenFromTwoToForty() {
  var x = 2;
  while (x < 41) {
    console.log(x);
    x += 2;
  }
}
evenFromTwoToForty();