# pipe-compose

ES6 pipe and compose in JavScript. Inspired by [this Mediu post](https://medium.com/@dtipson/creating-an-es6ish-compose-in-javascript-ac580b95104a).

## What is it?

To paraphrase the Medium post, image you want to pipe the output of n-functions together. You'll endup with something like:

```js
reverse(get3Chars(uppercase('the-argument')));
// EHT
```

In this example, you first `uppercase` to get `THE-ARGUMENT`, then you `get3Chars` and have `THE` and finally you `reverse` it to get `EHT`. 

With `pipe` you can accomplish the same thing using:

```js
pipe('the-argument', uppercase, get3Chars, reverse);
```

It helps to read this similar to bash's pipe `|`:

```bash
echo 'the-argument' | uppercase | get3Chars | reverse;
```

`compose` is the reverse of `pipe`. For example these two would return the same result.

```js
pipe('the-argument', uppercase, get3Chars, reverse);
compose('the-argument', reverse, get3Chars, uppercase);
```

## How to use it

### Installing NPM package

Install from npm:

```bash
npm install pipe-compose
```

and use it normally:

```js
import { pipe, compose } from 'pipe-compose';
```

### Get the source code

`pipe` and `compose` are each one-liner, so you can just copy/paste them into your application:

```js
const pipe = (x, ...fns) => fns.reduce((v, f) => f(v), x);
const compose = (x, ...fns) => fns.reduceRight((v, f) => f(v), x);
```
