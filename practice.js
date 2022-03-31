// // // Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
// // function printNumbersDivisibleByThree() {
// //   var index = 1;
// //   while (index <= 1000) {
// //     if (index % 3 === 0) {
// //       console.log(index);
// //     }
// //     index += 1;
// //   }
// // }
// // printNumbersDivisibleByThree();


// // // Write a method that accepts an array of strings and prints out every other string.
// // function printEveryOtherItem(strings) {
// //   var index = 0;
// //   strings.forEach(function(string) {
// //     if (index % 2 === 0) {
// //       console.log(string);
// //     }
// //     index += 1;
// //   });
// // }
// // printEveryOtherItem(["a", "b", "c", "d", "e"]);


// // // Write a method that accepts an array of numbers and returns the sum.
// // function computeSum(numbers) {
// //   var sum = 0;
// //   numbers.forEach(function(number) {
// //     sum += number;
// //   });
// //   return sum;
// // }
// // console.log(computeSum([2, 4, 5]));

// // // Start with the hash: city_populations = {chi: 2700000}
// // // Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// // // The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
// // var cityPopulations = {chi: 2700000};
// // cityPopulations["nyc"] = 8400000;
// // cityPopulations.sf = 800000;  // same as cityPopulations["sf"]
// // console.log(cityPopulations);



// // Write a method that prints out every number from 1 to 100. 
// // function everyNumberFromOneToOneHundred() {
// //   var i = 1;
// //   while (i <= 100) {
// //     console.log(i);
// //     i ++;
// //   }
// // }
// // everyNumberFromOneToOneHundred();

// // Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).
// // function everyOtherNumber() {
// //   var i = 1;
// //   while (i <= 100 ) {
// //     console.log(i);
// //     i += 2;
// //   } 
// // }
// // everyOtherNumber();

// // Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.
// // function fiftyFive(array) {
// //   var i = 0;
// //   array.forEach(function(number) {
// //     if (number === 55) {
// //       i++;
// //     }
// //   });
// //   console.log(i);
// // }
// // fiftyFive([55, 55, 55, 10, 29, 55, 109, 43, 55]);

// // Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// // For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

// // function awesomeSauce(array) {
// //   var array2 = array;
// //   var i = 0;
// //   while (i <= array.length) {
// //     array2[i + 1] = "awesomesauce";
// //     i++;
// //   }
// //   console.log(array2);
// // }

// // awesomeSauce(['a', 'b', 'c', 'd', 'e']);

// // BRIAN DEMO //
// function awesomeSauced(strings) {
//   var array = [];
//   var i = 0;
//   while (i < strings.length) {
//     array.push(strings[i]);
//     array.push("awesomesauce");
//     i++;
//   }
//   return array;
// }
// // console.log(awesomeSauced(['a', 'b', 'c', 'd', 'e']));

// // Start with the hash: item_amounts = {chair: 5, table: 2}
// // Someone just bought two chairs. Change the hash such that the chair amount is 3.
// // The final result should be: {chair: 3, table: 2}

// // var itemAmounts = {chair: 5, table: 2};
// // itemAmounts["chair"] = 3; // this could also be itemAmounts.chair = 3
// // console.log(itemAmounts);

// // Start with the hash: item_amounts = {chair: 5, table: 2}
// // You received 7 desks to sell. Change the hash to include desks.
// // The final result should be: {chair: 5, table: 2, desk: 7}

// // var itemAmounts = {chair: 5, table: 2};
// // itemAmounts["desks"] = 7;
// // console.log(itemAmounts)

// // Write a method that accepts a number and returns its factorial.
// // For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// function factorial(number) {
//   var product = [];
//   for (var i = 1; i <= number; i++) {
//     product *= i;
//   }
//   return product;
// }
// factorial(5);

// // Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// // For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].


// // 1) Write a function that takes in an array of numbers and returns its sum.

function sum(numbers) {
  var sum = 0;
  numbers.forEach(function(number) {
    sum += number;
  });
  return sum;
}
// // console.log(sum([1, 2, 3]));

// // 2) Write a function that takes in an array of strings and returns the smallest string.

function smallest(strings) {
  var i = 0;
  var small = strings[0];
  while (i < strings.length) {
    if (strings[i].length < small.length ) {
      small = strings[i];
    }
    i++;
  }
  return small;
}
// // console.log(smallest(["hello", "goodbye", "why", "I", "noooooooo"]));

// // 3) Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.

// // function reverse(numbers) {
// //   var array = [];
// //   var i = 0;
// //   while (i < numbers.length) {
// //     array.push(numbers[-i ]);
// //   });
// //   return array; 
// // }
// // console.log(reverse([1, 2, 3]));

function reverse(numbers) {
  // var i = -1;
  var reverseArray = [];
  numbers.forEach(function(number) {
    reverseArray.unshift(number);
    // i -= 1;
  });
  return reverseArray;
}
// // // console.log(reverse([1, 2, 3]));

// // // 4) Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.


// // // 5) Write a function that takes in an array of strings and joins them together to make a single string separated by commas.

function combine(strings) {
  var newString = "";
  strings.forEach(function(string) {
    newString = `${newString}${string}, `;
  });
  return newString;
}
// // // console.log(combine(["Hello", "Goodbye", "Where"]));
// // // 6) Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).

function product(numbers) {
  var product = 1;
  numbers.forEach(function(number) {
    product *= number;
  });
  return product;
}
// console.log(product([1, 2, 3, 4, 5]));

// // // 7) Write a function that takes in an array of numbers and returns the two smallest numbers.
// // // order the array of numbers
// // // return the first two numbers!

function smallestTwo(numbers) {
  var array = numbers.sort(function(a, b) {
    return a - b;
  });
  const smallest = array.slice(0, 2);
  return smallest;
}
// // // console.log(smallestTwo([0, 10, 2, 98, 56, 7, -1, -99]));

// // // 8) Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.

function zeroes(numbers) {
  var zero = [];
  numbers.forEach(function(number) {
    if (number === 0) {
      zero.push(number);
    }
  });
  return zero.length;
}
// // // console.log(zeroes([0, 1, 0, 2, 6, 6, 0, 12, 0, 0, 0, 0, 100, 20]));

// // // 9) Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.

function biggerThanTen(numbers) {
  var bigger = [];
  numbers.forEach(function(number) {
    if (number > 10) {
      bigger.push(number);
    }
  });
  return (bigger.length === numbers.length);
}
// console.log(biggerThanTen([11, 12, 98, 48, 15, 101]));

// 10) Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.

function countA(words) {
  var split = [];
  words.forEach(function(word) {
    split.push(word.split(""));
  });
  var letters = split.flat();
  var count = 0;
  letters.forEach(function(letter) {
    if (letter.toLowerCase() === "a") {
      count++
    }
  }); 
  return count;  
}

console.log(countA(["aaaa", "arkansas", "Alabama", "I really want to go to Alaska"]));