import React from 'react';
import '../InnerCarousel/style.scss'
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Card from '../Card';

class InnerCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      accessibility: true,
      infinite: props.from == 'selectedSeries' || props.carouselTitle == 'My List' ? false : true,
      speed: 400,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            swipeToSlide: true
          }
        },
        {
          breakpoint: 480,
          settings: ((props.from) == 'home') ? {slidesToShow: 1,
            slidesToScroll: 1, arrows: false} :'unslick' 
        }
      ]
    } 
  }

  render() {
    const { content, from, watched } = this.props
    return (
      <React.Fragment>
        <Slider {...this.settings}>
          {content.map((cont, key) => {
            return (
              <Card cont={cont} key={key} from={from} watched={watched}/>
            )
          })}
        </Slider>
      </React.Fragment>
    )
  }
}

export default InnerCarousel;