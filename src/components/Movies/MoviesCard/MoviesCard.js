import './MoviesCard.css';
import preview from '../../../images/avatar.jpg'
import saveOff from '../../../images/save4d.svg'
import saveOn from '../../../images/save4.svg'

function MoviesCard() {
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
      <div className='card__save'
        style={{
          backgroundImage: `url(${saveOn})`,
        }}
      />
    </section>
  )
};

export default MoviesCard;