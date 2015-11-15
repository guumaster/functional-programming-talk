#### In Node 

```js
fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  
  console.log(data);
});

```

#### Array methods

```js
var data = [1, 2, 3, 4, 5];
var result = data.reduce(function(a, b){ 
  return a + b;
}, 0);

console.log( result ); // 15

// Spoiler alert: Lots more of this to come
```
