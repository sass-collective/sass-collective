![Sass Direction](.github/banner.png)

[![Version](https://flat.badgen.net/npm/v/@sass-collective/direction)](https://www.npmjs.com/package/@sass-collective/direction)
[![Downloads](https://flat.badgen.net/npm/dt/@sass-collective/direction)](https://www.npmjs.com/package/@sass-collective/direction)
[![Dependencies Status](https://david-dm.org/sass-collective/sass-collective/status.svg?style=flat-square&path=packages/direction)](https://david-dm.org/sass-collective/sass-collective?path=packages/direction)
[![License](https://flat.badgen.net/github/license/sass-collective/sass-collective)](https://flat.badgen.net/github/license/sass-collective/sass-collective)

## Introduction

Manage content direction for languages `right-to-left` or `left-to-right` rules.

## Installation

```shell
npm install @sass-collective/direction
```

## Usage

```scss
@use "@sass-collective/direction";

.foo {
    margin-left: 20px;
    margin-right: 0;

    // rtl
    @include direction.styles {
        margin-left: 0;
        margin-right: 20px;
    }

    // ltr
    @include direction.styles(left) {
        margin-left: 0;
        margin-right: 20px;
    }

    // root selector
    @include direction.styles($root-selector: .bar) {
        margin-left: 0;
        margin-right: 20px;
    }
}
```

### Result

```css
.foo {
    margin-left: 20px;
    margin-right: 0;
}

/** rtl **/
[dir="rtl"] .foo {
    margin-left: 0;
    margin-right: 20px;
}

/** ltr **/
[dir="ltr"] .foo {
    margin-left: 0;
    margin-right: 20px;
}

/** root selector **/
[dir="rtl"] .bar .foo {
    margin-left: 0;
    margin-right: 20px;
}
```

> **NOTE:** you can use the legacy `@import` with dedicated prefix, ex. `sass-direction-styles()`.

## API

### Mixins

| Mixin | Description |
| --- | --- |
| `styles($direction, $root-selector)` | Create direction rule. |
