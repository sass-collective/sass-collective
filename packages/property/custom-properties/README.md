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
    @include custom-properties.declaration(custom-properties.create(--foo, darkcyan));
    // --foo: darkcyan;
}

.foo {
    @include custom-properties.declaration(color, custom-properties.create(--foo, darkcyan));
    // color: var(--foo, darkcyan);
}

.bar {
    @include custom-properties.declaration(color, custom-properties.create(foo, custom-properties.create(bar, darkcyan)));
    // color: var(--foo, var(--bar, darkcyan));
}
```

## ...with prefix

You can configure a global prefix for all generated custom properties.

> **Tips:** you still can use custom name when the prefix is enabled, you just need to keep the `--` for the varname.

```scss
@use "@sass-collective/property/custom-properties" with (
    $prefix: 'foo'
);

:root {
    @include custom-properties.declaration(custom-properties.create(bar, darkcyan));
    // --foo-bar: darkcyan;

    @include custom-properties.declaration(custom-properties.create(--foo, darkcyan));
    // --foo: darkcyan;
}

.foo {
    @include custom-properties.declaration(color, custom-properties.create(bar, darkcyan));
    // color: var(--foo-bar, darkcyan);

    @include custom-properties.declaration(color, custom-properties.create(foo, darkcyan));
    // color: var(--foo, darkcyan);
}
```

## API

### Variables

| Variable | Default | Description |
| --- | --- | --- |
| `$prefix` | `null` | Declare CSS Custom Properties prefix `!important`. |

### Mixins

| Mixin | Description |
| --- | --- |
| `declaration($property, $custom-prop, $important)` | Declare CSS Custom Properties, with optional `!important`. |
