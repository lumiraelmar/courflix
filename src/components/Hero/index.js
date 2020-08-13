import React from 'react';
import '../Hero/style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from 'react-player/youtube'

class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      like: 'icon',
      dislike: 'icon',
      showVideo: 'none',
      clase: 'heroWrapper'
    }
  }

  handleClick(infoSerie) {
    /* Add movies to 'My List' */
    const stringifiedList = localStorage.getItem('list');
    if (stringifiedList) {
      const parsedList = JSON.parse(stringifiedList);
      const included = parsedList.some(serie => {
        return infoSerie.id == serie.id
      }) 
      /* avoid duplicate series/movies */
      if (!included) {
        parsedList.push(infoSerie)
        const newList = JSON.stringify(parsedList)
        localStorage.setItem('list', newList)
      } return 
    } else {
      const parsedList = [infoSerie]
      const newList = JSON.stringify(parsedList)
      localStorage.setItem('list', newList)
    }
  }

  handleVideo() {
     /* update to show/remove videoPlayer onClick */
    const { showVideo } = this.state
    if (showVideo == 'flex') {
      this.setState({
        showVideo: 'none',
        clase: 'heroWrapper'
      })
    } else {
    this.setState({
      showVideo: 'flex',
      clase: 'heroWrapper blur'
    }) }
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
    const { like, dislike, showVideo, clase } = this.state
    return (
      <React.Fragment>
        <FontAwesomeIcon icon={faTimes} className='iconClose' style={{display: `${showVideo}`}} onClick={() => this.handleVideo()} />
        <ReactPlayer url={link} className='videoPlayer' style={{display: `${showVideo}`}} />
        <div className={clase}>
          <div className='heroImg' style={this.props.style}>
            <h1 className='heroTitle'>{title}</h1>
            <div className='alignCenter'>
              <a className='heroButton' onClick={() => this.handleVideo()}>Play Trailer</a>
              <a className='heroButton' onClick={() => this.handleClick(this.props.infoSerie)}>Add to list</a>
              <FontAwesomeIcon icon={faThumbsUp} className={like} onClick={() => this.handleLike()}/>
              <FontAwesomeIcon icon={faThumbsUp} rotation={180} className={dislike} onClick={() => this.handleDislike()}/>
            </div>
            <div className='seriesDetails'>
              <p className='heroAge'>{ageRate}</p>
              <p className='heroYear'>{year}</p>
              {(seasons !== undefined) ?
              <p className='heroSeasons'>{seasons}</p> :
              <p>{minutes}</p>}
            </div>
            <p className='heroDescription'>{desc}</p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Hero;