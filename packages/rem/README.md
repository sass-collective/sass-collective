<div align="center">

![Sass Rem](.github/logo.svg)

</div>

[![Version](https://flat.badgen.net/npm/v/@sass-collective/rem)](https://www.npmjs.com/package/@sass-collective/rem)
[![Downloads](https://flat.badgen.net/npm/dt/@sass-collective/rem)](https://www.npmjs.com/package/@sass-collective/rem)
[![License](https://flat.badgen.net/npm/license/@sass-collective/rem)](https://www.npmjs.com/package/@sass-collective/rem)

## Introduction

Sass function & mixin to convert pixel to rem.

## Installing

```shell
npm install @sass-collective/rem
```

## Usage

```scss
@use "@sass-collective/rem";

.foo {
    font-size: rem.convert(16px);
}
```

### Configuration

```scss
@use "@sass-collective/rem" with (
    $baseline: 10px
);
```

### Options

| Variable    | Default | Description                      |
|-------------|---------|----------------------------------|
| `$baseline` | `16px`  | Sets baseline reference in `px`. |

### Top-level config override

If variables are already configured on top-level using `@use ... with`, by another dependency for example, you can't use
this solution anymore, because the module can only be setup once, this is a Sass restriction with **Module System**, but
another solution exist for override the main configuration, with a mixin!

See [official documentation](https://sass-lang.com/documentation/at-rules/use#with-mixins) about override configuration
with mixins.

| Mixin               | Description                              |
|---------------------|:-----------------------------------------|
| `config($baseline)` | Override top-level `with` configuration. |

#### Configuration rule with `rem.config()`

The following Sass will configure new parameters:

```scss
@use "@sass-collective/rem";

@include rem.config(10px);
// variables.$baseline: 10px;
```

## API

### Sass functions

| Function                | Description                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| `baseline($percentage)` | Sets root baseline value with default `$percentage` at `100%`.              |
| `convert($values...)`   | Convert `px` unit to `rem`.                                                 |
| `rem($values...)`       | Fallback name of `convert()` function. See ["Fallback"](#fallback) section. |

#### Baseline with `rem.baseline()`

The following Sass...

```scss
@use "@sass-collective/rem";

html,
body {
    font-size: rem.baseline();
}
```

...will produce the following CSS...

```css
html,
body {
    font-size: 100%
}
```

#### Convert with `rem.convert()`

The following Sass...

```scss
@use "@sass-collective/rem";

.foo {
    font-size: rem.convert(16px); // Single value.
    margin: rem.convert(20px 30px); // Multiple values.
    border: rem.convert(1px solid darkcyan); // Multiple mixed values.
    box-shadow: rem.convert(0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75)); // Comma-separated values.
}
```

...will produce the following CSS...

```css
.foo {
    font-size: 1rem;
    margin: 1.25rem 1.875rem;
    border: 0.0625rem solid darkcyan;
    box-shadow: 0 0 0.625rem 0.3125rem rgba(0, 139, 139, 0.75), inset 0 0 0.625rem 0.3125rem rgba(0, 139, 139, 0.75);
}
```

### Sass mixins

| Mixin                                    | Description                                                                         |
|------------------------------------------|-------------------------------------------------------------------------------------|
| `baseline`                               | Sets declaration with `font-size` property.                                         |
| `convert($property, $value, $important)` | Sets declaration with conversion of `px` unit to `rem`, with optional `!important`. |
| `rem($property, $value, $important)`     | Fallback name to `convert()` mixin.  See ["Fallback"](#fallback) section.           |

#### Baseline declaration with `rem.baseline()`

The following Sass...

```scss
@use "@sass-collective/rem";

html,
body {
    @include rem.baseline;
}
```

...will produce the following CSS...

```css
html,
body {
    font-size: 100%
}
```

#### Convert declaration with `rem.convert()`

The following Sass...

```scss
@use "@sass-collective/rem";

.foo {
    @include rem.convert(font-size, 16px); // Single value.
    @include rem.convert(margin, 20px 30px); // Multiple values.
    @include rem.convert(border, 1px solid darkcyan); // Multiple mixed values.
    @include rem.convert(box-shadow, 0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75)); // Comma-separated values.
}
```

...will produce the following CSS...

```css
.foo {
    font-size: 1rem;
    margin: 1.25rem 1.875rem;
    border: 0.0625rem solid darkcyan;
    box-shadow: 0 0 0.625rem 0.3125rem rgba(0, 139, 139, 0.75), inset 0 0 0.625rem 0.3125rem rgba(0, 139, 139, 0.75);
}
```

### Fallback

You can use the fallback name if your namespace is not enough explicit for what ever reason...

```scss
@use "@sass-collective/rem" as foo;

.foo {
    font-size: foo.rem(16px);
}

.bar {
    @include foo.rem(font-size, 16px);
}
```

...or use more globally namespace... _(beware of conflicts with others modules)_

```scss
@use "@sass-collective/rem" as *;

.foo {
    font-size: rem(16px);
}

.bar {
    @include rem(font-size, 16px);
}
```
