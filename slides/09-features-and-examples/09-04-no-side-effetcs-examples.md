#### No Side Effects

```js
let a = 0
const incA = () => {
  a = a+1 // state changing?  (╯°□°）╯︵ ┻━┻ 
  return a
}
console.log(incA(), incA()) // 1, 2

const testA = () => (a < 3) ? null : a  // side effect: reading from environment
console.log(testA()) // null
```
```js
const usedEverywhere = () => alert('This is also a side effect')
console.log(usedEverywhere())
```
