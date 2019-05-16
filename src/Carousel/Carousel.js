import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import './Carousel.global.scss';
import styles from './Carousel.scss';
import ChevronLeftLarge from '../new-icons/ChevronLeftLarge';
import ChevronRightLarge from '../new-icons/ChevronRightLarge';
import Pagination from './Pagination';
import SliderArrow from './SliderArrow';
import Loader from '../Loader';
import Proportion from '../Proportion';

const AUTOPLAY_SPEED = 2000;
const TRANSITION_SPEED = 600;
const dataHooks = {
  imagesContainer: 'images-container',
  carouselImage: 'carousel-img',
  loader: 'loader',
  prevButton: 'prev-button',
  nextButton: 'next-button',
  pageNavigation: index => `page-navigation-${index}`,
};

const WrappedSliderArrow = ({ currentSlide, slideCount, ...rest }) => (
  <SliderArrow {...rest} />
);

class Carousel extends React.Component {
  static displayName = 'Carousel';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,
    /** Array of strings where each string is a src of an image (in \<img src="your_src" /\>) */
    images: PropTypes.array.isRequired,
    /** Images loop endlessly */
    infinite: PropTypes.bool,
    /** Auto-playing of images */
    autoplay: PropTypes.bool,
    /** An index of the slide to start on */
    initialSlideIndex: PropTypes.number,
  };

  static defaultProps = {
    infinite: true,
    initialSlideIndex: 0,
    images: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      sliderSettings: this._resolveSliderSettings(props),
      loadedImageCount: 0,
    };
  }

  render() {
    const { dataHook, images } = this.props;
    const { sliderSettings } = this.state;

    return (
      <div data-hook={dataHook} className={styles.root}>
        <Slider {...sliderSettings}>{this._renderImages(images)}</Slider>
      </div>
    );
  }

  _resolveSliderSettings = ({ infinite, autoplay, initialSlideIndex }) => {
    return {
      infinite,
      autoplay,
      speed: TRANSITION_SPEED,
      autoplaySpeed: AUTOPLAY_SPEED,
      initialSlide: initialSlideIndex,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: (
        <WrappedSliderArrow
          dataHook={dataHooks.nextButton}
          icon={<ChevronRightLarge />}
        />
      ),
      prevArrow: (
        <WrappedSliderArrow
          dataHook={dataHooks.prevButton}
          icon={<ChevronLeftLarge />}
        />
      ),
      appendDots: pages => <Pagination pages={pages} />,
      customPaging: i => (
        <div
          className={styles.pageNavigation}
          data-hook={dataHooks.pageNavigation(i)}
        >
          {i}
        </div>
      ),
    };
  };

  _renderImages = images => {
    return images.map((image, index) => (
      <Proportion
        key={`${index}${image.src}`}
        aspectRatio={Proportion.PREDEFINED_RATIOS.landscape}
      >
        <div
          data-hook={dataHooks.imagesContainer}
          data-is-loading={this._isLoading()}
        >
          <img
            src={image.src}
            data-hook={dataHooks.carouselImage}
            className={styles.image}
            onLoad={() => this._onImageLoad()}
          />
        </div>
        {this._isLoading() && (
          <div className={styles.loader}>
            <Loader dataHook="loader" size="small" />
          </div>
        )}
      </Proportion>
    ));
  };

  _onImageLoad() {
    this.setState(state => {
      const loadedImageCount = state.loadedImageCount + 1;

      return {
        loadedImageCount,
      };
    });
  }

  _isLoading() {
    return this.state.loadedImageCount < this.props.images.length;
  }
}

export default Carousel;
