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

## Example

```scss
@use "@sass-collective/em";

.foo {
    font-size: em.convert(16, 16);
    margin: em.convert(20 30, 16);

    @include em.convert(padding, 20 30, 16)
}
```

### Result

```css
.foo {
    font-size: 1em;
    margin: 1.25em 1.875em;
    padding: 1.25em 1.875em;
}
```
