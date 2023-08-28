import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/details/${movie.id}`} className="movie-card">
      <div className="movie-card-image">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="movie-card-info">
        <h2 className="movie-card-title">{movie.title}</h2>
        <p className="movie-card-rating">({movie.vote_average})</p>
      </div>
      <div className="movie-card-overview">
        <p className="movie-card-description">{movie.overview}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
