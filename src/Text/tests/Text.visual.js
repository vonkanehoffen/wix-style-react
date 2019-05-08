import React from 'react';
import { storiesOf } from '@storybook/react';
import Text, { SIZES, WEIGHTS, SKINS } from '..';

storiesOf('Text', module)
  .add('default', () => <Text>Some Text</Text>)
  .add('link', () => (
    <Text>
      <a href="/">Some Text</a>
    </Text>
  ))
  .add('styles', () => (
    <div style={{ backgroundColor: '#f0f4f7' }}>
      {Object.keys(WEIGHTS).map(weight => (
        <p>
          {Object.keys(SIZES).map(size => (
            <p>
              {Object.keys(SKINS).map(skin =>
                [false, true].map(light =>
                  [false, true].map(secondary => (
                    <span style={{ margin: '12px' }}>
                      <Text
                        key={`${weight} ${size} ${skin} ${light} ${secondary}`}
                        size={size}
                        weight={weight}
                        skin={skin}
                        light={light}
                        secondary={secondary}
                      >
                        Some Text
                      </Text>
                    </span>
                  )),
                ),
              )}
            </p>
          ))}
        </p>
      ))}
    </div>
  ));

//TODO - ellipsis test is correct but the tooltip doesn't display on initial load, looks like a bug in the HOC
// import ReactTestUtils from 'react-dom/test-utils';
//   .add('ellipsis', () => <TextEllipsis />);

// class TextEllipsis extends React.Component {
//   componentDidMount() {
//     setTimeout(() => {
//       ReactTestUtils.Simulate.mouseEnter(
//         document.querySelector('[data-hook="text-with-ellipsis"]'),
//       );
//     });
//   }
//   render() {
//     return (
//       <div style={{ width: '120px' }}>
//         <Text ellipsis dataHook="text-with-ellipsis">
//           very very long text
//         </Text>
//       </div>
//     );
//   }
// }
