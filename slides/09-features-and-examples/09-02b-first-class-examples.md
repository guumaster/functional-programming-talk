$center: false$
## First class functions

> Functions as values that can be stored, passed as arguments and created/returned from functions.

```js
// a function expression stored in a variable
let double = (a) => a*2;

console.log(double(3)); // 6
```

```js
// a function as a returned value
let giveMeFun = () => (a) => a;

let sameVal = giveMeFun();

sameVal(1); // 1
sameVal(2); // 2
```



