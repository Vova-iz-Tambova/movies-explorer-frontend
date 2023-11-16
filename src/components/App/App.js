import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App(props) {
  const [loggedIn, setLoggedIn] = React.useState(JSON.parse(localStorage.getItem("isLogged")) || false);
  const [isLanding, setIsLanding] = React.useState(true);

  useEffect(() => {
    setIsLanding(true)
  }, [isLanding])

  return (
    <div className="page">
      <Routes>
        <Route path='/' element={
          <>
            <Header
              isLanding={isLanding}
              loggedIn={loggedIn}
            />
            <Main />
            <Footer />
          </>
        } />
        <Route path='/movies' element={
          <>
            <Header loggedIn={loggedIn} />
              <Movies />
            <Footer />
          </>
        } />
        <Route path='/saved-movies' element={
          <>
            <Header loggedIn={loggedIn} />
            <SavedMovies />
            <Footer />
          </>
        } />
        <Route path='/profile' element={
          <>
            <Header loggedIn={loggedIn} />
            <main>
              <Profile setLoggedIn={setLoggedIn} />
            </main>
          </>
        } />
        <Route path='/signin' element={
          <main>
            <Login
              setLoggedIn={setLoggedIn}
            />
          </main>}
        />
        <Route path='/signup' element={<main><Register /></main>} />
        <Route path='*' element={<main><PageNotFound /></main>} />
      </Routes>
    </div>
  );
}

export default App;
