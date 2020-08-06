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
    const { episodes, content } = this.props
    return (
      <div className='episodeCarouselWrapper'>
        
        {(episodes !== undefined) ?
        <div>
          <p className='episodesCarouselTitle'>Episodes</p>
          <div className='sliderWrapper'>
            <Slider {...this.settings}>
              {episodes.map((episode, key) => {
                return (
                  <div className='episodeWrapper'>
                    <img className='episodeImg' src={episode.img} key={key}/>
                    <p className='episodeTitle'>{episode.title}</p>
                    <p className='episodeDesc'>{episode.desc}</p>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div> : 
        <div>
          <p className='episodesCarouselTitle'>Recommended movies for YOU </p>
          <div className='sliderWrapper'>
            <Slider {...this.settings}>
              {content.map((cont, key) => {
                return (
                  <div className='episodeWrapper'>
                    <img className='episodeImg' src={cont.img} key={key}/>
                    <p className='episodeTitle'>{cont.title}</p>
                    <p className='episodeDesc'>{cont.desc}</p>
                  </div>
                )
              })}
            </Slider>
          </div> 
        </div> }
      </div>
    )
  }
}

export default InnerCarousel;