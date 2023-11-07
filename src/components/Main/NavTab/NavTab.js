import './NavTab.css';

function NavTab() {
  return (
    <>
      <nav className='nav-tab'>
        <ul className='nav-tab__links'>
          <li><h2><a href='#project' className='nav-tab__link  effect'>О проекте</a></h2></li>
          <li><h2><a href='#techs' className='nav-tab__link  effect'>Технологии</a></h2></li>
          <li><h2><a href='#me' className='nav-tab__link  effect'>Студент</a></h2></li>
        </ul>
      </nav>
    </>
  )
};

export default NavTab;