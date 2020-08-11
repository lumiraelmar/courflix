import React from 'react';
import './style.scss'
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class Card extends React.Component {
  render() {
    const { cont, from, watched } = this.props
      return (
        (from == 'home') ?
          <div className='carouselImgWrapper'>
            <Link to={`/content/${cont.id}`}>
              <img className='carouselImg' src={cont.img}/>
              <img className='carouselImgMobile' src={cont.mobileImg}/>
              {(cont.watched) && (watched == 'watched') &&(
                <div className="greyLoading">
                  <div className='redLoading' style={{width:`${cont.watched}`}}></div>
                </div>
              )}
            </Link>
          </div>
          :
          <div className='episodeWrapper'>
            {/* trae info de peliculas recomendadas random o episodios*/}
            {(cont.contentImg !== undefined) ?
            <img className='episodeImg' src={cont.contentImg} /> :
            <img className='episodeImg' src={cont.img} /> }
            <div className='episodeInfo'>
            {(cont.contentTitle !== undefined) ?
            <p className='episodeTitle'>{cont.contentTitle}</p> :
              <p className='episodeTitle'>{cont.title}</p> }
              {(cont.contentDesc !== undefined) ?
              <p className='episodeDesc'>{cont.contentDesc}</p> :
              <p className='episodeDesc'>{cont.desc}</p> }
            </div>
          </div>
    )
  }
}

export default Card;