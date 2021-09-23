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

| Name | Value |
| --- | --- |
| `xs` | `360px` |
| `sm` | `480px` |
| `md` | `768px` |
| `lg` | `960px` |
| `xl` | `1200px` |
| `2xl` | `1500px` |

## Usage

```scss
@use "@sass-collective/breakpoint";

.foo {
    // min-width
    @include breakpoint.styles(lg) {
        font-size: 10px;
    }

    // max-width
    @include breakpoint.styles($max-width: lg) {
        font-size: 10px;
    }

    // min-width & max-width
    @include breakpoint.styles(sm, lg) {
        font-size: 10px;
    }

    // root selector
    @include breakpoint.styles(sm, $root-selector: ".bar") {
        font-size: 10px;
    }
}
```

### Result

```css
/* min-width */
@media all and (min-width: 960px) {
    .foo {
        font-size: 10px;
    }
}

/* max-width */
@media all and (max-width: 959px) {
    .foo {
        font-size: 10px;
    }
}

/* min-width & max-width */
@media all and (min-width: 480px) and (max-width: 959px) {
    .foo {
        font-size: 10px;
    }
}

/* root selector */
@media all and (min-width: 480px) {
    .bar .foo {
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
        lg: 1024px
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

| Variable | Default | Description |
| --- | --- | --- |
| `$strict` | `true` | Subtract `1px` on `max-width` value, `960px` come `959px` |

### Mixins

| Mixin | Description |
| --- | --- |
| `styles($min-width, $max-width, $root-selector)` | Create breakpoint rule. |
