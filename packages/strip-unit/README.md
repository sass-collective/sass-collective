![Sass Strip Unit](.repo/banner.png)

[![Version](https://flat.badgen.net/npm/v/@sass-collective/strip-unit)](https://www.npmjs.com/package/@sass-collective/strip-unit)
[![Download](https://flat.badgen.net/npm/dt/@sass-collective/strip-unit)](https://www.npmjs.com/package/@sass-collective/strip-unit)
[![License](https://flat.badgen.net/npm/license/@sass-collective/strip-unit)](https://www.npmjs.com/package/@sass-collective/strip-unit)

## Introduction

Strip unit on CSS value.

## Install

    npm install @sass-collective/strip-unit --save

## Usage

### Function

```scss
strip-unit($values);
```

### Module System

```scss
@use "@sass-collective/strip-unit";

$value: strip-unit.strip-unit(100px);
// 100
```

### Legacy @import

```scss
@import "@sass-collective/strip-unit";

$value: sass-strip-unit(100px);
// 100
```
