![Sass Em](.github/banner.png)

[![Version](https://flat.badgen.net/npm/v/@sass-collective/em)](https://www.npmjs.com/package/@sass-collective/em)
[![Download](https://flat.badgen.net/npm/dt/@sass-collective/em)](https://www.npmjs.com/package/@sass-collective/em)
[![License](https://flat.badgen.net/npm/license/@sass-collective/em)](https://www.npmjs.com/package/@sass-collective/em)

## Introduction

Sass function & mixin to convert pixel to em.

## Installation

```shell
npm install @sass-collective/em
```

## Usage

```scss
@use "@sass-collective/em";

.foo {
    font-size: em.convert(16, 16);
    // font-size: 1em;
    margin: em.convert(20 30, 16);
    // margin: 1.25em 1.875em;
}

.bar {
    @include em.convert(font-size, 16, 16);
    // font-size: 1em;
    @include em.convert(margin, 20 30, 16);
    // margin: 1.25em 1.875em;
}
```

> **NOTE:** you can use the legacy `@import` with dedicated prefix, ex. `sass-em-convert()`.

## API

### Functions

| Function | Description |
| --- | --- |
| `convert($value, $context)` | Convert `px` unit to `em`, with optional context. |

### Mixins

| Mixin | Description |
| --- | --- |
| `convert($property, $value, $context, $important)` | Create property with conversion of `px` unit to `em` and optional `!important`. |

