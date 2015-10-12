#### Partial application

> Calling a curried function only some of its arguments is called partial application.

```js
var name = function (last) {
  return function (first) { 
    return last + ', ' + first;
  };
};

var partial = name('Norris');

partial('Chuck');  // Norris, Chuck
partial('Adam');  // Norris, Adam

```

