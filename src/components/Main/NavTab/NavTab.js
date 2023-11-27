import './NavTab.css';
import { HashLink as Link } from 'react-router-hash-link';

function NavTab() {
  return (
    <nav className='nav-tab'>
      <ul className='nav-tab__links'>
        <li>
          <Link to='#project' className='nav-tab__link  effect'>О проекте</Link>
        </li>
        <li>
          <Link to='#techs' className='nav-tab__link  effect'>Технологии</Link>
        </li>
        <li>
          <Link to='#me' className='nav-tab__link  effect'>Студент</Link>
        </li>
      </ul>
    </nav>
  )
};

export default NavTab;