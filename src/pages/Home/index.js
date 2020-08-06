import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Carousel from '../../components/Carousel';
import './style.scss';
import logo from '../../assets/courflix.png'
import data from '../../data/courflix.json'

class App extends React.Component {


  render() {
    return (
      <div>
        <Navbar logo={logo}/>
        <Hero infoSerie={data[0].series[1]} style={{backgroundImage:`linear-gradient(270deg, rgba(0, 0, 0, 0.0001) 65%, #000000 100%), url(${data[0].series[1].heroImg})`}}/>
        <div class="gradient"></div>
        <Carousel />
      </div>
    )
  }
}

export default App;
