import React from 'react';
import '../Carousel/style.scss'
import InnerCarousel from '../InnerCarousel'

class Carousel extends React.Component {

  
  render() {
    const { option, title, id } = this.props
    return (
      <div className='carouselWrapper'>
        <div className='individualWrapper'>
          <span class="carouselTitle" id={id}>{title}</span>
          <InnerCarousel option={option}/>
        </div>
      </div>
    )
  }
}

export default Carousel;