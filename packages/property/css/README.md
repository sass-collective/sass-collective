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
    // color: darkcyan;
    @include css.declaration(box-shadow, (0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75)));
    // box-shadow: 0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75);
    // Use parentheses for declare comma separated values list.
    @include css.declaration(color, darkcyan, true);
    // color: darkcyan !important;
}
```

## API

### Mixins

| Mixin | Description |
| --- | --- |
| `declaration($property, $value, $important)` | Declare CSS property, with optional `!important`. |
