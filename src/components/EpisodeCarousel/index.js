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
        }
      ]
    } 
  }

  render() {
    const { episodes } = this.props
    console.log(this.props.episodes)
    return (
      <div className='episodeCarouselWrapper'>
        <p className='episodesCarouselTitle'>Episodes</p>
        <div className='sliderWrapper'>
          <Slider {...this.settings}>
            {episodes.map((episode, key) => {
              return (
                <div className='episodeWrapper'>
                  <img className='episodeImg' src={episode.episodeImg} key={key}/>
                  <p className='episodeTitle'>{episode.episodeTitle}</p>
                  <p className='episodeDesc'>{episode.episodeDesc}</p>
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