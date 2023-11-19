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
import api from '../../utils/MainApi';
import getBeatFilmMovies from '../../utils/MoviesApi';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(JSON.parse(localStorage.getItem("isLogged")) || false);
  const [userName, setUserName] = React.useState(true);

  const [allMovies, setAllMovies] = React.useState(JSON.parse(localStorage.getItem("allMovies")) || []);
  const [favoredMoves, setFavoredMoves] = React.useState(JSON.parse(localStorage.getItem("favoredMoves")) || []);
  const [movies, setMovies] = React.useState(JSON.parse(localStorage.getItem("movies")) || []);

  // useEffect(() => {
  //   const jwt = localStorage.getItem("jwt");
  //   if (jwt) {
  //     api.getUserInfo().then(res => res.json())
  //       .then((res) => {
  //         console.log(res);
  //         console.log(res.name);
  //         console.log(res.email);
  //         localStorage.setItem("name", res.name);
  //         localStorage.setItem("email", res.email);
  //         setUserName(res.name)
  //       })
  //       .catch(console.error)
  //   }
  // })

  // React.useEffect(() => {
  //   if (movies) {
  //     getBeatFilmMovies().then(res => {
  //       localStorage.setItem("allMovies", JSON.stringify(res));
  //       setAllMovies(res)
  //     }).catch(console.error);
  //   }
  // }, [movies])

  // React.useEffect(() => {
  //   api.getFavoredMoves().then(res => {
  //     localStorage.setItem("favoredMoves", JSON.stringify(res));
  //     setFavoredMoves(res);
  //   }).catch(console.error);
  // }, [movies])

  // React.useEffect(() => {
  //   setMovies(allMovies);
  // }, [allMovies, favoredMoves])

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
              movies={movies}
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
