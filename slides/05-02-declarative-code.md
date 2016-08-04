#### Declarative code

```js
let square = x => x * x
let sum = (a, b) => a + b

// with map/compose tools:
let sumOfSquares = compose(map(square), sum)

console.log(sumOfSquares([2, 3, 5]))
```

Note: 

