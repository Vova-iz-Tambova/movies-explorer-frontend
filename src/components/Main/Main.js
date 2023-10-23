import './Main.css'
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';

function Main() {
  return (
    <section className='section'>
      <Promo />
      <NavTab />
      <AboutProject />
    </section>
  )
}
export default Main;