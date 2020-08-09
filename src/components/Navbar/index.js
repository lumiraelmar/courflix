import React from 'react';
import '../Navbar/style.scss'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import HamburgerMenu from '../HamburgerMenu';

class Navbar extends React.Component {

  scrollToTop() {
    scroll.scrollToTop({duration: 500});
  }

  render() {
    return (
      <nav className='nav'>
        <div className='hamburgerMenu'>
          <HamburgerMenu />
        </div>
        <a href='/'><img className='pageLogo' src={this.props.logo}></img></a>
        <ul className='navbar'>
          <a onClick={this.scrollToTop}><li className='link'>Home</li></a>
          <Link activeClass="active" to="series" spy={true} smooth={true} offset={-80} duration={500} onSetActive={this.handleSetActive}>
            <li className='link'>Series</li>
          </Link>
          <Link activeClass="active" to="movies" spy={true} smooth={true} offset={-80} duration={500} onSetActive={this.handleSetActive}>
          <li className='link'>Movies</li>
          </Link>
          <Link activeClass="active" to="recent" spy={true} smooth={true} offset={-80} duration={500} onSetActive={this.handleSetActive}>
          <li className='link'>Recently Added</li>
          </Link>
          <Link activeClass="active" to="/" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
          <li className='link'>My list</li>
          </Link>
        </ul>
      </nav>
    )
  }
}

export default Navbar;