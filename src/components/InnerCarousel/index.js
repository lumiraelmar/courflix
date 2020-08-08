import React from 'react';
import '../InnerCarousel/style.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Cards from '../../components/Cards';

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
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            arrows: false
          }
        },
      ]
    } 
  }

  render() {
    const { content, from } = this.props
    return (
      <>
        {(from == 'home') ?
        (
          <Slider {...this.settings}>
            {content.map((cont, key) => {
              return (
                <div className='carouselImgWrapper' key={key}>
                  <Link to={`/content/${cont.id}`}>
                    <img className='carouselImg' src={cont.img}/>
                      {cont.mobileImg &&
                    (<img className='carouselImgMobile' src={cont.mobileImg}/>)}
                  </Link>
                </div>
              )
            })}
          </Slider>)
        :
        (<Cards content={content}/>
        )}
        </>
    )
  }
}

export default InnerCarousel;