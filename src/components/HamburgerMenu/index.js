import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import '../HamburgerMenu/style.scss'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class HamburgerMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }

  handleClick() {
    this.setState({
      isOpen: false
    })
  }

  handleOnOpen() {
    this.setState({
      isOpen: true
    })
  }

  scrollToTop() {
    scroll.scrollToTop({duration: 500});
  }

  render() {
    return (
      <Menu slide onClick={() => this.handleOnOpen()}>
        <ul className='navbarMenu'>
          <a onClick={this.scrollToTop} href='/' className='menuItem'><li className='menuItem'>Home</li></a>

          <Link activeClass="active" to="series" spy={true} smooth={true} offset={-80} duration={500} onSetActive={this.handleSetActive} onClick={() => this.handleClick()}>
            <li className='menuItem'>Series</li>
          </Link>

          <Link activeClass="active" to="movies" spy={true} smooth={true} offset={-80} duration={500} onSetActive={this.handleSetActive} onClick={() => this.handleClick()}>
          <li className='menuItem'>Movies</li>
          </Link>

          <Link activeClass="active" to="recent" spy={true} smooth={true} offset={-80} duration={500} onSetActive={this.handleSetActive} onClick={() => this.handleClick()}>
          <li className='menuItem'>Recently Added</li>
          </Link>

          <Link activeClass="active" to="/" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive} onClick={() => this.handleClick()}>
          <li className='menuItem'>My list</li>
          </Link>
        </ul>
      </Menu>
    );
  }
}

export default HamburgerMenu;

