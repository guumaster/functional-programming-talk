#### Higher Order Functions

```js
document
    .getElementById("clicker")
    .addEventListener("click", () => alert("you've clicked the clicker"))
```

```js
const addMood = (mood) => (str) => `${str}, ${mood}`

const happy = addMood(" and I'm happy!")
const sad = addMood(" and I'm sad")

console.log(happy('My name is Earl')) // My name is Earl, and I'm happy
console.log(sad('I have to work'))    // I have to work, and I'm sad
```
