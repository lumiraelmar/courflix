import React from 'react';
import '../Navbar/style.scss'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import HamburgerMenu from '../HamburgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

class Navbar extends React.Component {

  render() {
    const { from } = this.props
    return (
      <nav className='nav'>
        {(from !== 'selectedSeries') ?
          <div className='hamburgerMenu'>
            <HamburgerMenu /> 
          </div>:
          <a href='/'><FontAwesomeIcon icon={faArrowLeft} className='arrowIcon'/></a> }
        <a href='/'><img className='pageLogo' src={this.props.logo}></img></a>
        {from == 'home' &&
        <ul className='navbar'>
          <a href='/'><li className='link'>Home</li></a>
          <Link activeClass="active" to="series" spy={true} smooth={true} offset={-80} duration={500} onSetActive={this.handleSetActive}>
            <li className='link'>Series</li>
          </Link>
          <Link activeClass="active" to="movies" spy={true} smooth={true} offset={-80} duration={500} onSetActive={this.handleSetActive}>
          <li className='link'>Movies</li>
          </Link>
          <Link activeClass="active" to="recent" spy={true} smooth={true} offset={-80} duration={500} onSetActive={this.handleSetActive}>
          <li className='link'>Recently Added</li>
          </Link>
          <Link activeClass="active" to="mylist" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
          <li className='link'>My list</li>
          </Link>
        </ul> }
      </nav>
    )
  }
}

export default Navbar;