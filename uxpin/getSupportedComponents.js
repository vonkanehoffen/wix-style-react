const supportedComponents = {
  Button: 'src/Button/Button.js',
  AddItem: 'src/AddItem/AddItem.js',
  Badge: 'src/Badge/Badge.js',
  Calendar: 'src/Calendar/Calendar.js',
  CardGalleryItem: 'src/CardGalleryItem/CardGalleryItem.js',
  Dropdown: 'src/Dropdown/Dropdown.js',
  FormField: 'src/FormField/FormField.js',
  Heading: 'src/Heading/Heading.js',
  ImageViewer: 'src/ImageViewer/ImageViewer.js',
  Input: 'src/Input/Input.js',
  Cell: 'src/Layout/Cell/index.js',
  Layout: 'src/Layout/Layout/index.js',
  Text: 'src/Text/Text.js',
  TextButton: 'src/TextButton/TextButton.js',
  Tooltip: 'src/Tooltip/TooltipNext/Tooltip.js',
};

module.exports.supportedComponents = supportedComponents;

const commonPropTypesOverrides = { children: 'PropTypes.node' };
const propTypesOverridesPerComponent = {};

module.exports.propTypesOverrides = Object.keys(supportedComponents).reduce(
  (acc, componentName) => {
    const overrides = Object.assign(
      {},
      commonPropTypesOverrides,
      propTypesOverridesPerComponent[componentName],
    );
    return Object.assign(acc, { [componentName]: overrides });
  },
  {},
);

module.exports.defaultPropsOverrides = {};

module.exports.componentDependencies = {
  Dropdown: { Input: 'src/Input' },
};
