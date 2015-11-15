#### Currying

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

