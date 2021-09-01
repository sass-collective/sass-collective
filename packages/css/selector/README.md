![Sass CSS Selector](.github/banner.png)

## Introduction

Manipulate CSS selectors for prefix or suffix in class names, like responsive class names.

## Installation

```shell
npm install @sass-collective/css
```

## Usage

```scss
@use "@sass-collective/css/selector";

.foo {
    @include selector.prefix(md) {
        background: darkcyan;
    }
    // .md:foo {
    //     background: darkcyan;
    // }

    @include selector.suffix(md) {
        background: darkcyan;
    }
    // .foo:md {
    //     background: darkcyan;
    // }
}

.bar {
    @include selector.prefix(lg) {
        background: darkcyan;
    }
    // .lg:bar {
    //     background: darkcyan;
    // }

    @include selector.suffix(lg) {
        background: darkcyan;
    }
    // .bar:lg {
    //     background: darkcyan;
    // }
}
```

## API

### Mixins

| Mixin | Description |
| --- | --- |
| `prefix($key, $divider)` | Add prefix class, with `:` divider, on selector. |
| `suffix($key, $divider)` | Add suffix key, with `:` divider, on selector. |
