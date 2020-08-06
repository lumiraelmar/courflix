import React from 'react';
import '../Cards/style.scss'
import { Link } from 'react-router-dom';

class Cards extends React.Component {
  render() {
    const { img } = this.props.item
    return (
      <div className='carouselImgWrapper'>
        <Link to={`/content/`}>
          <img className='carouselImg' src={img} />
        </Link>
      </div>
    )
  }
}

export default Cards;