<div align="center">

![Sass Strip Unit](.github/logo.svg)

</div>

[![Version](https://flat.badgen.net/npm/v/@sass-collective/strip-unit)](https://www.npmjs.com/package/@sass-collective/strip-unit)
[![Downloads](https://flat.badgen.net/npm/dt/@sass-collective/strip-unit)](https://www.npmjs.com/package/@sass-collective/strip-unit)
[![License](https://flat.badgen.net/github/license/sass-collective/sass-collective)](https://flat.badgen.net/github/license/sass-collective/sass-collective)

## Introduction

Strip unit on CSS value.

## Installing

```shell
npm install @sass-collective/strip-unit
```

## Usage

```scss
@use "@sass-collective/strip-unit";
```

## API

### Sass functions

| Function        | Description                    |
|-----------------|--------------------------------|
| `strip($value)` | Return value without the unit. |

#### Strip unit value with `strip-unit.strip()`

The following Sass will produce:

```scss
@use "@sass-collective/strip-unit";

$value: strip-unit.strip(100px);
// 100
```
