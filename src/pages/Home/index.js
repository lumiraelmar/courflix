import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import './style.scss';
import logo from '../../assets/courflix.png'
import data from '../../data/courflix.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: [],
      mylist: [],
      from: 'home'
    }
  }

  componentDidMount() {
    const series = [...data[0].series, ...data[0].movies, ...data[0].recent]
    const watched = []
    /* filter movies that are being "watched" to show percentage */
      series.filter((serie) => {
        if (serie.watched !== undefined) {
          watched.push(serie)
        }
      })
        this.setState({
          watched: watched,
        });
    /* localStorage to get movies you add to 'My List'*/
    const stringifiedList = localStorage.getItem('list');
    const myList = [];
    if (stringifiedList) {
      const list = JSON.parse(stringifiedList)
      list.map(serie => {
        myList.push(serie);
      })
      this.setState({
        myList: myList
      })
    }
    }

  render() {
    window.scrollTo(0, 0);
    const { watched, from, myList } = this.state
    return (
      <div className='wrapper'>
        <Navbar logo={logo} from={from}/>
        <Hero infoSerie={data[0].series[0]} style={{backgroundImage:`linear-gradient(270deg, rgba(0, 0, 0, 0.0001) 65%, #000000 100%), url(${data[0].series[0].heroImg})`}} />
        <div className="gradient"></div>
        <div className='carouselsWrapper'>
          <Carousel content={data[0].recent} carouselTitle='Recently Added' id='recent' from={from}/>
          <Carousel content={data[0].series} carouselTitle='Series' id='series' from={from}/>
          <Carousel content={watched} watched='watched' carouselTitle='Continue Watching' id='recent' from={from}/>
          <Carousel content={data[0].movies} carouselTitle='Movies' id='movies' from={from}/>
          {(myList) &&
          <Carousel content={myList} carouselTitle='My List' id='mylist' from={from}/>}
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
