import './MoviesCard.css';
import saveOff from '../../../images/save4d.svg';
import saveOn from '../../../images/save4.svg';
import unsave from '../../../images/unsave.svg';

const movie = {
  image: "https://ic.pics.livejournal.com/kenichi_kitsune/11017263/438956/438956_original.jpg",
  nameRU: "Алита: Боевой ангел",
  duration: "2ч 22м"
};

function MoviesCard(props) {
  return (
    <section className='card'>
      <img className='card__preview  effect' src={movie.image} alt={movie.nameRU} />
      {props.savedMovies
        ?
        <div className='card__panel'>
          <div className='card__info'>
            <h2 className='card__title  effect'>{movie.nameRU}</h2>
            <p className='card__duration'>{movie.duration}</p>
          </div>
          <div className='card__save  animation'
            style={{
              backgroundImage: `url(${saveOn})`
            }}
          />
        </div>
        :
        <div className='card__panel card__panel_unsave'>
          <div className='card__info'>
            <h2 className='card__title'>{movie.nameRU}</h2>
            <p className='card__duration'>{movie.duration}</p>
          </div>
        </div>
      }

    </section>
  )
};

export default MoviesCard;