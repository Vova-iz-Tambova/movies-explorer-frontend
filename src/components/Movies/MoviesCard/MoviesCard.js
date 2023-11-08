import './MoviesCard.css';
import Preview from '../../../images/avatar.jpg';
import saveOff from '../../../images/save4d.svg';
import saveOn from '../../../images/save4.svg';
import unsave from '../../../images/unsave.svg';

function MoviesCard(props) {
  return (
    <section className='card'>
      <img className='card__preview  effect' src={Preview} alt='Статичный предосмотр видеофайла' />
      {props.savedMovies
        ?
        <div className='card__panel'>
          <div className='card__info'>
            <h2 className='card__title  effect'>Гриды это всё от лукавого (с) БитриксБитриксБитрикс</h2>
            <p className='card__duration'>3ч 33м</p>
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
            <h2 className='card__title'>Гриды это всё от лукавого (с) БитриксБитриксБитрикс</h2>
            <p className='card__duration'>3ч 33м</p>
          </div>
        </div>
      }

    </section>
  )
};

export default MoviesCard;