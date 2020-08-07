import React from 'react';
import '../Hero/style.scss'

class Hero extends React.Component {
  render() {
    const { title, seasons, desc, year, ageRate  } = this.props.infoSerie
    return (
      <div className='heroWrapper'>
        <div className='heroImg' style={this.props.style}>
          <h1 className='heroTitle'>{title}</h1>
          <a className='heroButton' href=''>Reproducir</a>
          <a className='heroButton' href=''>+ mi lista</a>
          <div className='seriesDetails'>
            <p className='heroAge'>{ageRate}</p>
            <p className='heroYear'>{year}</p>
            {(seasons !== undefined) ?
            <p className='heroSeasons'>{seasons} seasons</p> : <p></p>}
          </div>
          <p className='heroDescription'>{desc}</p>
        </div>
      </div>
    )
  }
}

export default Hero;