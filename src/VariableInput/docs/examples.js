const _sizeExample = size => `<VariableInput
initialValue="${size} example {{page.name}}"
size='${size}'
variableParser={value => {
  return value === 'page.name' ? 'Page name' : false;
}}
/>`;
const _rowsExample = rows => `<VariableInput
initialValue="${rows} rows example {{page.name}}"
rows={${rows}}
variableParser={value => {
  return value === 'page.name' ? 'Page name' : false;
}}
/>`;

export const simple = `<VariableInput
initialValue="Example {{page.name}}"
variableParser={value => {
  return value === 'page.name' ? 'Page name' : false;
}}
/>`;
export const placeholder = `<VariableInput placeholder="This is a placeholder" />`;
export const size = `<>
${_sizeExample('small')}
<br /><br />
${_sizeExample('medium')}
<br /><br />
${_sizeExample('large')}
</>`;
export const rows = `<>
  ${_rowsExample(1)}
  <br /><br />
  ${_rowsExample(5)}
</>`;
export const disabled = `<VariableInput
disabled
initialValue="Example {{page.name}}"
variableParser={value => {
  return value === 'page.name' ? 'Page name' : false;
}}
/>`;
