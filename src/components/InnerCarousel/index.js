import React from 'react';
import '../InnerCarousel/style.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

class InnerCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      accessibility: true,
      infinite: true,
      speed: 400,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    } 
  }

  render() {
    return (
      <div className='sliderWrapper'>
        <Slider {...this.settings}>
          {this.props.option.map((serie, key) => {
            return (
              <div className='carouselImgWrapper'>
                <Link to={`/content/${serie.id}`}>
                  <img className='carouselImg' src={serie.img} key={key}/>
                </Link>
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}

export default InnerCarousel;