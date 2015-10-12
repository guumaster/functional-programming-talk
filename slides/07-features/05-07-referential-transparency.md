#### Referential transparency

> For a given sets of arguments, the same code should always output the same value, only by changing arguments can an output value be different.

```js
var multiply = function(a, b) {
  return a * b;
}

console.log( multiply(2,3) === multiply(2,3) ); // true
console.log( multiply(2,3) === 6 ); // true
```

```js
let mult = function(n, m) {
 if (m === 0) return 0;
 if (m === 1) return n;

 return mult(n, (m-1)) + n;
}

```


Note: 

Referential transparency (RT) is a more formal way of defining a pure function.
 
Purity in this sense refers to the existence of a pure mapping between a function’s arguments and its return value.

A function that consistently yields the same result on the same input, it is said to be referentially transparent.
