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

  handleClose() {
    this.setState({
      isOpen: false
    })
  }

  handleStateChange(state) {
    this.setState({
      isOpen: state.isOpen
    })
  }

  scrollToTop() {
    scroll.scrollToTop({duration: 500});
  }

  render() {
    return (
      <Menu slide isOpen={this.state.isOpen} onStateChange={(state) => this.handleStateChange(state)}>
        <ul className='navbarMenu'>
          <a onClick={this.scrollToTop} href='/' className='menuItem'><li className='menuItem'>Home</li></a>

          <Link activeClass="active" to="series" spy={true} smooth={true} offset={-80} duration={500} onSetActive={this.handleSetActive} onClick={() => this.handleClose()}>
            <li className='menuItem'>Series</li>
          </Link>

          <Link activeClass="active" to="movies" spy={true} smooth={true} offset={-80} duration={500} onSetActive={this.handleSetActive} onClick={() => this.handleClose()}>
          <li className='menuItem'>Movies</li>
          </Link>

          <Link activeClass="active" to="recent" spy={true} smooth={true} offset={-80} duration={500} onSetActive={this.handleSetActive} onClick={() => this.handleClose()}>
          <li className='menuItem'>Recently Added</li>
          </Link>

          <Link activeClass="active" to="mylist" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive} onClick={() => this.handleClose()}>
          <li className='menuItem'>My list</li>
          </Link>
        </ul>
      </Menu>
    );
  }
}

export default HamburgerMenu;

