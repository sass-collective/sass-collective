<div align="center">

![Sass Breakpoint](.github/logo.svg)

</div>

[![Version](https://flat.badgen.net/npm/v/@sass-collective/breakpoint)](https://www.npmjs.com/package/@sass-collective/breakpoint)
[![Downloads](https://flat.badgen.net/npm/dt/@sass-collective/breakpoint)](https://www.npmjs.com/package/@sass-collective/breakpoint)
[![Dependencies Status](https://david-dm.org/sass-collective/sass-collective/status.svg?style=flat-square&path=packages/breakpoint)](https://david-dm.org/sass-collective/sass-collective?path=packages/breakpoint)
[![License](https://flat.badgen.net/github/license/sass-collective/sass-collective)](https://flat.badgen.net/github/license/sass-collective/sass-collective)

## Introduction

Easily manage your CSS breakpoint rules.

## Installation

```shell
npm install @sass-collective/breakpoint
```

## Screens

The default breakpoints are configured by common device resolutions.

| Name  | Value    |
|-------|----------|
| `xs`  | `360px`  |
| `sm`  | `480px`  |
| `md`  | `768px`  |
| `lg`  | `960px`  |
| `xl`  | `1200px` |
| `2xl` | `1400px` |

## Usage

```scss
@use "@sass-collective/breakpoint";

.foo {
    // min-width
    @include breakpoint.up(lg) {
        font-size: 10px;
    }

    // max-width
    @include breakpoint.down(lg) {
        font-size: 10px;
    }

    // min-width & max-width (with auto max-width)
    @include breakpoint.only(md) {
        font-size: 10px;
    }

    // min-width & max-width free
    @include breakpoint.between(md, xl) {
        font-size: 10px;
    }
}
```

### Result

```css
/* min-width */
@media (min-width: 960px) {
    .foo {
        font-size: 10px;
    }
}

/* max-width */
@media (max-width: 959px) {
    .foo {
        font-size: 10px;
    }
}

/* min-width & max-width (with auto max-width) */
@media (min-width: 768px) and (max-width: 959px) {
    .foo {
        font-size: 10px;
    }
}

/* min-width & max-width free */
@media (min-width: 768px) and (max-width: 1199px) {
    .foo {
        font-size: 10px;
    }
}
```

> **NOTE:** you can use the legacy `@import` with dedicated prefix, ex. `sass-breakpoint-styles()`.

## Customization

You can easily override default screens:

```scss
@use "@sass-collective/breakpoint" with (
    $screens: (
        "lg": 1024px
        // (xs: 320px, sm: 480px, md: 768px, lg: 1024px, xl: 1200px, "2xl": 1500px)
    )
);
```

### Extending default configuration

You can easily add a additional breakpoint rule:

```scss
@use "@sass-collective/breakpoint" with (
    $screens: (
        "3xl": 1600px
        // (xs: 320px, sm: 480px, md: 768px, lg: 960px, xl: 1200px, "2xl": 1500px, "3xl": 1600px)
    )
);
```

## API

### Options

| Variable                 | Default | Description                                                                                                   |
|--------------------------|---------|---------------------------------------------------------------------------------------------------------------|
| **DEPRECATED** `$strict` | `true`  | Subtract `1px` on `max-width` value, `960px` come `959px`. Available only with the deprecated `styles` mixin. |

### Functions

| Function            | Description                                                                           |
|---------------------|---------------------------------------------------------------------------------------|
| `get-value($value)` | Get value from the configured list. Ex. `@include breakpoint.get-value(lg); // 960px` |

### Mixins

| Mixin                                                           | Description                                                                                                                      |
|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| `up($value)`                                                    | Create media rule for minimum with only.                                                                                         |
| `down($value)`                                                  | Create media rule for maximum with only.                                                                                         |
| `only($value)`                                                  | Create media rule for between minimum and maximum widths, but the maximum will be automatically set with next value of `$value`. |
| `between($min, $max)`                                           | Create media rule for between minimum and maximum widths.                                                                        |
| **DEPRECATED** `styles($min-width, $max-width, $root-selector)` | Create breakpoint rule.                                                                                                          |
