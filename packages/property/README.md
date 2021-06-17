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
@use "@sass-collective/property";
@use "@sass-collective/property/custom-properties";

:root {
    @include property.declaration(custom-properties.create(--foo, darkcyan));
}

.foo {
    @include property.declaration(color, custom-properties.create(--foo, darkcyan));
}
```

> **NOTE:** you can use the legacy `@import` with dedicated prefix, ex. `sass-property-declaration()`.

### Result

```css
:root {
    --foo: darkcyan;
}

.foo {
    color: var(--foo, darkcyan);
}
```

## API

### Mixins

| Mixin | Description |
| --- | --- |
| `declaration($property, $value, $important)` | Declare CSS property, with optional `!important`. |
