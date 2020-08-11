import React from 'react';
import Navbar from '../../components/Navbar/index';
import Hero from '../../components/Hero/index';
import Carousel from '../../components/Carousel';
import '../SelectedSeries/style.scss';
import logo from '../../assets/courflix.png'
import data from '../../data/courflix.json'



class SelectedSeries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serie: [],
      hero: '',
      content: [],
      carouselTitle: '',
      from: 'selectedSeries'
    }
  }

  componentDidMount() {
    const series = [...data[0].series, ...data[0].movies, ...data[0].recent]
      const filtered = series.filter((serie) => {
        return serie.id == this.props.match.params.id
      })

      if (filtered[0].episodes) {
        this.setState({
          serie: filtered[0],
          hero: filtered[0].heroImg,
          content: filtered[0].episodes,
          carouselTitle: 'Episodes',
        });
      } else {
        this.setState({
          serie: filtered[0],
          hero: filtered[0].heroImg,
          content: filtered[0].content,
          carouselTitle: 'Recommended movies for YOU',
        });
      }
      window.scrollBy(0, 0);
    }

  render() {
    const { serie, hero, carouselTitle, content, from } = this.state
    return (
      <div className='wrapper'>
        <Navbar logo={logo}/>
        <Hero infoSerie={serie} style={{backgroundImage:`linear-gradient(270deg, rgba(0, 0, 0, 0.0001) 65%, #000000 100%), url(${hero})`}} />
        <div className="gradient"></div>
        <div className='carouselsWrapper'>
          <Carousel content={content} carouselTitle={carouselTitle} from={from}/>
        </div>
      </div>
    )
  }
}

export default SelectedSeries;