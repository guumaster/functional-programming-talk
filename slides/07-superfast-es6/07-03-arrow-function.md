#### arrow function

```js
// in ES6
let idem = a => a
let odds  = evens.map(v => v + 1)
let pairs = evens.map(v => ({ even: v, odd: v + 1 }))
let nums  = evens.map((v, i) => v + i)
```

```js
// in ES5
var idem = function(a) { return a }
var odds  = evens.map(function (v) { return v + 1 }) 
var pairs = evens.map(function (v) { return { even: v, odd: v + 1 } })
var nums = evens.map(function (v, i) { return v + i })
```
