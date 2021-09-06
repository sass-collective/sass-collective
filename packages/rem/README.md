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
    font-size: rem.convert(16px);
    // font-size: 1rem;
    
    margin: rem.convert(20px 30px);
    // margin: 1.25rem 1.875rem;
    
    border: rem.convert(1px solid darkcyan);
    // border: 0.0625rem solid darkcyan;
    
    box-shadow: rem.convert(0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75));
    // box-shadow: 0 0 0.625rem 0.3125rem rgba(0, 139, 139, 0.75), inset 0 0 0.625rem 0.3125rem rgba(0, 139, 139, 0.75);
}

.bar {
    @include rem.convert(font-size, 16px);
    // font-size: 1rem;
    
    @include rem.convert(margin, 20px 30px);
    // margin: 1.25rem 1.875rem;
    
    @include rem.convert(border, 1px solid darkcyan);
    // border: 0.0625rem solid darkcyan;
    
    @include rem.convert(box-shadow, (0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75)));
    // box-shadow: 0 0 0.625rem 0.3125rem rgba(0, 139, 139, 0.75), inset 0 0 0.625rem 0.3125rem rgba(0, 139, 139, 0.75);
    // Use parentheses for declare comma separated values list.
}
```

> **NOTE:** you can use the legacy `@import` with dedicated prefix, ex. `sass-rem-convert()`.

## Namespace

```scss
@use "@sass-collective/rem" as foo;

.foo {
    font-size: foo.convert(16px);
    // font-size: 1rem;
}

.bar {
    @include foo.convert(font-size, 16px);
    // font-size: 1rem;
}
```

### Fallback name

You can use the fallback name if your namespace is not enough explicit for what ever reason!

```scss
@use "@sass-collective/rem" as foo;

.foo {
    font-size: foo.rem(16px);
    // font-size: 1rem;
}

.bar {
    @include foo.rem(font-size, 16px);
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
    font-size: rem.convert(16px);
    // font-size: 1.6rem;
}

.bar {
    @include rem.convert(font-size, 16px);
    // font-size: 1.6rem;
}
```

### Top-level config override

If variables are already configured on top-level, by another dependency for example, you can't use the `@use ... with`
solution anymore, because the module can only be setup once, this is Sass restriction with **Module System**, but
another solution exist for override the main configuration, with a mixin!

```scss
@include config(10px);
// variables.$baseline: 10px;
```

Insert `@include rem.config(...);` before the first `@include rem.foo;` call in your project.

See [official documentation](https://sass-lang.com/documentation/at-rules/use#with-mixins) about override configuration
with mixins.

## API

### Options

| Option | Value |
| --- | --- |
| `$baseline` | `16px` |

### Functions

| Function | Description |
| --- | --- |
| `convert($values...)` | Convert `px` unit to `rem`. |
| `rem($values...)` | Fallback name of `convert()` function. |

### Mixins

| Mixin | Description |
| --- | --- |
| `config($baseline)` | Override top-level `with` configuration. |
| `convert($property, $value, $important)` | Create property with conversion of `px` unit to `rem`, with optional `!important`. |
| `baseline($percentage)` | Automatically add the correct baseline based on the option. Default `$percentage` at `100%`. |
| `rem($property, $value, $important)` | Fallback name to `convert()` mixin. |
