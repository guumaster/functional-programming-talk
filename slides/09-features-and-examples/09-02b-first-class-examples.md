$center: false$
## First class functions

```js
// a function expression stored in a variable
const double = (a) => a * 2

console.log(double(3)) // 6
```

```js
// a function as a returned value
const createSomeFunction = () => (a) => (a * a) - a 

const sameVal = createSomeFunction()

sameVal(1) // 0
sameVal(2) // 2
sameVal(3) // 6
```



