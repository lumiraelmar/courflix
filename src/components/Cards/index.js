import React from 'react';
import '../Cards/style.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class Cards extends React.Component {
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
          settings: 'unslick'
        }
      ]
    } 
  }
  render() {
    const { content } = this.props
    console.log(this.props.content, 10)
    return (
      <div className='noseque'>
        <Slider {...this.settings}>
          {content.map((cont, key) => {
            return (
              <div className='episodeWrapper' key={key}>
                <img className='episodeImg' src={cont.contentImg} />
                <div className='episodeInfo'>
                  <p className='episodeTitle'>{cont.contentTitle}</p>
                  <p className='episodeDesc'>{cont.contentDesc}</p>
                </div>
              </div>
            )
          })}
        </Slider>
        </div>
    )
  }
}

export default Cards;