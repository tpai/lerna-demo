# Lerna Demo

Mono javascript projects

## Prerequisites

Install dependencies among all packages

```
yarn
```

Run build script for all mono repos

```
yarn build
```

## Usage

Run Demo#1 - Import CommonJS and ES module

```sh
node packages/node-app/index.js

# It should output:
#   This is core function.
#   This is ES module.
#   This is CommonJS module.
```

Run Demo#2 - Shared components (create-react-app)

```sh
# webpack watch
cd packages/shared-components && yarn start

# run web app
cd packages/react-app && yarn start
```

Visit http://localhost:3000/ to see the demo.
