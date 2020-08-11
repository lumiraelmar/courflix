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
      infinite: props.from == 'selectedSeries' ? false : true,
      speed: 400,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            arrows: false
          }
        },
      ]
    } 
    if (props.from == 'selectedSeries') {
      this.settings.breakpoints = {
        settings: 'unslick'
      }
    }
  }

  render() {
    const { content, from } = this.props
    return (
      <>
          <Slider {...this.settings}>
            {content.map((cont, key) => {
              return (
                <Card cont={cont} key={key} from={from}/>
              )
            })}
          </Slider>
        </>
    )
  }
}

export default InnerCarousel;