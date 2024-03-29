<div align="center">

![Sass Property](../.github/logo.svg)

</div>

## Introduction

Declare CSS Custom Properties.

## Installing

```shell
npm install @sass-collective/property
```

## Usage

```scss
@use "@sass-collective/property/custom-properties";

:root {
    @include custom-properties.declaration(custom-properties.create(foo, darkcyan));
    // --foo: darkcyan;
}

.foo {
    @include custom-properties.declaration(color, custom-properties.create(foo, darkcyan));
    // color: var(--foo, darkcyan);
}

.bar {
    @include custom-properties.declaration(color, custom-properties.create(foo, custom-properties.create(bar, darkcyan)));
    // color: var(--foo, var(--bar, darkcyan));
}
```

## Options

### Prefix

You can configure a global prefix for all generated custom properties.

> **Tips:** for keep using your own custom name, just add the `--` on varname, the prefix option will be disabled.

```scss
@use "@sass-collective/property/custom-properties" with (
    $prefix: "my"
);

:root {
    @include custom-properties.declaration(custom-properties.create(foo, darkcyan));
    // --my-foo: darkcyan;
    
    @include custom-properties.declaration(custom-properties.create(--foo, darkcyan));
    // --foo: darkcyan;
}

.foo {
    @include custom-properties.declaration(color, custom-properties.create(foo, darkcyan));
    // color: var(--my-foo, darkcyan);
    
    @include custom-properties.declaration(color, custom-properties.create(--foo, darkcyan));
    // color: var(--foo, darkcyan);
}
```

### Top-level config override

If variables are already configured on top-level, by another dependency for example, you can't use the `@use ... with`
solution anymore, because the module can only be setup once, this is Sass restriction with **Module System**, but
another solution exist for override the main configuration, with a mixin!

```scss
@include config("foo");
// variables.$prefix: "foo";
```

Insert the `@include` between the top-level configuration and the
first `@use "@sass-collective/property/custom-properties";` call in your project.

See [official documentation](https://sass-lang.com/documentation/at-rules/use#with-mixins) about override configuration
with mixins.

## API

### Options

| Variable  | Default | Description                                        |
|-----------|---------|----------------------------------------------------|
| `$prefix` | `null`  | Declare CSS Custom Properties prefix `!important`. |

### Sass mixins

| Mixin                                              | Description                                                |
|----------------------------------------------------|------------------------------------------------------------|
| `declaration($property, $custom-prop, $important)` | Declare CSS Custom Properties, with optional `!important`. |
| `config($prefix)`                                  | Override top-level `with` configuration.                   |
