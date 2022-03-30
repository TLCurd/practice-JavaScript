var fruits = ['apple', 'banana', 'pear', 'honeydew'];

// while loop
var i = 0

while (i < fruits.length) {
  console.log(i);
  i += 1; 
  // preferred method would be i++ which is the same as i
}

// for loop
for (var i =0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// forEach loop

fruits.forEach(function(fruit) {
  console.log('hello');
});