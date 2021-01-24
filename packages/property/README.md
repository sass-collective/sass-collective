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

### Mixin

```scss
prop($property, $value, $important: false);
```

### Function

```scss
custom-prop($custom-prop);
```

### Module System

```scss
@use "@sass-collective/property";

$style: property.create(--foo-font-size, 16px);

// Using the function

body {
    font-size: property.custom-prop($style);
}

// Using the mixin

body {
    
    // Classic
    @include property.prop(font-size, 16px);

    // CSS Custom Properties
    @include property.prop(font-size, $style);
}
```

### Legacy @import

```scss
@import "@sass-collective/property";

$style: sass-create(--foo-font-size, 16px);

// Using the function

body {
    font-size: sass-custom-prop(font-size, 16px);
}

// Using the mixin

body {
    
    // Classic
    @include sass-prop(font-size, 16px);

    // CSS Custom Properties
    @include sass-prop(font-size, $style);
}
```

### CSS

```css
body {

    /* Classic */
    font-size: 16px;

    /* CSS Custom Properties **/
    font-size: var(--foo-font-size, 16px);
}
```
