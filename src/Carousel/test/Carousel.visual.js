import React from 'react';
import { storiesOf } from '@storybook/react';

import Carousel from '..';

const tests = [
  {
    describe: 'Basic',
    its: [
      {
        it: 'Display images',
        props: {
          images: [
            {
              src:
                'https://a-static.besthdwallpaper.com/garfield-wallpaper-2800x2100-815_28.jpg',
            },
            {
              src:
                'https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg',
            },
            {
              src:
                'https://a-static.besthdwallpaper.com/cartoons-garfield-wallpaper-1440x1080-6773_22.jpg',
            },
          ],
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Carousel/${describe}`, module).add(it, () => (
      <div style={{ maxWidth: '550px' }}>
        <Carousel {...props} />
      </div>
    ));
  });
});
