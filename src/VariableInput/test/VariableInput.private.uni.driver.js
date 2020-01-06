import { variableInputDriverFactory as publicDriverFactory } from '../VariableInput.uni.driver';

export const getPlaceholder = base =>
  base.$('.public-DraftEditorPlaceholder-root');

export const variableInputPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),
    getPlaceholder: () => getPlaceholder(base).text(),
  };
};
