![Sass Rem](.github/banner.png)

[![Version](https://flat.badgen.net/npm/v/@sass-collective/rem)](https://www.npmjs.com/package/@sass-collective/rem)
[![Download](https://flat.badgen.net/npm/dt/@sass-collective/rem)](https://www.npmjs.com/package/@sass-collective/rem)
[![License](https://flat.badgen.net/npm/license/@sass-collective/rem)](https://www.npmjs.com/package/@sass-collective/rem)

## Introduction

Sass function & mixin to convert pixel to rem.

## Installation

```shell
npm install @sass-collective/rem
```

## Usage

```scss
@use "@sass-collective/rem";

.foo {
    font-size: rem.convert(16);
    // font-size: 1rem;
    margin: rem.convert(20 30);
    // margin: 1.25rem 1.875rem;
}

.bar {
    @include rem.convert(font-size, 16);
    // font-size: 1rem;
    @include rem.convert(margin, 20 30);
    // margin: 1.25rem 1.875rem;
}
```

> **NOTE:** you can use the legacy `@import` with dedicated prefix, ex. `sass-rem-convert()`.

### ...custom baseline

```scss
@use "@sass-collective/rem" with (
    $baseline: 10px
);
```

## API

### Functions

| Function | Description |
| --- | --- |
| `convert($value)` | Convert `px` unit to `rem`. |

### Mixins

| Mixin | Description |
| --- | --- |
| `convert($property, $value, $important)` | Create property with conversion of `px` unit to `rem` and optional `!important`. |

### Options

| Option | Value |
| --- | --- |
| `$baseline` | `16px` |
