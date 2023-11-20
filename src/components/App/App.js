import './App.css';
import React, { useState, useEffect } from 'react';
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
import api from '../../utils/MainApi';
import getBeatFilmMovies from '../../utils/MoviesApi';
// import preloader from '../Movies/Preloader';

function App() {
  const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem("loggedIn")) || false);
  const [userName, setUserName] = useState(true);

  const [loader, setLoader] = useState(false);
  const [render, setRender] = useState(false);
  // const [allMovies, setAllMovies] = useState(JSON.parse(localStorage.getItem("allMovies")) || []);
  const [favoredMoves, setFavoredMoves] = useState(JSON.parse(localStorage.getItem("favoredMoves")) || []);
  const [fitredMoves, setFiltredMoves] = useState([]);
  const [shotrsMoves, setShortsMoves] = useState([]);
  const [movies, setMovies] = useState(JSON.parse(localStorage.getItem("movies")) || []);
  const [search, setSearch] = useState(JSON.parse(localStorage.getItem("search")) || '');
  const [isShorts, setIsShorts] = useState(JSON.parse(localStorage.getItem("isShort")) || false);

  const allMovies = JSON.parse(localStorage.getItem("allMovies"));

  useEffect(() => {
    getBeatFilmMovies().then(res => {
      localStorage.setItem("allMovies", JSON.stringify(res));
      console.log(res);
    }).catch((err => {
      console.log('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
    }));
  }, [allMovies]);

  useEffect(() => {
    api.getFavoredMoves().then(res => {
      localStorage.setItem("favoredMoves", JSON.stringify(res));
      setFavoredMoves(res);
      console.log(res);
    }).catch(console.error);
  }, [])

  useEffect(() => {
    if (search || isShorts)
      setFiltredMoves(() => {
        if (isShorts) {
          return allMovies.filter((item) =>
            (item.nameRU.toLowerCase().includes(search.toLowerCase()) ||
              item.nameEN.toLowerCase().includes(search.toLowerCase())) &&
            item.duration <= 40)
        } else {
          return allMovies.filter((item) =>
            item.nameRU.toLowerCase().includes(search.toLowerCase()) ||
            item.nameEN.toLowerCase().includes(search.toLowerCase())
          )
        }
      })
  }, [])

  useEffect(() => {
    setMovies(fitredMoves)
  }, [])

  return (
    <div className="page">
      <Routes>
        <Route path='/' element={
          <>
            <Header
              // isLanding={isLanding}
              loggedIn={loggedIn}
            />
            <Main />
            <Footer />
          </>
        } />
        <Route path='/movies' element={
          <ProtectedRoute loggedIn={loggedIn}>
            <Header loggedIn={loggedIn} />
            <Movies
              loader={loader}
              setRender={setRender}
              movies={movies}
              search={search}
              setSearch={setSearch}
              isShorts={isShorts}
              setIsShorts={setIsShorts}
            />
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
              <Profile
                setLoggedIn={setLoggedIn}
                userName={userName}
                setUserName={setUserName}
              />
            </main>
          </ProtectedRoute>
        } />
        <Route path='/signin' element={
          <main>
            <Login
              setLoggedIn={setLoggedIn}
              setUserName={setUserName}
            />
          </main>}
        />
        <Route path='/signup' element={
          <main>
            <Register
              setLoggedIn={setLoggedIn}
              setUserName={setUserName}
            />
          </main>} />
        <Route path='*' element={<main><PageNotFound /></main>} />
      </Routes>
    </div>
  );
}

export default App;
