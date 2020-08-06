import React from 'react';
import '../Navbar/style.scss'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Navbar extends React.Component {

  scrollToTop() {
    scroll.scrollToTop({duration: 500});
  }

  render() {
    return (
      <nav className='nav'>
        <img className='pageLogo' src={this.props.logo}></img>
        <ul className='navbar'>
          <a onClick={this.scrollToTop}><li className='link'>Inicio</li></a>
          <Link activeClass="active" to="series" spy={true} smooth={true} offset={-80} duration={500} onSetActive={this.handleSetActive}>
            <li className='link'>Series</li>
          </Link>
          <Link activeClass="active" to="movies" spy={true} smooth={true} offset={-80} duration={500} onSetActive={this.handleSetActive}>
          <li className='link'>Peliculas</li>
          </Link>
          <Link activeClass="active" to="recent" spy={true} smooth={true} offset={-80} duration={500} onSetActive={this.handleSetActive}>
          <li className='link'>Agregadas recientemente</li>
          </Link>
          <Link activeClass="active" to="/" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
          <li className='link'>Mi lista</li>
          </Link>
        </ul>
      </nav>
    )
  }
}

export default Navbar;