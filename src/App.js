import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieList from './components/MovieList';
import data from './data';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieList movies={ data } />
    </div>
  );
}

export default App;
