#### Partial application

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

