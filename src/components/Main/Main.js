import './Main.css'
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';

function Main() {
  return (
    <section className='section'>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
    </section>
  )
}
export default Main;