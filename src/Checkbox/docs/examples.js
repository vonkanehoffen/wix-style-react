export const simple = `
  <Checkbox>Hello World!</Checkbox>
`;

export const fullWidth = `
  <Box direction="vertical">
    <Box margin={2}>
      <Checkbox>
        <div style={{ backgroundColor: 'lightblue', textAlign: 'center' }}>
          I am a lightblue content
        </div>
      </Checkbox>
    </Box>
    <Box margin={2}>
      <Checkbox fullWidth>
        <div style={{ backgroundColor: 'lightblue', textAlign: 'center' }}>
          I am a full width, lightblue content
        </div>
      </Checkbox>
    </Box>
  </Box>
`;

export const error = `
<Checkbox hasError errorMessage="Oops!" vAlign="top">
  <div>I have an error!</div>
  <div>Hover me...</div>
</Checkbox>
`;

export const selectionArea = `
<Box direction='vertical'>
  <Checkbox selectionArea='always' checked>Check me!</Checkbox>
  <br/>
  <Checkbox selectionArea='always'>Check me!</Checkbox>
  <br/>
  <Checkbox selectionArea='always' disabled>Check me!</Checkbox>
  <br/>
  <Checkbox selectionArea='hover'>Check me!</Checkbox>
</Box>
`;
