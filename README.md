# Lerna Demo

This is demo for managing Javascript projects with Lerna.

## Prerequisites

Install Lerna

```
npm i -g lerna
```

Install dependencies among all projects

```
lerna bootstrap
```

Build packages

```
lerna build
```

## Usage

Run Demo

```
node package/core/index.js

/* It should output:
This is core function.
This is ES module.
This is CommonJS module.
*/
```
