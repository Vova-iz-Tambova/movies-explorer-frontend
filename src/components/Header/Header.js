import './Header.css'
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn, editProfile }) {
  return (
    <header className={`${editProfile ? "header  header_dark": "header"}`}>
      <Navigation loggedIn={loggedIn} />
    </header >
  )
}
export default Header;
