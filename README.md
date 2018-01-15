# Mixin Builder
A simple utility to append properties and methods from mixin classes onto a main class. This will likely be made obsolete once the ES7 decorators specification is finalized.

## Usage

```js
// add mixins to a class
class MyClass extends self.using(mixin1, mixin2, ..)
{
  // class methods here
}

// add mixins to a class which inherits from a base class
class MyClass extends base(BaseClass).using(mixin1, mixin2, ..)
{
  // class methods here
}
```

## Creating a Mixin Class
A mixin is a function which accepts a class and returns a class which extends that class.

```js
// standard function
let mixin = (superclass) => class extends superclass
{
  // mixin methods here
}

// ES6 module
export default (superclass) => class extends superclass
{
  // mixin methods here
}
```
