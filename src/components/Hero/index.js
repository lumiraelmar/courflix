import React from 'react';
import '../Hero/style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'

class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      like: 'icon',
      dislike: 'icon'
    }
  }

  handleClick(infoSerie) {
    /* Add movies to 'My List' */
    const stringifiedList = localStorage.getItem('list');
    if (stringifiedList) {
      const parsedList = JSON.parse(stringifiedList);
      const included = parsedList.map(serie => {
        return infoSerie.id == serie.id
      }) 
      if (!included) {
        parsedList.push(infoSerie)
        const newList = JSON.stringify(parsedList)
        localStorage.setItem('list', newList)
      } else { return }
    } else {
      const parsedList = [infoSerie]
      const newList = JSON.stringify(parsedList)
      localStorage.setItem('list', newList)
    }
  }

  handleLike() {
    const { like } = this.state;
    if (like == 'icon') {
      this.setState({
        like: 'icon like',
        dislike: 'icon'
      })
    } else {
      this.setState({
        like: 'icon',
      })
    }
  }

  handleDislike() {
    const { dislike } = this.state;
    if (dislike == 'icon') {
      this.setState({
        dislike: 'icon dislike',
        like: 'icon'
      })
    } else {
      this.setState({
        dislike: 'icon',
      })
    }
  }

  render() {
    const { title, seasons, desc, year, ageRate, minutes, link  } = this.props.infoSerie
    const { like, dislike } = this.state
    return (
      <div className='heroWrapper'>
        <div className='heroImg' style={this.props.style}>
          <h1 className='heroTitle'>{title}</h1>
          <div className='alignCenter'>
            <a className='heroButton' href={link} target={"_blank"}>Play Trailer</a>
            <a className='heroButton' href='' onClick={() => this.handleClick(this.props.infoSerie)}>Add to list</a>
            <FontAwesomeIcon icon={faThumbsUp} className={like} onClick={() => this.handleLike()}/>
            <FontAwesomeIcon icon={faThumbsUp} rotation={180} className={dislike} onClick={() => this.handleDislike()}/>
          </div>
          <div className='seriesDetails'>
            <p className='heroAge'>{ageRate}</p>
            <p className='heroYear'>{year}</p>
            {(seasons !== undefined) ?
            <p className='heroSeasons'>{seasons} seasons</p> :
            <p>{minutes}</p>}
          </div>
          <p className='heroDescription'>{desc}</p>
        </div>
      </div>
    )
  }
}



/* parsedList.map((serie) => {
        if (infoSerie.id !== serie.id) {
          parsedList.push(infoSerie)
        }
      }) 
      const newList = JSON.stringify(parsedList)
      localStorage.setItem('list', newList)*/
export default Hero;