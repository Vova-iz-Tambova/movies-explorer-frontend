import './Header.css'
import Navigation from '../Navigation/Navigation';

function Header({ profile }) {
  return (
    <header className={!profile ? "header" : "header  header_dark"}>
      <Navigation />
    </header >
  )
}
export default Header;
