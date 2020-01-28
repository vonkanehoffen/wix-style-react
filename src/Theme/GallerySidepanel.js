import React from 'react';
import Box from '../Box';
import styles from './GallerySidepanel.st.css';
import Heading from '../Heading';
import Tabs from '../Tabs';
import Thumbnail from '../Thumbnail';
import Divider from '../Divider';
import Slider from '../Slider';
import NumberInput from '../NumberInput';
import Button from '../Button';
import RadioGroup from '../RadioGroup';
import FormField from '../FormField';
import Palette from '../Palette';
import ToggleSwitch from '../ToggleSwitch';
import MultiSelectCheckbox from '../MultiSelectCheckbox';

class GallerySidepanel extends React.PureComponent {
  state = {
    selectedLayout: 0,
    activeTab: 2,
    sliderValue1: 3,
    sliderValue2: 20,
    ratio: 2,
    toggleSwitchValue: true,
  };

  render() {
    const {
      activeTab,
      selectedLayout,
      sliderValue1,
      sliderValue2,
      ratio,
      toggleSwitchValue,
    } = this.state;
    return (
      <Box direction="vertical" className={styles.root}>
        <Box className={styles.header}>
          <Heading appearance="H3" weight="normal">
            Gallery Settings
          </Heading>
        </Box>

        <Box direction="vertical" className={styles.body}>
          <Tabs
            activeId={activeTab}
            type="uniformFull"
            onClick={value => this.setState({ activeTab: value.id })}
            items={[
              { id: 1, title: 'Organize Media' },
              { id: 2, title: 'Layouts' },
            ]}
          />

          <Box margin={4} height="40px">
            <Palette fill={this.props.palette.slice(0, 7)} />
          </Box>

          <Box margin={4}>
            <FormField label="Choose a gallery layout">
              <div className={styles.layouts}>
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <Thumbnail
                      className={styles.layout}
                      key={i}
                      hideSelectedIcon
                      onClick={() => this.setState({ selectedLayout: i })}
                      selected={selectedLayout === i}
                      title={i + 1}
                    />
                  ))}
              </div>
            </FormField>
          </Box>

          <Box margin={4}>
            <MultiSelectCheckbox
              options={Array(4)
                .fill(0)
                .map((_, id) => ({ id, value: id + 1 }))}
              selectedOptions={[0, 1]}
            />
          </Box>

          <Box marginLeft={4} marginRight={4}>
            <Divider />
          </Box>

          <Box margin={4} direction="vertical">
            <Box className={styles.sliderWrapper}>
              <Box direction="vertical" className={styles.slider}>
                <FormField label="Images per row">
                  <Slider
                    onChange={value => this.setState({ sliderValue1: value })}
                    min={1}
                    max={4}
                    value={sliderValue1}
                    displayMarks={false}
                  />
                </FormField>
              </Box>

              <NumberInput
                value={sliderValue1}
                min={1}
                max={4}
                onChange={value => this.setState({ sliderValue1: value })}
              />
            </Box>

            <Box className={styles.sliderWrapper}>
              <Box direction="vertical" className={styles.slider}>
                <FormField label="Spacing">
                  <Slider
                    onChange={value => this.setState({ sliderValue2: value })}
                    min={0}
                    max={30}
                    value={sliderValue2}
                    displayMarks={false}
                  />
                </FormField>
              </Box>

              <NumberInput
                value={sliderValue2}
                min={0}
                max={30}
                onChange={value => this.setState({ sliderValue2: value })}
              />
            </Box>
          </Box>

          <Box marginLeft={4} marginRight={4}>
            <Divider />
          </Box>

          <Box margin={4}>
            <FormField label="Thumbnail Resize">
              <RadioGroup display="horizontal" value={1}>
                <RadioGroup.Radio value={1}>Crop</RadioGroup.Radio>
                <RadioGroup.Radio value={2}>Fit</RadioGroup.Radio>
              </RadioGroup>
            </FormField>
            <ToggleSwitch
              size="large"
              checked={toggleSwitchValue}
              onChange={e =>
                this.setState({ toggleSwitchValue: e.target.checked })
              }
            />
          </Box>

          <Box marginLeft={4} marginRight={4}>
            <Divider />
          </Box>

          <Box margin={4}>
            <FormField label="Image ratio">
              <div className={styles.ratios}>
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Thumbnail
                      className={styles.ratio}
                      key={i}
                      hideSelectedIcon
                      onClick={() => this.setState({ ratio: i })}
                      selected={ratio === i}
                      title={i + 1}
                    />
                  ))}
              </div>
            </FormField>
          </Box>

          <Box marginLeft={4} marginRight={4}>
            <Divider />
          </Box>
        </Box>

        <Box className={styles.buttons} margin={4}>
          <Box>
            <Button priority="secondary">Cancel</Button>
          </Box>
          <Box marginLeft={2}>
            <Button>Done</Button>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default GallerySidepanel;
