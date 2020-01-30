import { customizations } from '../../DatePicker/docs/examples';

export const themedExample = `
class ColorInputWithState extends React.Component {
  state = {
    value: 0,
    theme: 'standard',
    options: [
      { id: 0, value: 'WSR (default state)', theme: 'standard', palette: '#2B81CB' },
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
    customizationLevel: 0,
    color: '#2b80cb',
    radius: 20,
    fontFamily: 0,
    fontSize: 100,
    borders: [0, 1, 2, 3],
    disabled: false,
    sliderThickness: 6,
    sliderHandle: 8,
    tabsThickness: 3,
  };

  fontFamilies = [
    'Helvetica Neue',
    'Madefor',
    'cursive',
    'fantasy',
    'monospace',
    'Comic Sans MS',
  ];

  borders = ['Top', 'Left', 'Bottom', 'Right'];

  _renderGlobalParameters = () => {
    const { color, radius, fontFamily, fontSize } = this.state;
    return (
      <>
        <Text>Global parameters will affect most if not all components</Text>
        <Divider />

        <Box marginTop={4}>
          <FormField label="Color">
            <ColorInput
              value={color}
              onChange={color => this.setState({ color })}
            />
          </FormField>
        </Box>

        <Box marginTop={4} direction="vertical">
          <FormField label="Font family">
            <Dropdown
              onSelect={({ id }) => this.setState({ fontFamily: id })}
              selectedId={fontFamily}
              options={this.fontFamilies.map((value, id) => ({ id, value }))}
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
      </>
    );
  };

  _renderSpecificParameters = () => {
    const { sliderThickness, sliderHandle, tabsThickness } = this.state;
    return (
      <>
        <Text>A specific component parameters can raise the detail level of customization available</Text>
        <Divider />

        <Box marginTop={8}>
          <Text>Slider</Text>
        </Box>
        <Divider />

        <Box marginTop={4} direction="vertical">
          <FormField label="Thickness">
            <Slider
              onChange={sliderThickness => this.setState({ sliderThickness })}
              min={0}
              max={20}
              value={sliderThickness}
              displayMarks={false}
            />
          </FormField>
        </Box>

        <Box marginTop={4} direction="vertical">
          <FormField label="Handle">
            <Slider
              onChange={sliderHandle => this.setState({ sliderHandle })}
              min={0}
              max={16}
              value={sliderHandle}
              displayMarks={false}
            />
          </FormField>
        </Box>

        <Box marginTop={8}>
          <Text>Tabs</Text>
        </Box>
        <Divider />

        <Box marginTop={4} direction="vertical">
          <FormField label="Thickness">
            <Slider
              onChange={tabsThickness => this.setState({ tabsThickness })}
              min={0}
              max={10}
              value={tabsThickness}
              displayMarks={false}
            />
          </FormField>
        </Box>
      </>
    );
  };

  _renderOtherParameters = () => {
    const { borders, disabled } = this.state;

    return (
      <>
        <Text>Other suggested parameters</Text>
        <Divider />

        <Box marginTop={4} direction="vertical">
          <FormField label="Borders">
            <MultiSelectCheckbox
              options={this.borders.map((value, id) => ({ id, value }))}
              onSelect={option =>
                this.setState({ borders: [...borders, option] })
              }
              onDeselect={option =>
                this.setState({
                  borders: borders.filter(item => item !== option),
                })
              }
              selectedOptions={borders}
            />
          </FormField>
        </Box>

        <Box marginTop={4} direction="vertical">
          <FormField label="Disabled">
            <ToggleSwitch
              size="large"
              checked={disabled}
              onChange={e => this.setState({ disabled: e.target.checked })}
            />
          </FormField>
        </Box>
      </>
    );
  };

  render() {
    const {
      customizationLevel,
      color,
      radius,
      fontFamily,
      fontSize,
      borders,
      disabled,
      sliderThickness,
      sliderHandle,
      tabsThickness,
    } = this.state;
    return (
      <Layout gap="50px">
        <Row>
          <FormField label="Customization level">
            <Dropdown
              selectedId={customizationLevel}
              options={[
                { id: 0, value: 'Global Parameters' },
                { id: 1, value: 'Specific component Parameters' },
                { id: 2, value: 'Other Parameters' },
              ]}
              onSelect={value =>
                this.setState({ customizationLevel: value.id })
              }
            />
          </FormField>

          <Box marginTop={4}>
            <Divider />
          </Box>

          {customizationLevel === 0 && this._renderGlobalParameters()}
          {customizationLevel === 1 && this._renderSpecificParameters()}
          {customizationLevel === 2 && this._renderOtherParameters()}
        </Row>
        <Row>
          <Theme
            custom={{
              color,
              radius,
              fontFamily: this.fontFamilies[fontFamily],
              fontSize,
              borders: borders.map(index => this.borders[index].toLowerCase()),
              slider: {
                thickness: sliderThickness + 'px',
                handle: sliderHandle + 'px',
              },
              tabs: {
                thickness: tabsThickness + 'px',
              },
            }}
          >
            <GallerySidepanel
              palette={Object.values(calc_theme(color))}
              disabled={disabled}
            />
          </Theme>
        </Row>
      </Layout>
    );
  }
}
`;

export const technology = `
class ColorInputWithState extends React.Component {
  state = {
    color: '#2b80cb',
    fontFamily: 'Helvetica Neue',
  };

  render() {
    const { color, fontFamily } = this.state;
    const palette = Object.entries(calc_theme(color)).slice(0, 7);

    return (
      <Container>
        <Col span={6}>
          <ColorInput
            value={color}
            onChange={color => this.setState({ color })}
          />

          <Box marginTop={4} direction="vertical">
          <Text>HSL (Hue, Saturation, Luminosity) allows us to describe meaningful relationships between colors.</Text>
            {palette.map((k, id) => (
              <div key={id}>
                <Text>--wsr-theme-color-</Text>
                <Text weight="bold" style={{marginRight: '25px'}}>{k[0].substring(18)}:</Text>
                <Text>{k[1]}</Text>
              </div>
            ))}
          </Box>
          <Box marginTop={4} direction="vertical">
            <Text>--wsr-theme-font-family: {fontFamily}</Text>
            <Input value={fontFamily} onChange={e => this.setState({fontFamily: e.target.value})} />
          </Box>
        </Col>
        <Col span={6}>
          <Theme
            custom={{
              color,
              fontFamily: fontFamily || 'Times New Roman',
              // radius,
              // fontSize,
              // borders: borders.map(index => this.borders[index].toLowerCase()),
              // slider: {
              //   thickness: sliderThickness + 'px',
              //   handle: sliderHandle + 'px',
              // },
              // tabs: {
              //   thickness: tabsThickness + 'px',
              // },
            }}
          >
            <Text>Squashy armchairs dirt on your nose brass scales crush the Sopophorous bean with flat side of silver dagger, releases juice better than cutting. Full moon Whomping Willow three turns should do it lemon drops. Locomotor trunks owl treats that will be 50 points, Mr. Potter. Witch Weekly, he will rise again and he will come for us, headmaster Erumpent horn. Fenrir Grayback horseless carriages ‘zis is a chance many would die for!</Text>

            <Box marginTop={4} direction="vertical">
              <FormField label="Palette">
                <Box height="40px">
                  <Palette fill={palette.map(x => x[1])} />
                </Box>
              </FormField>
            </Box>
          </Theme>
        </Col>
      </Container>
    );
  }
}
`;
