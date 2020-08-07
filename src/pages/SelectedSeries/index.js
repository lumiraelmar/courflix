import React from 'react';
import Navbar from '../../components/Navbar/index';
import Hero from '../../components/Hero/index';
import EpisodeCarousel from '../../components/EpisodeCarousel';
import '../SelectedSeries/style.scss';
import logo from '../../assets/courflix.png'
import data from '../../data/courflix.json'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serie: [],
      hero: '',
      episodes: [],
      content: []
    }
  }

  componentDidMount() {
    const series = [...data[0].series, ...data[0].movies, ...data[0].recent]
      const filtered = series.filter((serie) => {
        return serie.id == this.props.match.params.id
      })


      this.setState({
        serie: filtered[0],
        hero: filtered[0].heroImg,
        episodes: filtered[0].episodes,
        content: filtered[0].content
      });
      
    }

  render() {
    const { serie, hero, episodes, content } = this.state
    
    return (
      <div className='wrapper'>
        <Navbar logo={logo}/>
        <Hero infoSerie={serie} style={{backgroundImage:`linear-gradient(270deg, rgba(0, 0, 0, 0.0001) 65%, #000000 100%), url(${hero})`}} />
        <div class="gradient"></div>
        <EpisodeCarousel episodes={episodes} content={content}/>
      </div>
    )
  }
}

export default App;