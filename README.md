# home-book-shared

## Table of Contents

- [Installation](#Installation)
- [Build](#Build)
- [Start](#Start)
- [Publish](#Publish)
- [Instruction](#Instruction)
- [Related Packages](#Related-Packages)

## Installation

Recommend you to use this version latest Node.

1. Node_Modules

```
npm install or npm i
```

2. Commit lint required global for commit

```
npm install -g @commitlint/cli @commitlint/config-conventional
```

## Build

```
npm run build-library
```

## Start

```
npm run start
```

After run local environment you can use some component in sample/index.tsx.

## Publish

Publish requires authorize users before publish.

Before publish you need to bump up version in package.json.

```
npm publish
```

## Instruction

Before commit are call actions:

- branch name lint
- stylelint
- eslint ts
- eslint tsx
- prettier
- commit syntax

If you need skip linters, after the commit message you have to put command:

```
git commit -m "<message>" --no-verify
```
