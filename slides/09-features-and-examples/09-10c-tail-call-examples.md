#### Tail call optimization examples

```js
// cannot be optimized
const factorial = x => {
    if (x <= 0) return 1
    return x * factorial(x-1) // (A) not tail call
}
```
```js
// can be optimized
const factorial = n => doFact(n, 1)

const doFact = (n, total) => {
  if( n <= 0 ) return 1
  if( n <= 1 ) return total
  return doFact(n-1, n*total) // (B) tail call
}
``` 

Note: 

