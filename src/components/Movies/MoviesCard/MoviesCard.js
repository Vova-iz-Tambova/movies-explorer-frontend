import './MoviesCard.css';
import preview from '../../../images/avatar.jpg'
import saveOff from '../../../images/save4d.svg'
import saveOn from '../../../images/save4.svg'
import unsave from '../../../images/unsave.svg'

function MoviesCard(props) {
  return (
    <section className='card'>
      <div className='card__preview'
        style={{
          backgroundImage: `url(${preview})`,
          backgroundSize: "cover"
        }}
      />
      <h3 className='card__title'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</h3>
      <p className='card__duration'>3ч 33м</p>
      {props.savedMovies
        ?
        <div className='card__save'
          style={{
            backgroundImage: `url(${saveOn})`,
          }}
        />
        :
        <div className='card__unsave'
          style={{
            backgroundImage: `url(${unsave})`,
          }}
        />
      }
    </section>
  )
};

export default MoviesCard;