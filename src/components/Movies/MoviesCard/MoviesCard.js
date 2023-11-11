import './MoviesCard.css';
import unliked from '../../../images/save4d.svg';
import liked from '../../../images/save4.svg';
import unloved from '../../../images/unsave.svg';

function MoviesCard(props) {

function handleLiked() {
  
}

  return (
    <div className='card'>
      <img className='card__preview  effect'
        src={`https://api.nomoreparties.co${props.image.url}`}
        alt={props.nameRU}
      />
      <div className='card__panel animation'
        style={{
          backgroundImage: `url(${props.savedMovies ? liked : unliked})`
        }}
        onClick={handleLiked}
      >
        <div className='card__info'>
          <h2 className='card__title  effect'>{props.nameRU}</h2>
          <p className='card__duration'>
            {`${Math.floor(props.duration / 60)}ч ${props.duration % 60}м`}
          </p>
        </div>
        <div className='card__panel card__panel_unsave'>
        </div>
      </div>
    </div>
  )
};

export default MoviesCard;