import './Header.css'
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn, profile }) {
  return (
    <header className={!profile ? "header" : "header  header_dark"}>
      <Navigation loggedIn={loggedIn}/>
    </header >
  )
}
export default Header;
