![Sass Strip Unit](.github/banner.png)

[![Version](https://flat.badgen.net/npm/v/@sass-collective/strip-unit)](https://www.npmjs.com/package/@sass-collective/strip-unit)
[![Downloads](https://flat.badgen.net/npm/dt/@sass-collective/strip-unit)](https://www.npmjs.com/package/@sass-collective/strip-unit)
[![Dependencies Status](https://david-dm.org/sass-collective/sass-collective/status.svg?style=flat-square&path=packages/strip-unit)](https://david-dm.org/sass-collective/sass-collective?path=packages/strip-unit)
[![License](https://flat.badgen.net/github/license/sass-collective/sass-collective)](https://flat.badgen.net/github/license/sass-collective/sass-collective)

## Introduction

Strip unit on CSS value.

## Install

    npm install @sass-collective/strip-unit --save

## Usage

```scss
@use "@sass-collective/strip-unit";

$value: strip-unit.strip-unit(100px);
// 100
```
> **NOTE:** you can use the legacy `@import` with dedicated prefix, ex. `sass-strip-unit()` instead of `strip-unit.strip-unit()`.
