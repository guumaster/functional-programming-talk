#### Immutability

```js
// in javascript strings are immutable
const str = 'You can\'t change this'
const modStr = str.replace('You can\'t', 'I did')
console.log(str) // "You can't change this."
console.log(modStr) // "I did change this."
```
```js
// other structres are mutable
const arr = []
const v2 = arr.push(2)
console.log(v2) // 1 .... why JavaScript? why?!
```
```js
const sentence = ['please', 'don\'t', 'touch', 'me', 'javascipt']
sentence.splice(0, 3, 'oh', 'you\'ve', 'touched' )
console.log(sentence)  // Array [ "oh", "you've", "touched", "me", "javascipt" ]
```

Note: 
