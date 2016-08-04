#### Parameter handling

```js
function f (x, y = 7, z = 42) {
 return x + y + z
}
console.log(f(1)) // 50
```

```js
function f(x, y, ...a) {
 return (x + y) * a.length 
}
console.log(f(1, 2, "hello", true, 7)) // 9
```

```js
let params = [ "hello", true, 7 ]
let other = [ 1, 2, ...params ] // => [ 1, 2, "hello", true, 7 ]

console.log(f(1, 2, ...params)) // 9 
let str = "foo"
let chars = [ ...str ] // [ "f", "o", "o" ]
```
