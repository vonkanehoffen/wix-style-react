import {
  getComponentUrl,
  getSymbolUrl,
  componentsWithoutDocumentation,
} from '../../../symbolsComponentsMapping/storybookMapping';

export const createLinkedSymbolName = ({ groupSymbol, symbol }) => ({
  text: symbol,
  url: getSymbolUrl({ groupSymbol, symbol }),
});

export const createLinkedComponentsNames = componentsNamesArr =>
  componentsNamesArr.map(componentName => {
    const componentStr = `<${componentName}/>`;

    if (componentsWithoutDocumentation[componentName]) {
      return componentStr;
    }

    return {
      text: componentStr,
      url: getComponentUrl({ componentName }),
    };
  });
