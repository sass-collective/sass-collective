# CSS

Declare CSS properties.

## Installation

```shell
npm install @sass-collective/property
```

## Usage

```scss
@use "@sass-collective/property/css";

.foo {
    @include css.declaration(color, darkcyan);
}
```

### Result

```css
.foo {
    color: darkcyan;
}
```

## API

### Mixins

| Mixin | Description |
| --- | --- |
| `declaration($property, $value, $important)` | Declare CSS property, with optional `!important`. |
