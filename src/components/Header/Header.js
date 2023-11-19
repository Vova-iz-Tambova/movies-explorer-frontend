import './Header.css'
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';

function Header({ loggedIn, isLanding }) {
  const location = useLocation();

  return (
    <header className={`${(location.pathname === "/") ? "header" : "header  header_dark"}`}>
      <Navigation
        loggedIn={loggedIn}
        // isLanding={isLanding}
      />
    </header >
  )
}
export default Header;
