export const themedExample = `
class ColorInputWithState extends React.Component {
  state = {
    value: 0,
    theme: 'standard',
    options: [
      { id: 0, value: 'standard', palette: '#2B81CB' },
      { id: 1, value: 'reds', palette: '#D6453D' },
      { id: 2, value: 'greens', palette: '#44823F' },
    ],
  };

  onSelect = value => {
    this.setState({ value: value.id });
    this.setState({ theme: value.value });
  };

  render() {
    const { value, options, theme } = this.state;
    return (
      <Layout>
        <Cell>
          Theme:
          <Dropdown
            selectedId={value}
            options={options}
            onSelect={this.onSelect}
          />
        </Cell>
        <Cell>
          <Theme theme={theme}>
            <GallerySidepanel palette={Object.values(calc_theme(options[value].palette))}/>
          </Theme>
        </Cell>
      </Layout>
    );
  }
}
`;

export const customExample = `
class ColorInputWithState extends React.Component {
  state = {
    value: '#FF0000',
  };

  change = value => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Layout>
        <Cell>
          <ColorInput value={value} onChange={this.change} />
        </Cell>
        <Cell>
          <Theme color={value}>
            <GallerySidepanel palette={Object.values(calc_theme(value))}/>
          </Theme>
        </Cell>
      </Layout>
    );
  }
}
`;
