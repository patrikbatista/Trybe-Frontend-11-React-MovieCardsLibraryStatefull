// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.adicionarFilme = this.adicionarFilme.bind(this);
  }

  handleChange = ({ target }) => {
    const { name, type } = target;

    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  adicionarFilme(filme) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, filme] });
  }

  filterMovies({ searchText, bookmarkedOnly, selectedGenre, movies }) {
    let filteredMovie = movies.filter((movie) => movie.title.includes(searchText)
    || movie.subtitle.includes(searchText)
    || movie.storyline.includes(searchText));
    if (bookmarkedOnly === true) {
      filteredMovie = filteredMovie.filter((movie) => movie.bookmarked === true);
    }
    filteredMovie = filteredMovie.filter((movie) => movie.genre.includes(selectedGenre));
    return filteredMovie;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filterMovies(this.state) } />
        <AddMovie onClick={ this.adicionarFilme } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieLibrary;
