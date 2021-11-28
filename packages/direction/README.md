<div align="center">

![Sass Direction](.github/logo.svg)

</div>

[![Version](https://flat.badgen.net/npm/v/@sass-collective/direction)](https://www.npmjs.com/package/@sass-collective/direction)
[![Downloads](https://flat.badgen.net/npm/dt/@sass-collective/direction)](https://www.npmjs.com/package/@sass-collective/direction)
[![License](https://flat.badgen.net/github/license/sass-collective/sass-collective)](https://flat.badgen.net/github/license/sass-collective/sass-collective)

## Introduction

Manage content direction for languages `right-to-left` or `left-to-right` rules.

## Installing

```shell
npm install @sass-collective/direction
```

## Usage

```scss
@use "@sass-collective/direction";
```

## API

### Sass mixins

| Mixin                                | Description         |
|--------------------------------------|---------------------|
| `styles($direction, $root-selector)` | Set direction rule. |

#### Add direction rule with `direction.styles()`

The following Sass...

```scss
@use "@sass-collective/direction";

.foo {
    @include direction.styles {
        margin-left: 0;
        margin-right: 20px;
    }
    
    @include direction.styles(left) {
        margin-left: 20px;
        margin-right: 0;
    }
    
    @include direction.styles($root-selector: .bar) {
        margin-left: 0;
        margin-right: 20px;
    }
}
```

...will produce the following CSS.

```css
[dir="rtl"] .foo {
    margin-left: 0;
    margin-right: 20px;
}

[dir="ltr"] .foo {
    margin-left: 20px;
    margin-right: 0;
}

[dir="rtl"] .bar .foo {
    margin-left: 0;
    margin-right: 20px;
}
```
