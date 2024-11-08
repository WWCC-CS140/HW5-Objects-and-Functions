## Homework 5 - Objects and Functions

In this homework, you will complete several functions that will require you to
work with objects and functions.

### P1) Object inheritance: Prototypal
Create an GodzillaP1 class that inherits from MonsterP1.
Use prototypal inheritance.
The GodzillaP1 constructor should accept a single parameter, name and store this on the newly created object.

You do not need to write any behavior or logic, just make sure that all instances of GodzillaP1 are prototypically inheritted from MonsterP1.

> Hint: Object.create()

Example code:

```
var player1 = GodzillaP1('Reptar');
player1.name;          // 'Reptar'
player1.roar();        // 'Reptar ROOOOOOOARS
player1.destroyCity(); // 'City successfully destroyed'
```

### P2) Object inheritance: Pseudo Classical
Create an GodzillaP2 class that inherits from MonsterP2.
Use classical inheritance.
The GodzillaP2 constructor should accept a single parameter, name and store this on the newly created object.

You do not need to write any behavior or logic, just make sure that all instances of GodzillaP2 are classically inheritted from Monster.

> Hint: GodzillaP2.prototype

Example code:

```
var player1 = new GodzillaP2('Reptar');
player1.name;          // 'Reptar'
player1.roar();        // 'Reptar ROOOOOOOARS
player1.destroyCity(); // 'City successfully destroyed'
```

### P3) Dynamic function parameter length
Write a program that sums all the arguments.
If there are no arguments, zero should be returned.

Sample code:

```
p3(1, 3, 5, 7); // returns 16
p3(); // returns 0;
```

### P4) Function invoke counter
Write a program that creates a counter function.
This function, when invoked, should return the number of times the function has been invoked.

Sample code:

```
var counter = p4();
counter(); // returns 1
counter(); // returns 2
counter(); // returns 3
```

### P5) Accumulator function
Write a program that creates a function that keeps a running sum of the parameters from each invocation.

Sample code:

```
var accumulator = p5();
accumulator(10); // returns 10
accumulator(5);  // returns 15
accumulator(-3); // returns 12
```