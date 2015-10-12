#### Recursive examples

```js
   function factorial(x) {
        if (x <= 0) {
            return 1;
        } else {
            return x * factorial(x-1); // (A) not tail call
        }
    }
```
```js
    function factorial(n) {
        return facRec(n, 1);
    }
    function facRec(x, acc) {
        if (x <= 1) {
            return acc;
        } else {
            return facRec(x-1, x*acc); // (A) tail call
        }
    }
``` 

Note: 

