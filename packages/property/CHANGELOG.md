# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### [4.5.1](https://github.com/sass-collective/sass-collective/compare/@sass-collective/property@4.5.0...@sass-collective/property@4.5.1) (2021-11-02)

**Note:** Version bump only for package @sass-collective/property





# Release notes

## Unreleased

## v4.1.0 (2021-07-03)

### Added

* custom properties: `config` mixin for override top-level setup

## v4.0.0 (2021-07-01)

### Added

* custom properties: `$prefix` option

### Removed

* global: deprecated `property.scss` file
* functions: deprecated `create` and `custom-prop` functions
* mixins: deprecated `create`, `prop` and `create-custom-property` mixins

## v3.7.1 (2021-06-17)

### Fixed

* functions: missing `_functions.scss` for deprecated fallback

## v3.7.0 (2021-06-17)

### Changed

* mixins: move all mixins on `_mixins.scss` file

### Deprecated

* global: `_property.scss` file

### Removed

* global: tilde prefix on `@use` call

## v3.3.1 (2021-04-07)

### Fixed

* build: package files

## v3.3.0 (2021-04-07)

### Added

* css: add `declaration` mixin

## v3.2.1 (2021-03-31)

### Fixed

* property: use `create-var` instead of `custom-prop`

## v3.2.0 (2021-03-31)

### Added

* custom properties: `create-var` function

### Deprecated

* custom properties: `custom-prop` function

## v3.1.1 (2021-03-31)

### Added

* property: rollback old `mixins` & `functions` for better major upgrade

## v3.1.0 (2021-03-31)

### Added

* property: `create-varname` function
* custom properties: `create-custom-property` mixin

### Removed

* property: unneeded code

## v3.0.0 (2021-03-29)

### Added

* global: dedicated custom property functions has been moved on `_custom-properties.scss` file
* global: `create` mixin

### Changed

* deps: bump to sass 1.32.8

### Removed

* global: `prop` mixin

## v2.1.0 (2021-01-12)

### Added

* Added `get-varname` function
* Added `get-fallback` function

## v2.0.0 (2021-01-12)

### Added

* Added `create` function
* Added `is-custom-prop` function

### Changed

* Changed `@use / @forward` architecture
* Changed `custom-prop` function options

### Removed

* Removed `set-custom-prop` function

## v1.2.1 (2020-07-22)

### Changed

* Internal refactoring

## v1.2.0 (2020-06-24)

### Added

* Added `custom-prop` function

### Changed

* Bump to Sass 1.26.9

### Deprecated

* Deprecated `set-custom-prop` function

## v1.1.0 (2020-06-18)

### Changed

* Bump to Sass 1.26.8

## v1.0.1 (2020-04-13)

### Changed

* Changed `package.json` config

## v1.0.0 (2020-04-12)

* Initial release
