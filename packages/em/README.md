<div align="center">

![Sass Em](.github/logo.svg)

</div>

[![Version](https://flat.badgen.net/npm/v/@sass-collective/em)](https://www.npmjs.com/package/@sass-collective/em)
[![Download](https://flat.badgen.net/npm/dt/@sass-collective/em)](https://www.npmjs.com/package/@sass-collective/em)
[![Dependencies Status](https://david-dm.org/sass-collective/sass-collective/status.svg?style=flat-square&path=packages/em)](https://david-dm.org/sass-collective/sass-collective?path=packages/em)
[![License](https://flat.badgen.net/npm/license/@sass-collective/em)](https://www.npmjs.com/package/@sass-collective/em)

## Introduction

Sass function & mixin to convert pixel to em.

## Installation

```shell
npm install @sass-collective/em
```

## Usage

> **TIP:** you can declare each value without `px` unit, but be careful, if you use unit, only `px` will be allowed!

```scss
@use "@sass-collective/em";

.foo {
    font-size: em.convert(16px, 16px);
    // font-size: 1em;
    
    margin: em.convert(20px 30px, 16px);
    // margin: 1.25em 1.875em;
    
    border: em.convert(1px solid darkcyan, 16px);
    // border: 0.0625em solid darkcyan;
    
    box-shadow: em.convert(0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75), 16px);
    // box-shadow: 0 0 0.625em 0.3125em rgba(0, 139, 139, 0.75), inset 0 0 0.625em 0.3125em rgba(0, 139, 139, 0.75);
    // Use parentheses for declare comma separated values list.
}

.bar {
    @include em.convert(font-size, 16px, 16px);
    // font-size: 1em;
    
    @include em.convert(margin, 20px 30px, 16px);
    // margin: 1.25em 1.875em;
    
    @include em.convert(border, 1px solid darkcyan, 16px);
    // border: 0.0625em solid darkcyan;
    
    @include em.convert(box-shadow, (0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75)), 16px);
    // box-shadow: 0 0 0.625em 0.3125em rgba(0, 139, 139, 0.75), inset 0 0 0.625em 0.3125em rgba(0, 139, 139, 0.75);
    // Use parentheses for declare comma separated values list.
}
```

> **NOTE:** you can use the legacy `@import` with dedicated prefix, ex. `sass-em-convert()`.

## Namespace

```scss
@use "@sass-collective/em" as foo;

.foo {
    font-size: foo.convert(16px, 16px);
    // font-size: 1em;
}

.bar {
    @include foo.convert(font-size, 16px, 16px);
    // font-size: 1em;
}
```

### Fallback name

You can use the fallback name if your namespace is not enough explicit for what ever reason!

```scss
@use "@sass-collective/em" as foo;

.foo {
    font-size: foo.em(16px, 16px);
    // font-size: 1em;
}

.bar {
    @include foo.em(font-size, 16px, 16px);
    // font-size: 1em;
}
```

## API

### Functions

| Function              | Description                            |
|-----------------------|----------------------------------------|
| `convert($values...)` | Convert `px` unit to `em`.             |
| `em($values...)`      | Fallback name of `convert()` function. |

### Mixins

| Mixin                                              | Description                                                                       |
|----------------------------------------------------|-----------------------------------------------------------------------------------|
| `convert($property, $value, $context, $important)` | Create property with conversion of `px` unit to `em`, with optional `!important`. |
| `em($property, $value, $context, $important)`      | Fallback name to `convert()` mixin.                                               |
