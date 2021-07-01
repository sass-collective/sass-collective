![Sass Property](.github/banner.png)

[![Version](https://flat.badgen.net/npm/v/@sass-collective/property)](https://www.npmjs.com/package/@sass-collective/property)
[![Downloads](https://flat.badgen.net/npm/dt/@sass-collective/property)](https://www.npmjs.com/package/@sass-collective/property)
[![Dependencies Status](https://david-dm.org/sass-collective/sass-collective/status.svg?style=flat-square&path=packages/property)](https://david-dm.org/sass-collective/sass-collective?path=packages/property)
[![License](https://flat.badgen.net/github/license/sass-collective/sass-collective)](https://flat.badgen.net/github/license/sass-collective/sass-collective)

## Introduction

Generate CSS property with CSS Custom Properties option.

## Installation

```shell
npm install @sass-collective/property
```

## Usage

```scss
@use "@sass-collective/property/custom-properties";
@use "@sass-collective/property";

:root {
    @include property.declaration(custom-properties.create(--foo, darkcyan));
    // --foo: darkcyan;
}

.foo {
    @include property.declaration(color, custom-properties.create(--foo, darkcyan));
    // color: var(--foo, darkcyan);
    @include property.declaration(color, custom-properties.create(--foo, custom-properties.create(--bar, darkcyan)));
    // color: var(--foo, var(--bar, darkcyan));
}

.bar {
    @include property.declaration(color, darkcyan);
    // color: darkcyan;
}
```

> **NOTE:** you can use the legacy `@import` with dedicated prefix, ex. `sass-property-declaration()`.

## API

### Mixins

| Mixin | Description |
| --- | --- |
| `declaration($property, $value, $important)` | Declare CSS property, with optional `!important`. |

## Packages

| Package |  Description |
| --- | --- |
| [`@sass-collective/property/css`](https://github.com/sass-collective/sass-collective/blob/master/packages/property/css) | Declare CSS properties. | 
| [`@sass-collective/property/custom-properties`](https://github.com/sass-collective/sass-collective/blob/master/packages/property/custom-properties) | Declare CSS Custom Properties. |

