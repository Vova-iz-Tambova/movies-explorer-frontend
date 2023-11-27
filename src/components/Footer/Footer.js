import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className='footer__area'>
        <ul className='footer__links'>
          <li className='footer__item'>
            <Link to="https://practicum.yandex.ru/" target='_blank' className='footer__link  effect'
            >Яндекс.Практикум</Link>
          </li>
          <li className='footer__item'>
            <Link to="https://github.com/Vova-iz-Tambova" target='_blank' className='footer__link  effect'
            >Github</Link>
          </li>
        </ul>
        <p className='footer__copyrigth'>&copy; 2023 Вова из Тамбова</p>
      </div>
    </footer>
  )
}
export default Footer;