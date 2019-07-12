<h1 align="center">@k88/pipe-compose</h1>
<p align="center">ES6 like pipe and compose in JavaScript, inspired by <a href="https://medium.com/@dtipson/creating-an-es6ish-compose-in-javascript-ac580b95104a" target="_blank">this Medium post</a>.</p>

<p align="center">
    <a href="https://travis-ci.com/ktalebian/pipe-compose">
        <img src="https://travis-ci.com/ktalebian/pipe-compose.svg?branch=master" title="Build Status" />
    </a>
    <a href="https://codecov.io/gh/ktalebian/pipe-compose">
        <img src="https://codecov.io/gh/ktalebian/pipe-compose/branch/master/graph/badge.svg" title="Code Coverage" />
    </a>
    <a href="https://www.npmjs.com/package/@k88/pipe-compose">
        <img src="https://img.shields.io/npm/v/@k88/pipe-compose.svg?style=square" title="npm" />
    </a>
    <a href="https://www.npmjs.com/package/@k88/pipe-compose">
        <img src="https://img.shields.io/npm/dt/@k88/pipe-compose.svg?style=square" title="npm" />
    </a>
    <a href="https://www.npmjs.com/package/@k88/pipe-compose?activeTab=dependents">
        <img src="https://badgen.net/npm/dependents/@k88/pipe-compose" title="Number of Dependencies" />
    </a>
    <a href="./LICENSE">
        <img src="https://img.shields.io/npm/l/@k88/pipe-compose.svg?style=square" title="License" />
    </a>
</p>

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

`compose` is the reverse of `pipe`. For example these two would return the same result:

```js
pipe('the-argument', uppercase, get3Chars, reverse);
compose('the-argument', reverse, get3Chars, uppercase);
```

## How to use it

### Installing NPM package

Install from npm:

```bash
npm install @k88/pipe-compose
```

and use it:

```js
import { pipe, compose } from '@k88/pipe-compose';
```

### Get the source code

`pipe` and `compose` are each one-liner, so you can also just copy/paste them into your application:

```js
const pipe = (x, ...fns) => fns.reduce((v, f) => f(v), x);
const compose = (x, ...fns) => fns.reduceRight((v, f) => f(v), x);
```
