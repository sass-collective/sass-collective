![Sass Breakpoint](.github/banner.png)

[![Version](https://flat.badgen.net/npm/v/@sass-collective/breakpoint)](https://www.npmjs.com/package/@sass-collective/breakpoint)
[![Downloads](https://flat.badgen.net/npm/dt/@sass-collective/breakpoint)](https://www.npmjs.com/package/@sass-collective/breakpoint)
[![Dependencies Status](https://david-dm.org/sass-collective/sass-collective/status.svg?style=flat-square&path=packages/breakpoint)](https://david-dm.org/sass-collective/sass-collective?path=packages/breakpoint)
[![License](https://flat.badgen.net/github/license/sass-collective/sass-collective)](https://flat.badgen.net/github/license/sass-collective/sass-collective)

## Introduction

Generate CSS breakpoint.

## Install

    npm install @sass-collective/breakpoint --save

## Usage

### Mixin

```scss
styles($min-width, $max-width, $root-selector);
```

### Variables

| Names              | Values    | Descriptions                                                         |
| ------------------ | --------- | -------------------------------------------------------------------- |
| ``$strict``        | true      | Subtract ``1px`` on ``max-width`` value, ``960px`` come ``959px``    |
| ``$very-small``    | 320       | iPhone in portrait mode                                              |
| ``$small``         | 480       | iPhone in landscape mode                                             |
| ``$medium``        | 768       | iPad in portrait mode                                                |
| ``$large``         | 960       | Desktop                                                              |
| ``$wide``          | 1200      | Wide screen                                                          |

### Update default variables in global

```scss
@use "@sass-collective/breakpoint" with (
    $strict: false,
    $large: 960
);
```

### Module System

```scss
@use "@sass-collective/breakpoint";

// Mixin

body {
    // Min width
    @include breakpoint.styles(960) {
        font-size: 10px;
    }

    // Max width
    @include breakpoint.styles($max-width: 960) {
        font-size: 10px;
    }

    // Between
    @include breakpoint.styles(480, 960) {
        font-size: 10px;
    }

    // Parent class or ID
    @include breakpoint.styles(480, $root-selector: ".class") {
        font-size: 10px;
    }
}
```

### Legacy @import

```scss
@import "@sass-collective/breakpoint";

// Mixin

body {
    // Min width
    @include sass-breakpoint-styles(960) {
        font-size: 10px;
    }

    // Max width
    @include sass-breakpoint-styles($max-width: 960) {
        font-size: 10px;
    }

    // Between
    @include sass-breakpoint-styles(480, 960) {
        font-size: 10px;
    }

    // Parent class or ID
    @include sass-breakpoint-styles(480, $root-selector: ".class") {
        font-size: 10px;
    }
}
```

### CSS

```css
/* Min width */
@media all and (min-width: 960px) {
    body {
        font-size: 10px;
    }
}

/* Max width */
@media all and (max-width: 959px) {
    body {
        font-size: 10px;
    }
}

/* Between */
@media all and (min-width: 480px) and (max-width: 959px) {
    body {
        font-size: 10px;
    }
}

/* Parent class or ID */
@media all and (min-width: 480px) {
    .class body {
        font-size: 10px;
    }
}
```
