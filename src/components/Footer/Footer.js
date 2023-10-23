import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <p className='footer__copyrigth'>&copy; 2023 Вова из Тамбова</p>
      <div className='footer__nav'>
        <Link to="https://practicum.yandex.ru/" className='footer__link'>Яндекс.Практикум</Link>
        <Link to="https://github.com/Vova-iz-Tambova" className='footer__link'>Github</Link>
      </div>
    </div>
  )
}
export default Footer;