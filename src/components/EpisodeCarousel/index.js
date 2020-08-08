import React from 'react';
import '../EpisodeCarousel/style.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
          breakpoint: 480,
          settings: 'unslick'
        }
      ]
    } 
  }

  

  render() {
    const { content, carouselTitle } = this.props
    return (
      <div className='episodeCarouselWrapper'>
          <p className='episodesCarouselTitle'>{carouselTitle}</p>
          <div className='sliderWrapper'>
            <Slider {...this.settings}>
              {content.map((cont, key) => {
                return (
                  <div className='episodeWrapper'>
                    <img className='episodeImg' src={cont.img} key={key}/>
                    <div className='episodeInfo'>
                      <p className='episodeTitle'>{cont.title}</p>
                      <p className='episodeDesc'>{cont.desc}</p>
                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>
      </div>
    )
  }
}

export default InnerCarousel;