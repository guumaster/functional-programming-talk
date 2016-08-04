#### Referential transparency

```js
const mult = (a, b) => a * b

const result = mult(2, 3) + mult(4, 5)

const result1 = 6 + mult(4, 5)

const result2 = 6 + 20

// => result === result1 === result2
```
