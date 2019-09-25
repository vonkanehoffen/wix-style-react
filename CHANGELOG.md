# Changelog

All notable changes are documented in this file.

Types of changes:

1. **Added** for new features.
1. **Changed** for changes in existing functionality.
1. **Deprecated** for soon-to-be removed features.
1. **Removed** for now removed features.
1. **Fixed** for any bug fixes.
1. **Security** in case of vulnerabilities.
1. **Breaking** for breaking changes
1. **Docs** for documentation changes
1. **Lab** components and features that are still in a work in progress

## Next

### Added
- `<CardGalleryItem />` - added prop `disabled` for primaryAction [#4160](https://github.com/wix/wix-style-react/pull/4160)

### Fixed

- `<FormField/>` - fix label color [#4158](https://github.com/wix/wix-style-react/pull/4158)

## 7.3.0 - 2019-09-24

### Added

- `<ImageViewer/>` - add a prop for render Remove Button [#4070](https://github.com/wix/wix-style-react/pull/4070)
- `<StatisticsWidget />` - add children support for stats [#4053](https://github.com/wix/wix-style-react/pull/4053)
- `<InputWithLabel/>` - create the component [#4051](https://github.com/wix/wix-style-react/pull/4051)

### Changed

- `<FormField/> <InfoIcon/>` - Add size prop [#4123](https://github.com/wix/wix-style-react/pull/4123)
- `<Input/>` - change disabled border and background colors [#4146](https://github.com/wix/wix-style-react/pull/4146)

### Fixed

- `<DropdownBase/>` - fix clickTargetElement method in testkit [#4152](https://github.com/wix/wix-style-react/pull/4152)
- `<Stepper/>` - Fix ellipsis problem with Safari [#4153](https://github.com/wix/wix-style-react/pull/4153)
- `<Tag/>` - remove redundant e2e when we have .visual already [#4139](https://github.com/wix/wix-style-react/pull/4139)
- `<ImageViewer/>` - fix removeRoundedBorders property. [#4131](https://github.com/wix/wix-style-react/issues/4131)
- `<FormField/>` - fix alignment when `size` is small [#4151](https://github.com/wix/wix-style-react/issues/4151)

### Docs

- `<Dropdown/>, <AutoComplete/>` - add overflow example [#4140](https://github.com/wix/wix-style-react/pull/4140)
- `<Breadcrumbs/>`- improving Breadcrumbs docs and adding visual tests [#4121](https://github.com/wix/wix-style-react/pull/4121/files)

## 7.2.0 - 2019-09-19

### Added

- `<Avatar/>` - add new colors [#4114](https://github.com/wix/wix-style-react/pull/4114)
- `<InputArea>` - added support for 'small' size [#4066](https://github.com/wix/wix-style-react/pull/4066)

### Changed

- `<Table/>` - improve `disabled` behavior [#4103](https://github.com/wix/wix-style-react/pull/4103)

### Deprecated

- `<Avatar/>` - deprecate old colors, you should use the new colors [#4114](https://github.com/wix/wix-style-react/pull/4114)

### Fixed

- `<ColorPicker/>` - add support for mobile dragging [#4102](https://github.com/wix/wix-style-react/pull/4102)

### Docs

- `<Modal/>`- improving Modal docs [#4104](https://github.com/wix/wix-style-react/pull/4104)

## 7.1.0 - 2019-09-18

### Added

- `<Swatches />` - new layout and add color button [#4079](https://github.com/wix/wix-style-react/pull/4079)

### Changed

- `<Fillpreview/>` - extract fillbutton functionality and refactor code [#4129](https://github.com/wix/wix-style-react/pull/4129)

## 7.0.0 - 2019-09-18

See [Migrating From v6 to v7](https://github.com/wix/wix-style-react/blob/master/docs/migration/v6-v7.md)

- `React` dev dependencies upgraded to v16. [#4106](https://github.com/wix/wix-style-react/pull/4106)
- `<RichTextArea/> <RichTextAreaComposite/>` - Removed, replaced by `<RichTextInputArea/>` [#4106](https://github.com/wix/wix-style-react/pull/4106)

---

For changelog of older version [see here](CHANGELOG-V3-V6.md)
