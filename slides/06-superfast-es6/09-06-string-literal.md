#### String literals

```js
let name = "Jhon Snow";

console.log(`You know nothing, ${name}`);
```

```js
let customer = { name: "Foo" };
let card = { amount: 7, product: "Bar", unitprice: 42 };

let message = `Hello ${customer.name},
  want to buy ${card.amount} ${card.product} for
  a total of ${card.amount * card.unitprice} bucks?`;

console.log(message);
```
