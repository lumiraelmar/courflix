import React from 'react';
import '../Carousel/style.scss'
import InnerCarousel from '../InnerCarousel'
import data from '../../data/courflix.json'

class Carousel extends React.Component {

  
  render() {

    return (
      <div className='carouselWrapper'>
        <div className='individualWrapper'>
          <span class="carouselTitle" id='series'>Series</span>
          <InnerCarousel option={data[0].series}/>
        </div>
        <div className='individualWrapper'>
          <span class="carouselTitle" id='movies'>Peliculas</span>
          <InnerCarousel option={data[0].movies}/>
        </div>
        <div className='individualWrapper'>
          <span class="carouselTitle" id='recent'>Agregadas recientemente</span>
          <InnerCarousel option={data[0].recommended}/>
        </div>
      </div>
    )
  }
}

export default Carousel;