![Sass Rem](.repo/banner.png)

[![Version](https://flat.badgen.net/npm/v/@sass-collective/property)](https://www.npmjs.com/package/@sass-collective/property)
[![Download](https://flat.badgen.net/npm/dt/@sass-collective/property)](https://www.npmjs.com/package/@sass-collective/property)
[![License](https://flat.badgen.net/npm/license/@sass-collective/property)](https://www.npmjs.com/package/@sass-collective/property)

## Introduction

Generate CSS property with CSS Custom Properties option.

## Install

    npm install @sass-collective/property --save
    
## Usage

### Mixin

```scss
prop($property, $value, $important: false);
```

### Module System

```scss
@use "@sass-collective/property";

body {
    // Classic
    @include property.prop("font-family", "Arial, sans-serif");
    
    // CSS Custom Properties
    @include property.prop("font-size", (
        varname: "var-name",
        fallback: 16px
    ));
}
```

### Legacy @import

```scss
@import "@sass-collective/property";

body {
    // Classic
    @include sass-property("font-family", "Arial, sans-serif");
        
    // CSS Custom Properties
    @include sass-property("font-size", (
        varname: "var-name",
        fallback: 16px
    ));
}
```

### CSS

```css
body {
    font-family: "Arial";
    font-size: var(--var-name, 16px);
}
```
