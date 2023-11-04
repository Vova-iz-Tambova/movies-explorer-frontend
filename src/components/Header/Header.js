import './Header.css'
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn, isLanding }) {
  return (
    <header className={`${isLanding ? "header" : "header  header_dark"}`}>
      <Navigation loggedIn={loggedIn} />
    </header >
  )
}
export default Header;
