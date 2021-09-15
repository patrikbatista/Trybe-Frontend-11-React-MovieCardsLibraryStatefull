// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      rating: 0,
      imagePath: '',
      storyline: '',
      genre: 'action',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(
      {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      },
    );
  }

  handleChange = (event) => {
    const { name, value, selected, type } = event.target;

    if (type === 'select') {
      this.setState({ [name]: selected });
    }
    this.setState({ [name]: value });
  }

  createInputText(name, value, data) {
    return (
      <input
        type="text"
        name={ name }
        value={ value }
        data-testid={ data }
        onChange={ this.handleChange }
      />
    );
  }

  createInputNumber(name, value, data) {
    return (
      <input
        type="number"
        name={ name }
        value={ value }
        data-testid={ data }
        onChange={ this.handleChange }
      />
    );
  }

  createInpuTextArea(name, value, data) {
    return (
      <textarea
        name={ name }
        value={ value }
        data-testid={ data }
        onChange={ this.handleChange }
      />
    );
  }

  createInpuSelect(name, value, data) {
    return (
      <select
        name={ name }
        selected={ value }
        data-testid={ data }
        onChange={ this.handleChange }
      >
        <option data-testid="genre-option" value="action">Ação</option>
        <option data-testid="genre-option" value="comedy">Comédia</option>
        <option data-testid="genre-option" value="thriller">Suspense</option>

      </select>
    );
  }

  render() {
    const { title, subtitle, rating, imagePath, storyline, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          {this.createInputText('title', title, 'title-input')}
        </label>

        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          {this.createInputText('subtitle', subtitle, 'subtitle-input')}
        </label>

        <label data-testid="image-input-label" htmlFor="image">
          Imagem
          {this.createInputText('imagePath', imagePath, 'image-input')}
        </label>

        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          {this.createInpuTextArea('storyline', storyline, 'storyline-input')}
        </label>

        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          {this.createInputNumber('rating', rating, 'rating-input')}
        </label>

        {/* requisito 13 */}
        <label data-testid="genre-input-label" htmlFor="Genre">
          Gênero
          {this.createInpuSelect('selectedGenre', genre, 'genre-input')}

        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.handleClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
export default AddMovie;
