#### Object literals

```js
const x = 100
const y = 200
let obj = { x, y }
console.log(obj) // { x: 100, y: 200 }
```

```js
let zap = () => 'bar'

let obj = { 
  check (a, b) { /* function code */ },
  foo: "bar",
  [ "prop_" + zap() ]: 42 
}

console.log(obj) // { "foo": "bar", "prop_bar": 42, "check": [Function] }
```

