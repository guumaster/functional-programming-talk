#### Currying

```js
const name = function (last) {
  return function (first) { 
    return last + ', ' + first
  }
}

// the same function
const name = last => first => `${last}, ${first}`

name('Curry')('Haskell') // Curry, Haskell
name('Norris')('Chuck')  // Norris, Chuck
```

