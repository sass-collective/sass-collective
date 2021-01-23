![Sass Direction](.github/banner.png)

[![Version](https://flat.badgen.net/npm/v/@sass-collective/direction)](https://www.npmjs.com/package/@sass-collective/direction)
[![Downloads](https://flat.badgen.net/npm/dt/@sass-collective/direction)](https://www.npmjs.com/package/@sass-collective/direction)
[![Dependencies Status](https://david-dm.org/sass-collective/sass-collective/status.svg?style=flat-square&path=packages/direction)](https://david-dm.org/sass-collective/sass-collective?path=packages/direction)
[![License](https://flat.badgen.net/npm/license/@sass-collective/direction)](https://www.npmjs.com/package/@sass-collective/direction)

## Introduction

Manage content direction for languages right-to-left.

## Install

    npm install @sass-collective/direction --save

## Usage

### Mixin

```scss
styles($direction: right, $root-selector: null);
```

#### Options

| Names                 | Default      | Values                        |
| --------------------- | ------------ | ----------------------------- |
| ``$direction``        | ``right``    | ``left`` or ``right``         |
| ``$root-selector``    | null         | Class, ID or HTML element.    |

### Module System

```scss
@use "@sass-collective/direction";

p {
    margin-left: 20px;
    margin-right: 0;

    // RTL
    @include direction.styles {
        margin-left: 0;
        margin-right: 20px;
    }

    // LTR
    @include direction.styles(left) {
        margin-left: 0;
        margin-right: 20px;
    }

    // Root Selector
    @include direction.styles($root-selector: div) {
        margin-left: 0;
        margin-right: 20px;
    }
}
```

### Legacy @import

```scss
@import "@sass-collective/direction";

p {
    margin-left: 20px;
    margin-right: 0;

    // RTL
    @include sass-direction-styles {
        margin-left: 0;
        margin-right: 20px;
    }

    // LTR
    @include sass-direction-styles(left) {
        margin-left: 0;
        margin-right: 20px;
    }

    // Root Selector
    @include sass-direction-styles($root-selector: div) {
        margin-left: 0;
        margin-right: 20px;
    }
}
```

### CSS

```css
p {
    margin-left: 20px;
    margin-right: 0;
}

/** RTL **/
[dir="rtl"] p {
    margin-left: 0;
    margin-right: 20px;
}

/** LTR **/
[dir="ltr"] p {
    margin-left: 0;
    margin-right: 20px;
}

/** Root Selector **/
[dir="rtl"] div p {
    margin-left: 0;
    margin-right: 20px;
}
```
