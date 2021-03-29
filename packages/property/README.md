![Sass Property](.github/banner.png)

[![Version](https://flat.badgen.net/npm/v/@sass-collective/property)](https://www.npmjs.com/package/@sass-collective/property)
[![Downloads](https://flat.badgen.net/npm/dt/@sass-collective/property)](https://www.npmjs.com/package/@sass-collective/property)
[![Dependencies Status](https://david-dm.org/sass-collective/sass-collective/status.svg?style=flat-square&path=packages/property)](https://david-dm.org/sass-collective/sass-collective?path=packages/property)
[![License](https://flat.badgen.net/github/license/sass-collective/sass-collective)](https://flat.badgen.net/github/license/sass-collective/sass-collective)

## Introduction

Generate CSS property with CSS Custom Properties option.

## Install

    npm install @sass-collective/property --save

## Usage

```scss
@use "@sass-collective/property";
@use "@sass-collective/property/custom-properties";

.foo {
    @include property.create(color, custom-properties.create(--foo-font-size, 16px));
}
```

> **NOTE:** you can use the legacy `@import` with dedicated prefix, ex. `sass-property-create()` instead of `property.create()`.

### Result

```css
.foo {
    font-size: var(--foo-font-size, 16px);
}
```
