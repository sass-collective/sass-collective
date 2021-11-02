![Sass CSS](.github/banner.png)

[![Version](https://flat.badgen.net/npm/v/@sass-collective/css)](https://www.npmjs.com/package/@sass-collective/css)
[![Download](https://flat.badgen.net/npm/dt/@sass-collective/css)](https://www.npmjs.com/package/@sass-collective/css)
[![License](https://flat.badgen.net/npm/license/@sass-collective/css)](https://www.npmjs.com/package/@sass-collective/css)

## Introduction

Generate CSS declaration.

## Installation

```shell
npm install @sass-collective/css
```

## Usage

```scss
@use "@sass-collective/css";

.foo {
    @include css.declaration(color, darkcyan);
    // color: darkcyan;

    @include css.declaration(color, darkseagreen, true);
    // color: darkseagreen !important;
    
    @include css.declaration(box-shadow, (0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75)));
    // box-shadow: 0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75);
    // Use parentheses for declare comma separated values list.
}

.bar {
    @include css.selector(md) {
        background: darkcyan;
    }
    // .md:bar {
    //      background: darkcyan;
    // }
    
    @include css.selector(md, $suffix: true) {
        background: darkcyan;
    }
    // .bar:md { 
    //      background: darkcyan;
    // }
}
```

## API

### Mixins

| Mixin | Description |
| --- | --- |
| `selector($key, $divider, $suffix)` | Add prefix or suffix key on selector, with optional default `:` divider. |
| `declaration($property, $value, $important)` | Generate CSS declaration, with optional `!important`. |
