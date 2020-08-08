import React from 'react';
import '../Carousel/style.scss'
import InnerCarousel from '../InnerCarousel'

class Carousel extends React.Component {

  
  render() {
    const { content, carouselTitle, id, from } = this.props
    return (
      <div className='carouselWrapper'>
          <span className="carouselTitle" id={id}>{carouselTitle}</span>
          <InnerCarousel content={content} from={from}/>
      </div>
    )
  }
}

export default Carousel;