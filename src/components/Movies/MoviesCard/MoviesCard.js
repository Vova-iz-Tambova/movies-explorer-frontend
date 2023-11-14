import './MoviesCard.css';

function MoviesCard(props) {
  return (
    <div className='card'>
      <img className='card__preview  effect'
        src={`https://api.nomoreparties.co${props.image.url}`}
        alt={props.nameRU}
      />
      <div className='card__panel animation' onClick={props.handledCard}
        style={{
          backgroundImage: `url(${props.favored})`
        }}
      >
        <div className='card__info'>
          <h2 className='card__title'>{props.nameRU}</h2>
          <p className='card__duration'>
            {`${Math.floor(props.duration / 60)}ч ${props.duration % 60}м`}
          </p>
        </div>
        <div className='card__panel card__panel_unsave'>
        </div>
      </div>
    </div >
  )
};

export default MoviesCard;