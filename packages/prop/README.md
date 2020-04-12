![Sass Rem](.repo/banner.png)

[![Version](https://flat.badgen.net/npm/v/@sass-collective/prop)](https://www.npmjs.com/package/@sass-collective/prop)
[![Download](https://flat.badgen.net/npm/dt/@sass-collective/prop)](https://www.npmjs.com/package/@sass-collective/prop)
[![License](https://flat.badgen.net/npm/license/@sass-collective/prop)](https://www.npmjs.com/package/@sass-collective/prop)

## Introduction

Generate CSS property with CSS custom properties option.

## Install

    npm install @sass-collective/prop --save
    
## Usage

### Mixin

```scss
prop($property, $value, $important: false);
```

### Module System

```scss
@use "@sass-collective/prop";

body {
    // Classic
    @include prop.prop("font-family", "Arial, sans-serif");
    
    // CSS Custom Properties
    @include prop.prop("font-size", (
        varname: "var-name",
        fallback: 16px
    ));
}
```

### Legacy @import

```scss
@import "@sass-collective/prop";

body {
    // Classic
    @include sass-prop("font-family", "Arial, sans-serif");
        
    // CSS Custom Properties
    @include sass-prop("font-size", (
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
