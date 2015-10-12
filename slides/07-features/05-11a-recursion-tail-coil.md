#### Recursion

> Iteration in functional languages is usually accomplished via recursion. Recursive functions invoke themselves, allowing an operation to be performed over and over until the base case is reached.


#### Tail Call Optimization

> Ability to avoid allocation a new stack frame for a  function call. Most commonly is a tail-recursion, where a recursive function uses constant stack space


```js

   // cannot be optimized
   function factorial(x) {
        if (x <= 0) {
            return 1;
        } else {
            return x * factorial(x-1); // (A) not tail call
        }
    }

    // can be optimized
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

- **Tail-call elimination**
	when a function returns the result of calling itself, the language doesn’t actually perform another function call, it turns the whole thing into a loop for you.
