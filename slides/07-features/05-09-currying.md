#### Currying

> Ability of a function to take one argument and return a new function until it receives all it’s arguments.

```js
let name = function (last) {
  return function (first) { 
    return last + ', ' + first;
  };
};

// the same function
let name = (last) => (first) => `${last}, ${first}`;

name('Curry')('Haskell'); // Curry, Haskell
name('Norris')('Chuck');  // Norris, Chuck

```

Note: 

 * Converts a multivariable function into a step-wise sequence of unary functions.

 * Higher-order functions enable currying,

 * a function is applied to its arguments one at a time,  with each application returning a new (higher-order) function that accepts the next argument.

 * Haskell Curry, who rediscovered a technique devised by another mathematician named Moses Schönfinkel. 
 
 
