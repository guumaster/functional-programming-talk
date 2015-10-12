# Functional Programming

## Agenda

 * What is it? Why use it?
 * Declarative vs Imperative
 * Is JavaScript a functional language?
 * Super-fast ES6 introduction
 * Functional features of JavaScript
 * Functional techniques in JavaScript
 * CODE!!!
 * What next?

----------


## What is it? Why use it?

* Some definitions
* Why to use a functional programming
* Features of a functional languages
* Differences with OOP

----------


### Some definitions

> Is a programming **style** that treats computation as the evaluation of mathematical functions and **avoids changing-state and mutable data**.  It is a **declarative programming style**, which means programming is done with expressions. -  [Wikipedia](https://en.wikipedia.org/wiki/Functional_programming)


Or: 
> Functional programming **emphasizes the use functions**. Its main purpose is to abstract control flow and operations on data with functions in order to avoid side effects and reduce mutation of state in your code.
>
> There is a small set of very important concepts—borrowed from mathematics—that form the backbone of all functional programming. 


----------

### Why to use a functional programming

> Functional programming isn’t the goal, the goal is to simplify complexity.


The only way we’ll be able to keep up with the exponentially increasing complexity will be to decrease the complexity of understanding programs. To maintain the goliath apps of tomorrow, we must learn to build more expressive code. We must learn to write programs that are easier to reason about, debug, create, analyze, and understand.

As programmers we constantly learn new tricks, and functional programming is just another bag of tricks.

 - Less code 
 - Fewer errors 
 - Better Testability
 - Favors concurrency (* for another talk)

----------


### Features of a functional language 

Functional programming requires that functions are first-class, which means that they are treated like any other values and can be passed as arguments to other functions or be returned as a result of a function. 

- **First Class functions**
	 Functions as values that can be stored, passed as arguments and created/returned  from functions.

- **Higher Order Functions**
	Functions that can accept functions as arguments and/or return a function.

- **No Side Effects**
	Function that does something other than returning a value.

- **Pure functions**
	Functions that has no side effects.

- **Referential Transparency**
	For a given sets of arguments, the same code should always output the same value, only by changing arguments can an output value be different.

- **Immutability**
	Inability for variables to change their value once created. All things created stay constant.

- **Currying / Partial Application**
	Ability of a function to return a new function until it receives all it’s arguments Calling a curried function only some of its arguments is called partial application.

- **Recursion**
	Iteration in functional languages is usually accomplished via recursion. Recursive functions invoke themselves, allowing an operation to be performed over and over until the base case is reached.

- **Tail Call Optimization**
	Ability to avoid allocation a new stack frame for a  function call. Most commonly is a tail-recursion, where a recursive function uses constant stack space


----------

###  Differences with OOP

 - Both have similar levels of expressive power and similar abilities to encapsulate programs into smaller parts that can be combined and recombined. The main difference is the relationship between data and operations on the data.

 - OOP excels at composing data. FP excels at composing logic.


**OOP**: 
 * Data and the operations upon it are tightly coupled 
 * An object owns its data and it owns the implementation of the operations on the data. 
 * Hides operations from other objects via its interfaces. 
 * **The central activity is composing new objects and extending existing objects with new methods**.

**FP**:
 * Data is only loosely coupled to functions.
 * You can write different operations on the same data structure
 * The central model for abstraction is the function, not the data structure. 
 * Functions hide their implementation
 * **Central activity in FP is writing new functions**.

[When FP? And when OOP?](http://raganwald.com/2013/04/08/functional-vs-OOP.html)


It’s important to know that JavaScript is as functional as it is object-oriented; and both of these are useful for implementing mid-to-large size applications. The good news is that functional programming and object-oriented programming are not mutually exclusive and can be used simultaneously. 

----------

## Declarative vs Imperative

**Imperative programming** is telling explicitly to the system **how** to do something step by step. **Declarative programming** is telling the system **what** you would like to happen, without instructing it how to do it. 

> Declarative programming is like describing a problem like a mathematician.  Imperative programming is like giving instructions to an idiot. -- *some random Scheme programmer*

Imperative programming uses statements that change a program's state
 
 Declarative programming is an umbrella term that includes a number of better-known programming paradigms.
 
Declarative programming discourages usage of variables in favor of function composition or pipelines. It has a more clear correspondence to mathematical logic.

We're all used to the imperative paradigm. It's what all of us have been taught while learning to code, and that's the main reason why this age-old style is still dominant in modern programming languages. However, as software projects become more and more complex, it is more important than ever to write safe, understandable and scalable code 


----------

## Is JavaScript a functional language?

- **First Class functions**: Yes 
- **Higher Order Functions**: Yes
- **No Side Effects**: yes (with caution)
- **Currying / Partial Application**: Yes
- **Recursion**:   Yes
- **Immutability**: no (with libraries)
- **Tail Call Optimization**: no (but soon)


----------

## Functional features of JavaScript

JavaScript allows a variety of different programming paradigms: OO, functional, procedural. 
Although is not a pure functional programming language, it allows us to program in a functional way. 


### Native Supports

First Class Functions
Higher Order Functions
Anonymous functions
Closures

### No direct supports (with libraries and discipline)

Pure functions
Immutability
No Side Effects
Currying / Partial application
Tail-call elimination (ES7?)
Pattern matching
Lazy Evaluation

----------

## Super-fast ES6 introduction

* let/cosnt
* Arrow function
* Rest parameters
* Object literals

----------


## Basic Functional techniques 

 * Reduce, map, filter
 * Currying
 * Partial Application
 * Composition



## What next? 

- Check different helper libraries in JavaScript: Lodash, Ramda, Allong.es,  
- Stop writing for/loops in favor of map/filter/reduce.
- Find and refactor that function you ***know*** has a side effect.
- Try a pure functional language. Maybe Haskell?













----------

# Glossary

- **Closure**
	an expression (typically a function) that can have free variables together with an environment that binds those variables (that "closes" the expression).

- **Currying**
	The process of converting a function with multiple arity into the same function with an arity of one.

- **Free variable**
	variables used in a function that are not local variables nor parameters of that function.

- **Higher Order function**
	A function which takes a function as an argument and/or returns a function.

- **Partial Application**
	The process of getting a function with lesser arity compared to the original function by fixing the number of arguments.

- **Point free**
	A function whose definition does not include information regarding its arguments.

- **Pure functions**
	a function that doesn't depend on and doesn't modify the states of variables out of its scope. It always outputs the same result given same input. Its execution doesn't depend on the state of the system.

- **Persistent Data Structures**
	a data structure that always preserves the previous version of itself when it is modified. Such data structures are effectively immutable, as their operations do not (visibly) update the structure in-place, but instead always yield a new updated structure.

- **Recursion**
	Iteration in functional languages is usually accomplished via recursion. Recursive functions invoke themselves, allowing an operation to be performed over and over until the base case is reached.

- **Referential transparency**
	An expression that can be replaced with its value without changing the behavior of the program is said to be referential transparent.

- **Tail-call elimination**
	when a function returns the result of calling itself, the language doesn’t actually perform another function call, it turns the whole thing into a loop for you.



# Bibliography

https://www.fpcomplete.com/blog/2012/04/the-downfall-of-imperative-programming

http://es.slideshare.net/Ssrdjan/functional-javascript-37401024

http://raganwald.com/2013/04/08/functional-vs-OOP.html

http://developer.telerik.com/featured/practical-functional-javascript-ramda/

https://speakerdeck.com/rauschma/using-ecmascript-6-today

https://github.com/MostlyAdequate/mostly-adequate-guide


[Functional Javascript](http://blog.fogus.me/2013/03/20/fun-js/) by [@fogus](http://twitter.com/fogus)
[Javascript Allongé](https://leanpub.com/javascript-allonge) by [@raganwald](http://twitter.com/raganwald)
[Functional Programming for the Object-Oriented Programmer](https://leanpub.com/fp-oo)






map/reduce/filter
Referential transparency
Pure functions
Higher order functions
Partial application / currying
Immutable
Persistent data structure
Point Free 
Lazy sequence
Side effects
Tail recursion

first class functions
higher order functions
purity
immutability (not today)
composition
partial application & currying
recursion 



> There is a small set of very important concepts—borrowed from mathematics that form the backbone of all functional programming.

----

"I write code in a functional style out of a desire for self-preservation: I have no idea how to test stateful, imperative code." - Daniel Spiewak

----


list processing is a fundamental characteristic of functional programming

- transform a list in another list
- reduce a list to a value
- when processing a list:
  - transform the head of list
  - recursively call itself with the rest of the list

------

let mult = function(n, m) {
 if (m === 0) return 0;
 if (m === 1) return n;

 return mult(n, (m-1)) + n;
}

mult(3, 2) =>  mult(3, (2-1)) + 3 => mult(3, 1) + 3 => 3 + 3 => 6


-----


Imperative programs will always be vulnerable to data races because they contain mutable variables.


Did you notice that in the definition of a data race there's always talk of mutation? Any number of threads may read a memory location without synchronization but if even one of them mutates it, you have a race. That's why the majority of imperative programmers with their mutable variables will always be reluctant to embrace concurrent programming. And that is the downfall of imperative programming.



There are no data races in purely functional languages because they don't have mutable variables.

All data is immutable. The most popular language for parallel and distributed programming is Erlang, a functional language.

