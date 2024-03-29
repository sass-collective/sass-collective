<div align="center">

![Sass Property](.github/logo.svg)

</div>

[![Version](https://flat.badgen.net/npm/v/@sass-collective/property)](https://www.npmjs.com/package/@sass-collective/property)
[![Downloads](https://flat.badgen.net/npm/dt/@sass-collective/property)](https://www.npmjs.com/package/@sass-collective/property)
[![License](https://flat.badgen.net/github/license/sass-collective/sass-collective)](https://flat.badgen.net/github/license/sass-collective/sass-collective)

## Introduction

Generate CSS property with CSS Custom Properties option.

## Installing

```shell
npm install @sass-collective/property
```

## Usage

```scss
@use "@sass-collective/property";
@use "@sass-collective/property/custom-properties";

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

## API

### Sass mixins

| Mixin                                        | Description                                       |
|----------------------------------------------|---------------------------------------------------|
| `declaration($property, $value, $important)` | Declare CSS property, with optional `!important`. |

## Packages

| Package                                                                                                                                             | Description                    |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------|
| [`@sass-collective/property/custom-properties`](https://github.com/sass-collective/sass-collective/blob/master/packages/property/custom-properties) | Declare CSS Custom Properties. |
