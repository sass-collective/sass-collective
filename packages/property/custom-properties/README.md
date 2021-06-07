# Custom Properties

Declare CSS Custom Properties.

## Installation

```shell
npm install @sass-collective/property
```

## Usage

```scss
@use "@sass-collective/property/custom-properties";

:root {
    @include custom-properties.declaration(custom-properties.create(foo, darkcyan));
}

.foo {
    @include custom-properties.declaration(color, custom-properties.create(foo, darkcyan));
}
```

### Result

```css
:root {
    --foo: darkcyan;
}

.foo {
    color: var(--foo, darkcyan);
}
```

## API

### Mixins

| Mixin | Description |
| --- | --- |
| `declaration($property, $custom-prop, $important)` | Declare CSS Custom Properties, with optional `!important`. |
