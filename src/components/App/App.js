import './App.css';
import React from 'react';
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

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        } />
        <Route path='/movies' element={
          <>
            <Header />
            <Movies />
            <Footer />
          </>
        } />
        <Route path='/saved-movies' element={
          <>
            <Header />
            <SavedMovies />
            <Footer />
          </>
        } />
        <Route path='/profile' element={
          <>
            <Header
              profile={true} />
            <Profile />
          </>
        } />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
