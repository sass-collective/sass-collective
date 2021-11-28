<div align="center">

![Sass CSS](.github/logo.svg)

</div>

[![Version](https://flat.badgen.net/npm/v/@sass-collective/css)](https://www.npmjs.com/package/@sass-collective/css)
[![Downloads](https://flat.badgen.net/npm/dt/@sass-collective/css)](https://www.npmjs.com/package/@sass-collective/css)
[![License](https://flat.badgen.net/npm/license/@sass-collective/css)](https://www.npmjs.com/package/@sass-collective/css)

## Introduction

Generate CSS declaration.

## Installing

```shell
npm install @sass-collective/css
```

## Usage

```scss
@use "@sass-collective/css";
```

## API

### Sass mixins

| Mixin                                        | Description                                                              |
|----------------------------------------------|--------------------------------------------------------------------------|
| `declaration($property, $value, $important)` | Generate CSS declaration, with optional `!important`.                    |
| `selector($key, $divider, $suffix)`          | Add prefix or suffix key on selector, with optional default `:` divider. |

#### Add a new declaration with `css.declaration()`

The following Sass...

```scss
@use "@sass-collective/css";

.foo {
    @include css.declaration(color, darkcyan);
    @include css.declaration(color, darkseagreen, true);
    @include css.declaration(box-shadow, (0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75))); // Use parentheses for declare comma separated values list.
}
```

...will produce the following CSS.

```css
.foo {
    color: darkcyan;
    color: darkseagreen !important;
    box-shadow: 0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75);
}
```

#### Add a prefix to selector with `css.selector()`

The following Sass...

```scss
@use "@sass-collective/selector";

.foo {
    @include css.selector(md) {
        color: darkcyan;
    }
}
```

...will produce the following CSS.

```css
.md:foo {
    color: darkcyan;
}
```

#### Add a suffix to selector with `css.selector()`

The following Sass...

```scss
@use "@sass-collective/selector";

.foo {
    @include css.selector(md, $suffix: true) {
        color: darkcyan;
    }
}
```

...will produce the following CSS.

```css
.foo:md {
    color: darkcyan;
}
```
