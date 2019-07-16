<h1 align="center">@k88/pipe-compose</h1>
<p align="center">ES6-like pipe, compose, p-pipe, and p-compose in JavaScript, inspired by <a href="https://medium.com/@dtipson/creating-an-es6ish-compose-in-javascript-ac580b95104a" target="_blank">this Medium post</a>.</p>

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

This library exports 6 functions: `pipe`, `compose`, `cPipe`, `cCompose`, `pPipe`, and `pCompose`.

### Pipe and Compose

To paraphrase the Medium post, image you want to pipe the output of n-functions together. You'll end up with something like:

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

### cPipe and cCompose

These are composable versions of `pipe` and `compose`, i.e.:

```js
const textModifier = cPipe(uppercase, get3Chars, reverse);

textModifier('the-argument');
// EHT

textModifier('another-argument');
// ONA
```

### pPipe and pCompose

There are also composable promise version of the pipe and compose.

```js
const calc = pPipe(add1, multiply2, divide3);
await calc(2);
// 2
```

In this example, we are creating a calculation function that takes in an number, and performs basic math operation on it. In this case, we are passing `2` and first adding 1 to it (giving us 3), then multiplying by 2 (giving us 6) and finally dividing by 3 (giving us back 2).

As before, `pCompose` would work in the reverse:

```js
const calc = pCompose(add1, multiply2, divide3);
await calc(6);
// 5
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

All of these auxiliary functions are one-liner,  so you can also just copy/paste them into your application:

```js
const pipe = (x, ...fns) => fns.reduce((v, f) => f(v), x);
const compose = (x, ...fns) => fns.reduceRight((v, f) => f(v), x);

const cPipe = (...fns) => (x) => => fns.reduce((v, f) => f(v), x);
const cCompose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

const pPipe = (...fns) => async (x) => fns.reduce(async (v, f) => f(await v), x);
const pCompose = (...fns) => async (x) => fns.reduceRight(async (v, f) => f(await v), x);
```
