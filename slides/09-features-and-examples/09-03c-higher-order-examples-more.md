#### In Node 

```js
fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err
  console.log(data)
})
```

#### Array methods

```js
const data = [1, 2, 3, 4, 5]
const reducerFn = (a, b) => a + b
const result = data.reduce(reducerFn, 0)

console.log(result) // 15
```
