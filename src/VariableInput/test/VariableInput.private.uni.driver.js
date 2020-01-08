import { variableInputDriverFactory as publicDriverFactory } from '../VariableInput.uni.driver';

export const variableInputPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),
  };
};
