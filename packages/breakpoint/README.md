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

| Variable                 | Default               | Description                                                                                                   |
|--------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------|
| `$screens`               | See `Tokens` section. | Sets a list of breakpoint tokens.                                                                             |
| `$clean-sweep`           | `false`               | Erase the default `$screens` config for helping you on a fresh start with your own custom tokens.             |
| **DEPRECATED** `$strict` | `true`                | Subtract `1px` on `max-width` value, `960px` come `959px`. Available only with the deprecated `styles` mixin. |

### Tokens

| Key   | Value    |
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

The new token named `3xl` is now available like any others.

#### Declare your own tokens with `$clean-sweep`

The following Sass...

```scss
@use "@sass-collective/breakpoint" with (
    $clean-sweep: true,
    $screens: (
        "tablet": 768px,
        "desktop": 960px
    )
);
```

...will produce the following tokens...

| Key       | Value   |
|-----------|---------|
| `tablet`  | `768px` |
| `desktop` | `960px` |

## Customization

### Sass mixins

| Mixin                                                           | Description                                                                                                                    |
|-----------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| `up($value)`                                                    | Sets media rule for minimum with only.                                                                                         |
| `down($value)`                                                  | Sets media rule for maximum with only.                                                                                         |
| `only($value)`                                                  | Sets media rule for between minimum and maximum widths, but the maximum will be automatically set with next value of `$value`. |
| `between($min, $max)`                                           | Sets media rule for between minimum and maximum widths.                                                                        |
| `config($screens, $clean-sweep)`                                | Override top-level `with` configuration.                                                                                       |
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

#### Declare new configuration with `breakpoint.config()`

If variables are already configured on top-level, by another dependency for example, you can't use the `@use ... with`
solution anymore, because the module can only be setup once, this is Sass restriction with **Module System**, but
another solution exist for override the main configuration, with a mixin!

```scss
@include breakpoint.config((
    "3xl": 1980px
));

// or

@include breakpoint.config((
    "tablet": 768px,
    "desktop": 960px
), true);
```

Insert `breakpoint.config();` before the first `breakpoint.xxx()` mixin call in your project or file.

See [official documentation](https://sass-lang.com/documentation/at-rules/use#with-mixins) about override configuration
with mixins.

### Sass functions

| Function            | Description                                                                                  |
|---------------------|----------------------------------------------------------------------------------------------|
| `get-value($value)` | Get value from the configured tokens list. Ex. `@include breakpoint.get-value(lg); // 960px` |
