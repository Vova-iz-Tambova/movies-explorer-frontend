import './NavTab.css';

function NavTab() {
  return (
    <nav className='nav-tab'>
      <ul className='nav-tab__links'>
        <li>
          <a href='#project' className='nav-tab__link  effect'>О проекте</a>
        </li>
        <li>
          <a href='#techs' className='nav-tab__link  effect'>Технологии</a>
        </li>
        <li>
          <a href='#me' className='nav-tab__link  effect'>Студент</a>
        </li>
      </ul>
    </nav>
  )
};

export default NavTab;