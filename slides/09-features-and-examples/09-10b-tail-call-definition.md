#### Tail call Optimization

> Ability to avoid allocation a new stack frame for a function call. Most commonly is a tail-recursion, where a recursive function uses constant stack space

Note: 

- **Tail-call elimination**
  when a function returns the result of calling itself, the language doesn’t actually perform another function call, it turns the whole thing into a loop for you.
