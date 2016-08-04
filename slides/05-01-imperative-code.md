#### Imperative code  

```js
function sumOfSquares(list) {
    let result = 0
    for (let i = 0; i < list.length; i++) {
        result += square(list[i])
    }
    return result
}

console.log(sumOfSquares([2, 3, 5]))
```
