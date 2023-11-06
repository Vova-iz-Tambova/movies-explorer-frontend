import './MoviesCard.css';
import preview from '../../../images/avatar.jpg';
import saveOff from '../../../images/save4d.svg';
import saveOn from '../../../images/save4.svg';
import unsave from '../../../images/unsave.svg';

function MoviesCard(props) {
  return (
    <section className='card'>
      <div className='card__preview  link__effect'
        style={{
          backgroundImage: `url(${preview})`,
          backgroundSize: "cover"
        }}
      />
      <h3 className='card__title  link__effect'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</h3>
      <p className='card__duration'>3ч 33м</p>
      {props.savedMovies
        ?
        <div className='card__save  animation'
          style={{
            backgroundImage: `url(${saveOn})`,
          }}
        />
        :
        <div className='card__remove  animation'>
          <div className='card__unsave  animation'></div>
        </div>
      }
    </section>
  )
};

export default MoviesCard;