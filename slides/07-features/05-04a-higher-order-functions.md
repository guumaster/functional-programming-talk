#### Higher Order Functions

> Functions that can accept functions as arguments and/or return a function

```js
document
    .getElementById("clicker")
    .addEventListener("click", () => {
      alert("you've clicked the clicker")
    });
```

```js
var addMood = (mood) => {
  return (str) => `${str}, ${mood}`;
  };
};

var happy = addMood(" and I'm happy!");
var sad = addMood(" and I'm sad");

console.log( happy('My name is Earl') ); // My name is Earl, and I'm happy
console.log( sad('I have to work') );    // I have to work, and I'm sad
```

 
Note: 

Higher-order functions are closely related to first-class functions, in that higher-order functions and first-class functions both allow functions as arguments and results of other functions. 
