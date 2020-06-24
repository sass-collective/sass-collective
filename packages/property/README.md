![Sass Property](.repo/banner.png)

[![Version](https://flat.badgen.net/npm/v/@sass-collective/property)](https://www.npmjs.com/package/@sass-collective/property)
[![Download](https://flat.badgen.net/npm/dt/@sass-collective/property)](https://www.npmjs.com/package/@sass-collective/property)
[![License](https://flat.badgen.net/npm/license/@sass-collective/property)](https://www.npmjs.com/package/@sass-collective/property)

## Introduction

Generate CSS property with CSS Custom Properties option.

## Install

    npm install @sass-collective/property --save
    
## Usage

### Function

```scss
custom-prop($name, $fallback: "");
```

### Mixin

```scss
prop($property, $value, $important: false);
```

### Module System

```scss
@use "@sass-collective/property";

// Function

body {
    font-size: property.custom-prop(font-size, 16px);
}

// Mixin

body {
    // Classic
    @include property.prop("font-size", 16px);
    
    // CSS Custom Properties
    @include property.prop("font-size", (
        varname: font-size,
        fallback: 16px
    ));
}
```

### Legacy @import

```scss
@import "@sass-collective/property";

// Function

body {
    font-size: sass-custom-prop(font-size, 16px);
}

// Mixin

body {
    // Classic
    @include sass-property("font-size", 16px);
        
    // CSS Custom Properties
    @include sass-property("font-size", (
        varname: font-size,
        fallback: 16px
    ));
}
```

### CSS

```css
body {
    font-size: var(--font-size, 16px);
}
```
