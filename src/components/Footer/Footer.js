import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className='footer__line'></div>
      <div className='footer__nav'>
        <Link to="https://practicum.yandex.ru/" target='_blank' className='footer__link  link__effect'>Яндекс.Практикум</Link>
        <Link to="https://github.com/Vova-iz-Tambova" target='_blank' className='footer__link  link__effect'>Github</Link>
      </div>
      <p className='footer__copyrigth'>&copy; 2023 Вова из Тамбова</p>
    </div>
  )
}
export default Footer;