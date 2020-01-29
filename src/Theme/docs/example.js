export const themedExample = `
class ColorInputWithState extends React.Component {
  state = {
    value: 0,
    theme: 'standard',
    options: [
      { id: 0, value: 'Standard', theme: 'standard', palette: '#2B81CB' },
      { id: 1, value: 'Roses 🌹', theme: 'roses', palette: '#D6453D' },
      { id: 2, value: 'Stiff Grass 🌱', theme: 'grass', palette: '#44823F' },
    ],
  };

  onSelect = value => {
    this.setState({ value: value.id });
    this.setState({ theme: value.theme });
  };

  render() {
    const { value, options, theme } = this.state;
    return (
      <Layout gap="50px">
        <Row>
          <FormField label="Theme">
            <Dropdown
              selectedId={value}
              options={options}
              onSelect={this.onSelect}
            />
          </FormField>

          <Box marginTop={4} marginBottom={4}>
            <Divider />
          </Box>

          <Text>A pre-made theme includes all sort of properties, like colors, borders styles, etc.</Text>
        </Row>
        <Row>
          <Theme theme={theme}>
            <GallerySidepanel palette={Object.values(calc_theme(options[value].palette))}/>
          </Theme>
        </Row>
      </Layout>
    );
  }
}
`;

export const customExample = `
class ColorInputWithState extends React.Component {
  state = {
    color: '#FF0000',
    radius: 20,
    fontFamily: 0,
    fontSize: 100,
    borders: [0, 1, 2, 3],
    disabled: false,
  };

  fontFamilies = [
    'Madefor',
    'Helvetica Neue',
    'cursive',
    'fantasy',
    'monospace',
    'Comic Sans MS',
  ];

  borders = [
    'Top',
    'Left',
    'Bottom',
    'Right',
  ]

  render() {
    const { color, radius, fontFamily, fontSize, borders, disabled } = this.state;
    return (
      <Layout gap="50px">
        <Row>
          <Text>Custom theme</Text>

          <Divider />

          <Box marginTop={4}>
            <FormField label="Colors">
              <ColorInput
                value={color}
                onChange={color => this.setState({ color })}
              />
            </FormField>
          </Box>

          <Box marginTop={4} direction="vertical">
            <FormField label="Border radius">
              <Slider
                onChange={radius => this.setState({ radius })}
                min={0}
                max={100}
                value={radius}
                displayMarks={false}
              />
            </FormField>
          </Box>

          <Box marginTop={4} direction="vertical">
            <FormField label="Borders">
              <MultiSelectCheckbox
                options={this.borders.map((value, id) => ({id, value}))}
                onSelect={option => this.setState({ borders: [...borders, option] })}
                onDeselect={option => this.setState({ borders: borders.filter(item => item !== option) })}
                selectedOptions={borders}
              />
            </FormField>
          </Box>

          <Box marginTop={4} direction="vertical">
            <FormField label="Font family">
              <Dropdown
                onSelect={({id}) => this.setState({ fontFamily: id })}
                selectedId={fontFamily}
                options={this.fontFamilies.map((value, id) => ({id, value}))}
              />
            </FormField>
          </Box>

          <Box marginTop={4} direction="vertical">
            <FormField label="Font size">
              <Slider
                onChange={fontSize => this.setState({ fontSize })}
                min={50}
                max={150}
                value={fontSize}
                displayMarks={false}
              />
            </FormField>
          </Box>

          <Box marginTop={4} direction="vertical">
            <FormField label="Disabled">
              <ToggleSwitch
                size="large"
                checked={disabled}
                onChange={e => this.setState({ disabled: e.target.checked })
                }
              />
            </FormField>
          </Box>

        </Row>
        <Row>
          <Theme custom={{
            color,
            radius,
            fontFamily: this.fontFamilies[fontFamily],
            fontSize,
            borders: this.state.borders.map(index => this.borders[index].toLowerCase()),
          }}>
            <GallerySidepanel palette={Object.values(calc_theme(color))} disabled={disabled} />
          </Theme>
        </Row>
      </Layout>
    );
  }
}
`;
