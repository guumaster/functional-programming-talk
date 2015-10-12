#### Immutability

> Inability for variables to change their value once created. All things created stay constant.

```js
// in javascript strings are immutable
var str = 'You can\'t change this';
var modStr = str.replace('You can\'t', 'I did'); 

console.log(str); // "You can't change this."
console.log(modStr); // "I did change this."

// other structres are mutable
var arr = [];
var v2 = arr.push(2); 

console.log(v2); // true .... why JavaScript? why?!

var sentence = ['please', 'don\'t', 'touch', 'me', 'javascipt'];
sentence.splice(0, 3, 'oh', 'you\'ve', 'touched' );
console.log(sentence);  // Array [ "oh", "you've", "touched", "me", "javascipt" ]
```

Note: 
