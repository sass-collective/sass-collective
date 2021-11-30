<div align="center">

![Sass Breakpoint](.github/logo.svg)

</div>

[![Version](https://flat.badgen.net/npm/v/@sass-collective/breakpoint)](https://www.npmjs.com/package/@sass-collective/breakpoint)
[![Downloads](https://flat.badgen.net/npm/dt/@sass-collective/breakpoint)](https://www.npmjs.com/package/@sass-collective/breakpoint)
[![License](https://flat.badgen.net/github/license/sass-collective/sass-collective)](https://flat.badgen.net/github/license/sass-collective/sass-collective)

## Introduction

Easily manage your CSS breakpoint rules.

## Installing

```shell
npm install @sass-collective/breakpoint
```

## Usage

```scss
@use "@sass-collective/breakpoint";
```

### Screen sizes

You can define the screen sizes variables:

```scss
@use "@sass-collective/breakpoint" with (
    $screens: (
        "lg": 1024px
    )
);
```

### Options

| Variable                 | Default                | Description                                                                                                        |
|--------------------------|------------------------|--------------------------------------------------------------------------------------------------------------------|
| `$screens`               | See `Screens` section. | Sass map.                                                                                                          |
| **DEPRECATED** `$strict` | `true`                 | Subtract `1px` on `max-width` value, `960px` come `959px`. <br/>Available only with the deprecated `styles` mixin. |

### Screens

| Name  | Value    |
|-------|----------|
| `xs`  | `360px`  |
| `sm`  | `480px`  |
| `md`  | `768px`  |
| `lg`  | `960px`  |
| `xl`  | `1200px` |
| `2xl` | `1400px` |

You can also define new size:

```scss
@use "@sass-collective/breakpoint" with (
    $screens: (
        "3xl": 1920px
    )
);
```

The new key name `3xl` is now available like any other default theme keys.

## Customization

### Sass mixins

| Mixin                                                           | Description                                                                                                                    |
|-----------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| `up($value)`                                                    | Sets media rule for minimum with only.                                                                                         |
| `down($value)`                                                  | Sets media rule for maximum with only.                                                                                         |
| `only($value)`                                                  | Sets media rule for between minimum and maximum widths, but the maximum will be automatically set with next value of `$value`. |
| `between($min, $max)`                                           | Sets media rule for between minimum and maximum widths.                                                                        |
| **DEPRECATED** `styles($min-width, $max-width, $root-selector)` | Sets breakpoint rule.                                                                                                          |

#### Declare rule with `breakpoint.up()`

The following Sass...

```scss
@use "@sass-collective/breakpoint";

.foo {
    @include breakpoint.up(lg) {
        color: darkcyan;
    }
}
```

...will produce the following CSS...

```css
@media (min-width: 960px) { 
    .foo {
        color: darkcyan;
    }
}
```

#### Declare rule with `breakpoint.down()`

The following Sass...

```scss
@use "@sass-collective/breakpoint";

.foo {
    @include breakpoint.down(lg) {
        color: darkcyan;
    }
}
```

...will produce the following CSS...

```css
@media (max-width: 960px) {
    .foo {
        color: darkcyan;
    }
}
```

#### Declare rule with `breakpoint.only()`

The following Sass...

```scss
@use "@sass-collective/breakpoint";

.foo {
    @include breakpoint.only(lg) {
        color: darkcyan;
    }
}
```

...will produce the following CSS...

```css
@media (min-width: 960px) and (max-width: 1199px) {
    .foo {
        color: darkcyan;
    }
}
```

#### Declare rule with `breakpoint.between()`

The following Sass...

```scss
@use "@sass-collective/breakpoint";

.foo {
    @include breakpoint.between(md, xl) {
        color: darkcyan;
    }
}
```

...will produce the following CSS...

```css
@media (min-width: 768px) and (max-width: 1199px) {
    .foo {
        color: darkcyan;
    }
}
```

### Sass functions

| Function            | Description                                                                           |
|---------------------|---------------------------------------------------------------------------------------|
| `get-value($value)` | Get value from the configured list. Ex. `@include breakpoint.get-value(lg); // 960px` |
