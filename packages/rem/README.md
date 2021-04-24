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
```

> **NOTE:** you can use the legacy `@import` with dedicated prefix, ex. `sass-rem-convert()` instead of `rem.convert()`.

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

### Custom configuration

```scss
@use "@sass-collective/rem" with (
    $baseline: 10px
);
```

## Example

```scss
@use "@sass-collective/rem";

// Function

.foo {
    font-size: rem.convert(16);
    margin: rem.convert(20 30);

    @include rem.convert(padding, 20 30);
}
```

### Result

```css
.foo {
    font-size: 1rem;
    margin: 1.25rem 1.875rem;
    padding: 1.25rem 1.875rem;
}
```
