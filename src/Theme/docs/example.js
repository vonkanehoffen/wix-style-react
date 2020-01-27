export const themedExample = `
class ColorInputWithState extends React.Component {
  state = {
    value: 0,
    options: [
      { id: 0, value: 'standard' },
      { id: 1, value: 'reds' },
      { id: 2, value: 'greens' },
    ],
  };

  onSelect = value => {
    this.setState({ value: value.id });
  };

  render() {
    const { value, options } = this.state;
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
          <Theme theme={value}>
            <GallerySidepanel/>
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
          <Theme theme={value}>
            <GallerySidepanel/>
          </Theme>
        </Cell>
      </Layout>
    );
  }
}
`;
