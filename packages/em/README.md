![Sass Em](.github/banner.png)

[![Version](https://flat.badgen.net/npm/v/@sass-collective/em)](https://www.npmjs.com/package/@sass-collective/em)
[![Download](https://flat.badgen.net/npm/dt/@sass-collective/em)](https://www.npmjs.com/package/@sass-collective/em)
[![License](https://flat.badgen.net/npm/license/@sass-collective/em)](https://www.npmjs.com/package/@sass-collective/em)

## Introduction

Sass function & mixin to generate em value.

## Install

    npm install @sass-collective/em --save

## Sass Functions & Mixins

### Functions

| Function| Description |
| --- | --- |
| `convert($value, $context)` | Convert `px` value to `em` value with context calculation. |

### Mixins

| Mixin | Description |
| --- | --- |
| `convert($property, $value, $context, $important)` | Create new property with conversion of `px` value to `em` value. |

## Usage

```scss
@use "@sass-collective/em";

// Function

.foo {
    font-size: em.convert(16, 16);
    margin: em.convert(20 30, 16);

    @include em.convert(padding, 20 30, 16)
}
```

> **NOTE:** you can use the legacy `@import` with dedicated prefix, ex. `sass-em-convert()` instead of `em.convert()`.

### Result

```css
.foo {
    font-size: 1em;
    margin: 1.25em 1.875em;
    padding: 1.25em 1.875em;
}
```
