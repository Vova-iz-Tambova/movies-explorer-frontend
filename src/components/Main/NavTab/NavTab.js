import './NavTab.css';

function NavTab() {
  return (
    <>
    <div className='panel__nav'>
      <div className='panel__links'>
        <a href='#project' className='panel__link  link__effect'>О проекте</a>
        <a href='#techs' className='panel__link  link__effect'>Технологии</a>
        <a href='#me' className='panel__link  link__effect'>Студент</a>
      </div>
    </div>
  </>
  )
};

export default NavTab;