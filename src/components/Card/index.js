import React from 'react';
import './style.scss'
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class Card extends React.Component {
  render() {
    const { cont, from } = this.props
      return (
        (from == 'home') ?
          <div className='carouselImgWrapper'>
            <Link to={`/content/${cont.id}`}>
              <img className='carouselImg' src={cont.img}/>
              <img className='carouselImgMobile' src={cont.mobileImg}/>
            </Link>
          </div>
          :
          <div className='episodeWrapper'>
            <img className='episodeImg' src={cont.contentImg} />
            <div className='episodeInfo'>
              <p className='episodeTitle'>{cont.contentTitle}</p>
              <p className='episodeDesc'>{cont.contentDesc}</p>
            </div>
          </div>
    )
  }
}

export default Card;