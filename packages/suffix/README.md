![Sass Strip Unit](.github/banner.png)

[![Version](https://flat.badgen.net/npm/v/@sass-collective/suffix)](https://www.npmjs.com/package/@sass-collective/suffix)
[![Download](https://flat.badgen.net/npm/dt/@sass-collective/suffix)](https://www.npmjs.com/package/@sass-collective/suffix)
[![License](https://flat.badgen.net/npm/license/@sass-collective/suffix)](https://www.npmjs.com/package/@sass-collective/suffix)

## Introduction

Strip unit on CSS value.

## Install

    npm install @sass-collective/suffix --save

## Usage

### Mixin

```scss
suffix($key, $selector: false, $root-selector: false);
```

### Module System

```scss
@use "@sass-collective/suffix";

.button {
    $value: suffix.suffix(lg);
}
```

### Legacy @import

```scss
@import "@sass-collective/suffix";

.button {
    $value: suffix(lg);
}
```

### CSS

```css
.button@lg {
    font-size: var(--my-font-size, 16px);
}
```
