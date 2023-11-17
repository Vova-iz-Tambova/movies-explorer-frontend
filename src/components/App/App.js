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
import ProtectedRoute from '../ProtectedRoute';

function App() {
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
          <ProtectedRoute loggedIn={loggedIn}>
            <Header loggedIn={loggedIn} />
            <Movies />
            <Footer />
          </ProtectedRoute>
        } />
        <Route path='/saved-movies' element={
          <ProtectedRoute loggedIn={loggedIn}>
            <Header loggedIn={loggedIn} />
            <SavedMovies />
            <Footer />
          </ProtectedRoute>
        } />
        <Route path='/profile' element={
          <ProtectedRoute loggedIn={loggedIn}>
            <Header loggedIn={loggedIn} />
            <main>
              <Profile setLoggedIn={setLoggedIn} />
            </main>
          </ProtectedRoute>
        } />
        <Route path='/signin' element={
          <main>
            <Login
              setLoggedIn={setLoggedIn}
            />
          </main>}
        />
        <Route path='/signup' element={<main><Register setLoggedIn={setLoggedIn} /></main>} />
        <Route path='*' element={<main><PageNotFound /></main>} />
      </Routes>
    </div>
  );
}

export default App;
