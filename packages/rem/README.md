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

> **TIP:** you can declare each value without `px` unit, but be careful, if you use unit, only `px` will be allowed!

```scss
@use "@sass-collective/rem";

.foo {
    font-size: rem.convert(16);
    // font-size: 1rem;
    margin: rem.convert(20 30);
    // margin: 1.25rem 1.875rem;
    border: rem.convert(1px solid darkcyan);
    // border: 0.0625rem solid darkcyan;
}

.bar {
    @include rem.convert(font-size, 16);
    // font-size: 1rem;
    @include rem.convert(margin, 20 30);
    // margin: 1.25rem 1.875rem;
    @include rem.convert(border, 1px solid darkcyan);
    // border: 0.0625rem solid darkcyan;
}
```

> **NOTE:** you can use the legacy `@import` with dedicated prefix, ex. `sass-rem-convert()`.

## Namespace

```scss
@use "@sass-collective/rem" as foo;

.foo {
    font-size: foo.convert(16);
    // font-size: 1rem;
}

.bar {
    @include foo.convert(font-size, 16);
    // font-size: 1rem;
}
```

### Fallback name

You can use the fallback name if your namespace is not enough explicit for what ever reason!

```scss
@use "@sass-collective/rem" as foo;

.foo {
    font-size: foo.rem(16);
    // font-size: 1rem;
}

.bar {
    @include foo.rem(font-size, 16);
    // font-size: 1rem;
}
```

## Options

### Baseline

```scss
@use "@sass-collective/rem" with (
    $baseline: 10px
);

html,
body {
    @include rem.baseline;
    // font-size: 62.5%;
}

.foo {
    font-size: rem.convert(16);
    // font-size: 1.6rem;
}

.bar {
    @include rem.convert(font-size, 16);
    // font-size: 1.6rem;
}
```

## API

### Options

| Option | Value |
| --- | --- |
| `$baseline` | `16px` |

### Functions

| Function | Description |
| --- | --- |
| `convert($value)` | Convert `px` unit to `rem`. |
| `rem($value)` | Fallback name to `convert()` function. |

### Mixins

| Mixin | Description |
| --- | --- |
| `convert($property, $value, $important)` | Create property with conversion of `px` unit to `rem` and optional `!important`. |
| `baseline($percentage)` | Automatically add the correct baseline based on the option. Default `$percentage` at `100%`. |
| `rem($property, $value, $important)` | Fallback name to `convert()` mixin. |
