#### No Side Effects

```js
var a = 0;

var incA = function() {
  a = a+1; // state changing? (╯°□°）╯︵ ┻━┻ 
  return a;
}

var testA = function() {
  if (a<3) {  // also side effect, reading from environment
    return null;
  }
  return a;
}

console.log( incA(), incA() ); // 1, 2
console.log( testA() ); // null
```
```js
function seenEverywhere() {
  alert('This is also a side effect');
}
console.log( seenEverywhere() );

```
