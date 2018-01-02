# Lerna Demo

This is demo for managing Javascript projects with Lerna.

## Prerequisites

Install Lerna

```
npm i -g lerna
```

Install dependencies among all packages

```
lerna bootstrap
```

Build distribution files

```
lerna run build
```

## Usage

Run Demo#1 - Import CommonJS and ES module

```
node package/core/index.js

/* It should output:
This is core function.
This is ES module.
This is CommonJS module.
*/
```

Run Demo#2 - Shared components (create-react-app)

```
// webpack watch
cd packages/shared-components \
yarn start

// run web app
cd packages/react-app \
yarn start
```

Run Demo#3 - Shared components (next.js)

```
// webpack watch
cd packages/shared-components \
yarn start

// run web app
cd packages/nextjs-app \
yarn start
```
